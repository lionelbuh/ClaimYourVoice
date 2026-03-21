import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const GREEN_DARK   = "#085041";
const GREEN_MID    = "#1D9E75";
const GREEN_LIGHT  = "#9FE1CB";
const GREEN_PALE   = "#E1F5EE";
const GREEN_PALEST = "#f4fbf8";
const PURPLE       = "#534AB7";
const TEAL         = "#3AADA8";
const TEXT         = "#0d2b24";
const MUTED        = "#5a7a72";
const BORDER       = "#c8e8df";

const testimonials = [
  {
    text: "I finally understood where my child was on their SM journey. The assessment gave us a real starting point, not more confusion. For the first time, I felt like someone actually got it.",
    name: "Sarah L.",
    role: "Parent of a child with SM",
    initial: "S",
    color: GREEN_DARK,
  },
  {
    text: "I've lived with Selective Mutism for 20 years. Having a Voice Mentor who truly understands, not a therapist reading from a manual, made all the difference. I finally felt seen.",
    name: "Marcus T.",
    role: "Adult living with SM",
    initial: "M",
    color: PURPLE,
  },
  {
    text: "As a teen, I thought I was the only one. Finding this community changed that. People here don't try to fix you. They walk alongside you. That's everything.",
    name: "Amelia R.",
    role: "Teen navigating SM",
    initial: "A",
    color: TEAL,
  },
];

const steps = [
  {
    num: "1",
    title: "Take your SM Journey Score",
    desc: "5 minutes. Honest questions. A clear picture of where you are and what matters most right now.",
  },
  {
    num: "2",
    title: "Connect with a Voice Mentor",
    desc: "Browse real people who have lived the SM experience. Find someone whose story resonates with yours.",
  },
  {
    num: "3",
    title: "Move forward together",
    desc: "Ask questions, join discussions, and follow a path built around your pace. Not someone else's timeline.",
  },
];

const pillars = [
  { icon: "🌱", title: "Understand your journey", desc: "SM-specific tools that meet you where you are" },
  { icon: "📈", title: "Track your progress",      desc: "See what's working at your own pace" },
  { icon: "🤝", title: "Learn from lived experience", desc: "Real insights from people who've been there" },
  { icon: "💬", title: "Never alone again",         desc: "A community that truly understands SM" },
];

function ScoreCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [widths, setWidths] = useState(["0%", "0%", "0%"]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          setTimeout(() => setWidths(["62%", "45%", "38%"]), 100);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  const bars = [
    { label: "Clarity",    value: widths[0] },
    { label: "Readiness", value: widths[1] },
    { label: "Support",   value: widths[2] },
  ];

  return (
    <div ref={ref} style={{ background: "white", borderRadius: 20, padding: "36px" }}>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: GREEN_DARK, marginBottom: 8 }}>
        Your SM Journey Score
      </div>
      <div style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.6, marginBottom: 24 }}>
        Answer a few honest questions and see a clear picture of where your journey stands today.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
        {bars.map((bar) => (
          <div key={bar.label}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 500, color: TEXT, marginBottom: 6 }}>
              <span>{bar.label}</span>
              <span style={{ color: GREEN_MID, fontSize: 11 }}>pending</span>
            </div>
            <div style={{ height: 6, background: GREEN_PALE, borderRadius: 100, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: bar.value,
                  borderRadius: 100,
                  background: GREEN_MID,
                  transition: "width 1.2s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <Link href="/member-focus">
        <button
          style={{
            display: "block",
            width: "100%",
            background: GREEN_MID,
            color: "white",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            padding: "14px",
            borderRadius: 100,
            textAlign: "center",
            border: "none",
            cursor: "pointer",
          }}
        >
          Take the SM Journey Score
        </button>
      </Link>
      <div style={{ textAlign: "center", fontSize: 11, color: MUTED, marginTop: 10 }}>
        No sign-up required to start. Results are instant.
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ background: GREEN_PALEST, color: TEXT, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "100px 24px 80px", textAlign: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 600,
          background: "radial-gradient(ellipse at 50% 40%, #9FE1CB30 0%, #534AB710 50%, transparent 75%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase",
            color: GREEN_MID, background: GREEN_PALE,
            padding: "7px 18px", borderRadius: 100, marginBottom: 28,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", background: GREEN_MID,
              display: "inline-block",
            }} />
            Selective Mutism Community
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: 1.08,
            color: GREEN_DARK,
            maxWidth: 760,
            margin: "0 auto 24px",
          }}>
            You don't have to figure out<br/>
            <em style={{ fontStyle: "italic", color: GREEN_MID }}>SM alone anymore.</em>
          </h1>

          <p style={{ fontSize: 18, fontWeight: 300, color: MUTED, maxWidth: 540, margin: "0 auto 16px", lineHeight: 1.7 }}>
            A warm, moderated community where people living with Selective Mutism, and the families who love them, find real understanding, real guidance, and a real path forward.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: 10, margin: "24px auto 36px", maxWidth: 560,
          }}>
            {["Teens navigating SM", "Adults living with SM", "Parents of children with SM", "Families & loved ones"].map((tag) => (
              <span key={tag} style={{
                fontSize: 13, fontWeight: 400, color: GREEN_DARK,
                background: "white", border: `1px solid ${BORDER}`,
                padding: "8px 18px", borderRadius: 100,
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <Link href="/member-focus">
              <button style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: GREEN_DARK, color: "white",
                fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
                padding: "16px 36px", borderRadius: 100,
                border: "none", cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = GREEN_MID)}
              onMouseLeave={e => (e.currentTarget.style.background = GREEN_DARK)}
              data-testid="button-hero-cta"
              >
                Take the SM Journey Score
                <span style={{
                  width: 18, height: 18, background: "rgba(255,255,255,0.2)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12,
                }}>→</span>
              </button>
            </Link>
            <span style={{ fontSize: 12, color: MUTED, fontWeight: 300, letterSpacing: "0.3px" }}>
              Free. 5 minutes. No clinical jargon. Just clarity.
            </span>
          </div>
        </div>
      </section>

      {/* ── SM JOURNEY SCORE ── */}
      <div style={{ padding: "0 24px 80px" }} id="score">
        <div style={{
          background: GREEN_DARK, borderRadius: 32, padding: "72px 48px",
          maxWidth: 1080, margin: "0 auto", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 400, height: 400,
            background: "radial-gradient(ellipse, #1D9E7520, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64, alignItems: "center",
          }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: GREEN_LIGHT, display: "block", marginBottom: 16 }}>
                SM Journey Score
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(26px,3.5vw,38px)", color: "white", lineHeight: 1.15, marginBottom: 16 }}>
                Find out where you are.<br/>
                <em style={{ fontStyle: "italic", color: GREEN_LIGHT }}>Know what comes next.</em>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, color: GREEN_LIGHT, lineHeight: 1.75 }}>
                A free assessment built specifically for people affected by Selective Mutism. No clinical language. No judgment. Just an honest, clear picture of where your SM journey stands today.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
                {[
                  { icon: "🔍", title: "See your blind spots", desc: "Understand what's really holding you back, not just what you think it is. Whether it's you or your child." },
                  { icon: "🧭", title: "Get a personalized snapshot", desc: "Your score breaks down clarity, readiness, and next steps in plain, human language." },
                  { icon: "✦",  title: "Know your starting point", desc: "No vague advice. A specific, compassionate direction based on your answers. Not a textbook." },
                ].map((f) => (
                  <div key={f.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, background: "rgba(29,158,117,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16,
                    }}>{f.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 4 }}>{f.title}</h4>
                      <p style={{ fontSize: 13, fontWeight: 300, color: GREEN_LIGHT, lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ScoreCard />
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ padding: "80px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: GREEN_MID, display: "block", marginBottom: 16 }}>
            Real voices
          </span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px,4vw,44px)", color: GREEN_DARK, lineHeight: 1.15, margin: "0 auto" }}>
            From people who <em style={{ fontStyle: "italic", color: GREEN_MID }}>know</em><br/>exactly how you feel
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20, maxWidth: 1080, margin: "0 auto",
        }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{
              background: "white", borderRadius: 20, padding: 32,
              border: `1px solid ${BORDER}`,
            }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: GREEN_LIGHT, lineHeight: 1, marginBottom: 8 }}>"</div>
              <p style={{ fontSize: 15, fontWeight: 300, color: TEXT, lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: t.color,
                  color: "white", fontSize: 14, fontWeight: 600,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: GREEN_DARK }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: MUTED, fontWeight: 300 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div style={{ padding: "0 24px 80px" }}>
        <div style={{ background: "white", borderRadius: 32, padding: "72px 48px", maxWidth: 1080, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: GREEN_MID, display: "block", marginBottom: 16 }}>
              How it works
            </span>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px,4vw,44px)", color: GREEN_DARK, lineHeight: 1.15, marginBottom: 16 }}>
              Simple. Warm. <em style={{ fontStyle: "italic", color: GREEN_MID }}>Built around you.</em>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, color: MUTED, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
              No complicated intake. No waiting lists. No clinical gatekeeping. Just a clear path from where you are to where you want to be.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32, marginBottom: 56 }}>
            {steps.map((step) => (
              <div key={step.num} style={{
                textAlign: "center", padding: "32px 24px",
                borderRadius: 16, background: GREEN_PALEST, border: `1px solid ${BORDER}`,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: GREEN_DARK, color: "white",
                  fontSize: 16, fontWeight: 600, fontFamily: "'DM Serif Display', serif",
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: GREEN_DARK, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: MUTED, lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 48 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{
                textAlign: "center", padding: "24px 16px", borderRadius: 16, border: `1px solid ${BORDER}`,
              }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{p.icon}</div>
                <h4 style={{ fontSize: 13, fontWeight: 600, color: GREEN_DARK, marginBottom: 4 }}>{p.title}</h4>
                <p style={{ fontSize: 12, color: MUTED, fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Mentor Strip */}
          <div style={{
            background: GREEN_PALE, borderRadius: 20, padding: 40,
            display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 32,
          }}>
            <div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: GREEN_DARK, marginBottom: 8 }}>
                Our Voice Mentors are not therapists.<br/>They're people who truly get it.
              </h3>
              <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.7, maxWidth: 480 }}>
                Every Voice Mentor on ClaimYourVoice.org has lived the SM experience, as a person with SM or as a family member walking that path. They're not here to fix you. They're here because they remember what it felt like to need someone who understood. They want to be that person for you.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, background: GREEN_DARK, color: "white" }}>
                  Voice Mentor: lived SM experience
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, background: PURPLE, color: "white" }}>
                  Family Mentor: parent or loved one
                </span>
              </div>
            </div>
            <Link href="/guides">
              <button style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: GREEN_DARK, color: "white",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
                padding: "14px 28px", borderRadius: 100,
                border: "none", cursor: "pointer", whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = GREEN_MID)}
              onMouseLeave={e => (e.currentTarget.style.background = GREEN_DARK)}
              >
                Meet our Mentors →
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div style={{ textAlign: "center", padding: "100px 24px", maxWidth: 700, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px,5vw,52px)", color: GREEN_DARK, lineHeight: 1.15, marginBottom: 20 }}>
          Five minutes to understand<br/>
          <em style={{ fontStyle: "italic", color: GREEN_MID }}>where your journey really stands.</em>
        </h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: MUTED, lineHeight: 1.7, marginBottom: 36 }}>
          No sign-up. No clinical jargon. No pressure. Just a clear, compassionate starting point. Free, and yours to keep.
        </p>
        <Link href="/member-focus">
          <button style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: GREEN_DARK, color: "white",
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
            padding: "16px 36px", borderRadius: 100,
            border: "none", cursor: "pointer",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = GREEN_MID)}
          onMouseLeave={e => (e.currentTarget.style.background = GREEN_DARK)}
          data-testid="button-cta-get-started"
          >
            Take the SM Journey Score
            <span style={{
              width: 18, height: 18, background: "rgba(255,255,255,0.2)", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12,
            }}>→</span>
          </button>
        </Link>
        <div style={{ fontSize: 12, color: MUTED, marginTop: 14 }}>Free. No credit card. No commitment.</div>
      </div>

    </div>
  );
}
