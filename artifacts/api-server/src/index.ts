import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import app from "./app";
import { logger } from "./lib/logger";
import { registerRoutes } from "./routes/tcp_routes";
import { WebhookHandlers } from "./webhookHandlers";
import { getStripeSync } from "./stripeClient";

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

async function initStripe() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    logger.info("[STRIPE] No DATABASE_URL, skipping Stripe initialization");
    return;
  }

  const isReplit = !!process.env.REPLIT_DOMAINS;
  if (!isReplit) {
    logger.info("[STRIPE] Not on Replit, skipping managed webhook setup");
    return;
  }

  const userStripeKey = process.env.STRIPE_SECRET_KEY;
  if (!userStripeKey || (!userStripeKey.startsWith("sk_live_") && !userStripeKey.startsWith("sk_test_"))) {
    logger.info("[STRIPE] Skipping StripeSync - no valid user STRIPE_SECRET_KEY");
    return;
  }

  try {
    const { runMigrations } = await import("stripe-replit-sync");
    logger.info("[STRIPE] Initializing schema...");
    await runMigrations({ databaseUrl, schema: "stripe" });
    logger.info("[STRIPE] Schema ready");

    const stripeSync = await getStripeSync();
    const webhookBaseUrl = `https://${process.env.REPLIT_DOMAINS?.split(",")[0]}`;
    const { webhook, uuid } = await stripeSync.findOrCreateManagedWebhook(
      `${webhookBaseUrl}/api/stripe/webhook`,
      { enabled_events: ["*"], description: "ClaimYourVoice Stripe webhook" }
    );
    logger.info({ url: webhook.url, uuid }, "[STRIPE] Webhook configured");

    stripeSync.syncBackfill()
      .then(() => logger.info("[STRIPE] Data synced"))
      .catch((err: any) => logger.error(err, "[STRIPE] Sync error"));
  } catch (error) {
    logger.error(error, "[STRIPE] Init error");
  }
}

const httpServer = createServer(app);

// Stripe webhook must be registered BEFORE express.json() global middleware
// so it can receive the raw body for signature verification
app.post(
  "/api/stripe/webhook/:uuid",
  express.raw({ type: "application/json" }),
  async (req: Request, res: Response) => {
    const signature = req.headers["stripe-signature"];
    if (!signature) {
      return res.status(400).json({ error: "Missing stripe-signature" });
    }

    try {
      const sig = Array.isArray(signature) ? signature[0] : signature;
      if (!Buffer.isBuffer(req.body)) {
        logger.error("[STRIPE WEBHOOK] req.body is not a Buffer");
        return res.status(500).json({ error: "Webhook processing error" });
      }

      const { uuid } = req.params;
      await WebhookHandlers.processWebhook(req.body as Buffer, sig, uuid);
      return res.json({ received: true });
    } catch (err: any) {
      logger.error(err, "[STRIPE WEBHOOK] Error");
      return res.status(500).json({ error: "Webhook processing error" });
    }
  }
);

// JSON body parsing AFTER the raw stripe webhook route
app.use(express.json());

// Error middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  logger.error(err, "Unhandled error");
});

(async () => {
  await initStripe();
  await registerRoutes(httpServer, app);

  httpServer.listen(port, "0.0.0.0", () => {
    logger.info({ port }, "Server listening");
  });
})();
