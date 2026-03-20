import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqSections = [
  {
    title: "About ClaimYourVoice",
    items: [
      {
        question: "What is ClaimYourVoice?",
        answer: "ClaimYourVoice is a support platform for people affected by Selective Mutism (SM). We connect SM Warriors — people living with SM, parents, caregivers, and educators — with experienced SM Guides, licensed Specialists, and compassionate Supporters who provide personalized, ongoing guidance on the SM journey."
      },
      {
        question: "How is ClaimYourVoice different from therapy or traditional SM resources?",
        answer: "ClaimYourVoice is a complement to professional therapy, not a replacement. We provide consistent peer and expert support, community connection, and structured progress tools in between clinical appointments. Our Guides offer lived experience, our Specialists offer clinical expertise, and our platform keeps SM Warriors accountable to their goals."
      },
      {
        question: "How is AI used on ClaimYourVoice?",
        answer: "AI tools on ClaimYourVoice help members clarify their SM journey, improve how they express their experiences, and create structured personal voice plans. SM Guides then review, encourage, and guide members based on real-world lived and professional experience."
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "Who can join ClaimYourVoice?",
        answer: "ClaimYourVoice is open to anyone affected by Selective Mutism — adults living with SM, parents and caregivers of children with SM, educators, and professionals who support the SM community. You don't need any prior knowledge or credentials to join; our tools and guides will help you find clarity and direction."
      },
      {
        question: "What do I need to get started?",
        answer: "Just your story. We guide you with structured support, help you build your personal voice plan, and connect you with the right SM Guide for your journey."
      },
      {
        question: "Is ClaimYourVoice global?",
        answer: "Yes. SM Warriors and Guides can join from anywhere in the world. Guidance is provided asynchronously, so time zones aren't a constraint. When working with Specialist clinicians, sessions are flexible and arranged directly, often with local or telehealth-ready experts."
      },
    ],
  },
  {
    title: "Guides & Approval",
    items: [
      {
        question: "How does the approval process work?",
        answer: "After completing your SM journey application and voice plan, your profile is shared with relevant SM Guides. If a Guide accepts your application, you'll be approved to join their group — that's when billing begins. Until then, there's no charge."
      },
      {
        question: "What happens if no guide accepts my application?",
        answer: "You pay nothing. We may provide suggestions to strengthen your voice plan and help you resubmit when you're ready."
      },
      {
        question: "Do I get matched with only one guide?",
        answer: "Initially, yes. You're assigned to the SM Guide who best fits your journey, background, and goals. You may later request access to additional Guides or Specialists for specific challenges."
      },
      {
        question: "Can I switch guides later?",
        answer: "Yes. If your journey evolves or you feel you'd benefit from a fresh perspective, you can discuss it with your current Guide to determine the right time for a transition. They'll help you and recommend the next Guide who best fits your current goals."
      },
      {
        question: "Will I have the same guide throughout my journey?",
        answer: "Most Guide relationships continue over time, but things can change. Your needs may evolve or a Guide may become unavailable. If a change is needed, ClaimYourVoice will help match you with a new Guide who fits your current stage and goals."
      },
    ],
  },
  {
    title: "Guide Response Guidelines",
    items: [
      {
        question: "How often can I ask my guide questions?",
        answer: "You can ask as many questions as you like, but Guides respond thoughtfully when guidance is truly needed. This ensures you get high-quality, meaningful support on the most important things — not a flood of quick replies that lose their impact."
      },
      {
        question: "Is there a schedule for guide responses?",
        answer: "Yes. To keep things structured, send all your questions by Sunday evening. Your Guide will review and respond by Friday, providing focused support for the week ahead."
      },
      {
        question: "Why don't guides respond immediately to every message?",
        answer: "Thoughtful guidance takes time and context. By batching questions, your Guide can give high-quality, personalized responses — ensuring each answer is truly helpful to your SM journey."
      },
      {
        question: "Can I get help on urgent issues outside the schedule?",
        answer: "For significant setbacks or decisions that could affect your wellbeing or progress, your Guide will prioritize a response. Routine questions should be included in the weekly batch."
      },
      {
        question: "What if I miss the Sunday deadline?",
        answer: "Your Guide will review questions in the next cycle. To make the most of your guidance, try to stick to the weekly schedule — it keeps your SM journey moving forward with momentum."
      },
    ],
  },
  {
    title: "Trust & Privacy",
    items: [
      {
        question: "Is my personal information and SM journey data protected?",
        answer: "Yes. ClaimYourVoice takes privacy and confidentiality seriously. Your personal journey details are stored securely and shared only with your assigned Guide and Specialists. We never sell or share your data with third parties."
      },
      {
        question: "Who owns my personal voice plan and journey content?",
        answer: "You retain full ownership of everything you share and create on ClaimYourVoice at all times."
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        question: "When does billing start?",
        answer: "Community – Free: No billing. Get started immediately and explore the community at your own pace.\n\nMembers Circle – $9.99/month: Billing starts immediately upon signup. Gain full access to personalized SM guidance, structured support, and expert Specialist access.\n\nIntensive Circle – $49/month: Billing begins only after your application is reviewed and approved by an SM Guide. This ensures your journey is ready for focused, intensive support."
      },
      {
        question: "Are Specialist sessions included in the membership fee?",
        answer: "Membership includes full access to the platform, community, and SM Guide matching. Specialist clinical sessions are paid separately, with each expert setting their own rate based on experience and specialty."
      },
      {
        question: "What if I need specialized clinical help (speech therapy, CBT, school support)?",
        answer: "ClaimYourVoice connects you with SM Specialists (speech-language pathologists, psychologists, educators, CBT therapists) who offer paid sessions. The Specialist sets their own rate, you pay it in full, and we keep a 20% platform fee to sustain and grow the community."
      },
      {
        question: "Can I cancel my membership anytime?",
        answer: "Yes. You can cancel with one click inside your dashboard. Billing stops at the end of the current billing cycle."
      },
    ],
  },
  {
    title: "Progress & Support",
    items: [
      {
        question: "Does ClaimYourVoice provide clinical treatment for Selective Mutism?",
        answer: "No. ClaimYourVoice is a peer support and guidance platform, not a clinical service. Our SM Guides provide lived-experience support, and our Specialists offer professional expertise — but we encourage all members to work with licensed clinicians for formal treatment."
      },
      {
        question: "Can ClaimYourVoice help me find clinical resources or therapists?",
        answer: "ClaimYourVoice connects members with SM Specialists who may include licensed therapists, speech-language pathologists, and educators. We also share community resources and can help you prepare for working with clinical professionals. We don't guarantee clinical outcomes, but we help you show up ready."
      },
    ],
  },
];

function generateFAQSchema() {
  const allItems = faqSections.flatMap((section) => section.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function FAQItem({ question, answer, testId }: { question: string; answer: string; testId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-all duration-200"
      style={{ boxShadow: "0 2px 10px rgba(224,224,224,0.4)" }}
    >
      <button
        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        data-testid={`button-faq-${testId}`}
      >
        <span className="text-base font-semibold leading-snug" style={{ color: "#0D566C" }}>{question}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 transition-transform duration-300"
          style={{ color: "#FF6B5C", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="pt-0 border-t" style={{ borderColor: "#F3F3F3" }}>
            <p className="pt-4 leading-relaxed text-[15px] whitespace-pre-line" style={{ color: "#4A4A4A" }} data-testid={`text-faq-answer-${testId}`}>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QA() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(generateFAQSchema());
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, []);

  let itemCounter = 0;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-snug tracking-tight mb-5" style={{ color: "#0D566C" }} data-testid="text-faq-title">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#4A4A4A" }} data-testid="text-faq-subtitle">
            Everything you need to know about ClaimYourVoice.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqSections.map((section, sectionIndex) => {
        const bg = sectionIndex % 2 === 0 ? "#F3F3F3" : "#FAF9F7";
        return (
          <section
            key={sectionIndex}
            className="py-14 md:py-20"
            style={{ backgroundColor: bg }}
            aria-labelledby={`faq-section-${sectionIndex}`}
          >
            <div className="container px-4 mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: "#F5C542" }} />
                <h2
                  id={`faq-section-${sectionIndex}`}
                  className="text-xl md:text-2xl font-display font-bold"
                  style={{ color: "#0D566C" }}
                  data-testid={`text-faq-section-${sectionIndex}`}
                >
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  itemCounter++;
                  const testId = `item-${itemCounter}`;
                  return (
                    <FAQItem
                      key={itemIndex}
                      question={item.question}
                      answer={item.answer}
                      testId={testId}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
