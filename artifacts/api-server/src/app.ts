import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://claimyourvoice.org',
    'https://www.claimyourvoice.org',
    /\.replit\.dev$/,
    /\.replit\.app$/,
  ],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));

export default app;
