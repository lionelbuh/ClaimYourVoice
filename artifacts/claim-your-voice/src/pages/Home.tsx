import { Button } from "@/components/ui/button";
import { ArrowRight, Target, BarChart3, BookOpen, Eye, Compass, CheckCircle, Quote } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const rotatingGroups = [
  ["No more silence.", "No more going it alone.", "No more wondering if it gets better."],
  ["Children with Selective Mutism.", "Teens finding their voice.", "Adults reclaiming their confidence."],
  ["Clarity about where you are.", "Guidance for what comes next.", "A community that truly gets it."],
  ["Families seeking answers.", "SM Warriors ready for change.", "People who deserve to be heard."],
];

const founderQuotes = [
  {
    quote: "I finally understood where my child was on their SM journey. The assessment gave us a clear starting point in just a few minutes.",
    name: "Sarah L.",
    role: "Parent of an SM Warrior",
  },
  {
    quote: "I've lived with Selective Mutism for 20 years. Having a Guide who truly understands made all the difference — I finally felt seen.",
    name: "Marcus T.",
    role: "Adult SM Warrior",
  },
];

export default function Home() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setGroupIndex((prev) => (prev + 1) % rotatingGroups.length);
        setVisible(true);
      }, 600);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-10" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, #0D566C 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #FF6B5C 0%, transparent 70%)" }} />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-snug tracking-tight mb-4" style={{ color: "#0D566C" }} data-testid="text-hero-headline">
            Built for people with Selective Mutism who are ready to find their voice.
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: "#4A4A4A" }}>
            Find out where you are on your SM journey, what's holding you back, and what to do next — in 5 minutes.
          </p>
          <div className="min-h-[100px] flex items-center justify-center mb-8" data-testid="text-hero-rotating">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
            >
              {rotatingGroups[groupIndex].map((line, i) => (
                <p key={i} className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: "#4A4A4A" }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
          <Link href="/member-focus">
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: "#FF6B5C", color: "#FFFFFF", border: "none" }}
              data-testid="button-hero-cta"
            >
              Take the SM Journey Score <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-sm" style={{ color: "#8A8A8A" }}>Free. 5 minutes. No clinical jargon. Just clarity.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#F3F3F3" }} data-testid="section-social-proof">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {founderQuotes.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 relative" style={{ boxShadow: "0 2px 12px rgba(224,224,224,0.5)" }} data-testid={`card-quote-${i}`}>
                <Quote className="h-8 w-8 mb-3 opacity-20" style={{ color: "#0D566C" }} />
                <p className="text-base leading-relaxed mb-4 italic" style={{ color: "#4A4A4A" }}>
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#0D566C" }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0D566C" }}>{item.name}</p>
                    <p className="text-xs" style={{ color: "#8A8A8A" }}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SM Journey Score Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAF9F7" }} data-testid="section-member-focus">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(255,107,92,0.12)" }}>
              <Target className="h-7 w-7" style={{ color: "#FF6B5C" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: "#0D566C" }}>
              Your SM Journey Score
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-2" style={{ color: "#4A4A4A" }}>
              A free assessment built for those affected by Selective Mutism. Answer a few honest questions and get a clear picture of where your journey actually stands today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {[
              { title: "See your blind spots", desc: "Find out what's really holding you back, not what you think is." },
              { title: "Get a personalized snapshot", desc: "Your score breaks down clarity, readiness, and next steps in plain language." },
              { title: "Know what to do next", desc: "No vague advice. You get a specific starting point based on your answers." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ boxShadow: "0 2px 12px rgba(224,224,224,0.5)" }} data-testid={`card-focus-benefit-${i}`}>
                <CheckCircle className="h-8 w-8 mx-auto mb-3" style={{ color: "#FF6B5C" }} />
                <h3 className="text-base font-bold mb-2" style={{ color: "#0D566C" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/member-focus">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
                style={{ backgroundColor: "#FF6B5C", color: "#FFFFFF", border: "none" }}
                data-testid="button-focus-score-cta"
              >
                Take the SM Journey Score <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-4 text-sm" style={{ color: "#8A8A8A" }}>No sign-up required to start. Results are instant.</p>
          </div>
        </div>
      </section>

      {/* What Is ClaimYourVoice Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F3F3F3" }} data-testid="section-what-is-tcp">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(245,197,66,0.15)" }}>
              <Compass className="h-6 w-6" style={{ color: "#F5C542" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "#0D566C" }}>
              What Happens After Your Score?
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "#4A4A4A" }}>
            <p>
              Your SM Journey Score is the starting point. What comes next is what makes the real difference.
            </p>
            <p>
              ClaimYourVoice connects you with experienced SM Guides and Specialists who truly understand Selective Mutism. They help you go from "I don't know where to start" to "I have a clear, compassionate plan."
            </p>
            <p>
              You get structured, evidence-informed guidance — not generic advice. Every step is built around where you are right now on your SM journey.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { num: "1", text: "Take your SM Journey Score and see where you are" },
              { num: "2", text: "Get matched with an SM Guide who fits your needs" },
              { num: "3", text: "Move forward with structure, compassion, and real support" },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-3 bg-white rounded-xl p-4" style={{ boxShadow: "0 2px 10px rgba(224,224,224,0.5)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-sm" style={{ backgroundColor: "rgba(245,197,66,0.2)", color: "#0D566C" }}>
                  {step.num}
                </div>
                <p className="text-sm font-medium" style={{ color: "#4A4A4A" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAF9F7" }} data-testid="section-features">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: "#0D566C" }}>
              How It Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A4A4A" }}>
              Simple tools and real guidance to help you move forward with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="h-7 w-7" />,
                title: "Understand Your Journey",
                desc: "Get simple, SM-specific tools that help you see exactly where you are — without feeling overwhelmed.",
              },
              {
                icon: <BarChart3 className="h-7 w-7" />,
                title: "Track Your Progress",
                desc: "See what's working and what still needs support, so you can move forward with confidence and compassion.",
              },
              {
                icon: <BookOpen className="h-7 w-7" />,
                title: "Learn from SM Warriors",
                desc: "Real insights and practical guidance from people who have lived the SM experience and come out stronger.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "0 2px 12px rgba(224,224,224,0.6)" }}
                data-testid={`card-feature-${i}`}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(245,197,66,0.15)" }}>
                  <span style={{ color: "#F5C542" }}>{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0D566C" }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: "#4A4A4A" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClaimYourVoice / Mentorship Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F3F3F3" }} data-testid="section-why-tcp">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(75,63,114,0.1)" }}>
                <Compass className="h-8 w-8" style={{ color: "#4B3F72" }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "#4B3F72" }}>
                A human touch for every step of your journey
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#4A4A4A" }}>
                SM is complex and deeply personal. Our SM Guides and Specialists bring lived experience, clinical knowledge, and genuine compassion. You'll never feel alone again. Every step forward is clear, purposeful, and built around you.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Clarity", value: "See what matters" },
                  { label: "Direction", value: "Know your next step" },
                  { label: "Guidance", value: "Human mentorship" },
                  { label: "Progress", value: "Measurable growth" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 text-center" style={{ boxShadow: "0 2px 12px rgba(224,224,224,0.5)" }}>
                    <p className="font-bold mb-1" style={{ color: "#4B3F72" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "#4A4A4A" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0D566C" }} data-testid="section-cta">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Stop overthinking. Start with your score.
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Five minutes to find out where you stand, what's missing, and what to do first. It's free and the results are yours to keep.
          </p>
          <Link href="/member-focus">
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: "#FF6B5C", color: "#FFFFFF", border: "none" }}
              data-testid="button-cta-get-started"
            >
              Take the SM Journey Score <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>No credit card. No sign-up to start. Just answers.</p>
        </div>
      </section>

    </div>
  );
}
