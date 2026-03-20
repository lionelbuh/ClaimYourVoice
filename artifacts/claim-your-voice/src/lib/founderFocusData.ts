export type Category = "Strategy" | "Sales" | "Operations" | "Execution";

export type TrackType = "member" | "consultant" | "future_founder";

export interface SegmentOption {
  text: string;
  track: TrackType;
  label: string;
}

export const SEGMENTATION_QUESTION = {
  question: "Which best describes your situation right now?",
  options: [
    { text: "I have Selective Mutism and want support for myself", track: "member" as TrackType, label: "Adult with SM" },
    { text: "I am a parent or caregiver of a child with SM", track: "consultant" as TrackType, label: "Parent/Caregiver" },
    { text: "I support someone with SM (teacher, therapist, friend)", track: "future_founder" as TrackType, label: "Supporter" },
    { text: "I'm exploring whether SM describes my experience", track: "member" as TrackType, label: "Exploring SM" },
  ],
};

export const TRACK_LABELS: Record<TrackType, string> = {
  member: "Individual with SM",
  consultant: "Parent / Caregiver",
  future_founder: "Supporter / Professional",
};

export interface QuizAnswer {
  text: string;
  category: Category;
}

export interface QuizQuestion {
  question: string;
  answers: QuizAnswer[];
}

export const TRACK_QUESTIONS: Record<TrackType, QuizQuestion[]> = {
  member: [
    {
      question: "What feels like your biggest challenge with Selective Mutism right now?",
      answers: [
        { text: "I don't fully understand what SM is or why it happens to me", category: "Strategy" },
        { text: "I struggle to communicate in situations where others seem fine", category: "Sales" },
        { text: "I don't have any consistent strategies or routines that help", category: "Operations" },
        { text: "I know what I want to do but can't seem to make myself take the step", category: "Execution" },
      ],
    },
    {
      question: "In the next few months, what concerns you most about your SM journey?",
      answers: [
        { text: "I'm not clear on what my SM triggers really are", category: "Strategy" },
        { text: "I'm missing out on opportunities because I can't speak up", category: "Sales" },
        { text: "I don't have the right support or coping tools in place", category: "Operations" },
        { text: "I keep avoiding situations instead of facing them", category: "Execution" },
      ],
    },
    {
      question: "How would you describe where you are in understanding your SM?",
      answers: [
        { text: "I'm still trying to figure out if what I experience is really SM", category: "Strategy" },
        { text: "I understand it but struggle to explain it to people in my life", category: "Sales" },
        { text: "I understand it well but still don't have strategies that help consistently", category: "Operations" },
        { text: "I know exactly what I need to do but keep putting it off", category: "Execution" },
      ],
    },
    {
      question: "What best describes how you respond to difficult communication situations?",
      answers: [
        { text: "I freeze or go blank — I don't understand what's happening", category: "Strategy" },
        { text: "I feel the anxiety and end up staying silent or leaving", category: "Sales" },
        { text: "I try coping strategies but they don't always work", category: "Operations" },
        { text: "I know I should push through the anxiety but I avoid it", category: "Execution" },
      ],
    },
    {
      question: "If a Guide could help you with one thing, what would it be?",
      answers: [
        { text: "Helping me truly understand my SM and why it happens", category: "Strategy" },
        { text: "Teaching me how to communicate more comfortably in daily life", category: "Sales" },
        { text: "Giving me practical tools and routines I can use every day", category: "Operations" },
        { text: "Holding me accountable to actually practice and take steps forward", category: "Execution" },
      ],
    },
    {
      question: "What happens when you're in a situation where you feel expected to speak?",
      answers: [
        { text: "I'm confused about why it happens — it doesn't make sense to me", category: "Strategy" },
        { text: "The anxiety overwhelms me and I can't get the words out", category: "Sales" },
        { text: "I have no coping plan and it catches me off guard", category: "Operations" },
        { text: "I know what I could do but I freeze at the last moment", category: "Execution" },
      ],
    },
    {
      question: "How do you feel about the support currently available to you?",
      answers: [
        { text: "I'm not sure what kind of support exists or what would help", category: "Strategy" },
        { text: "I want support but struggle to reach out or ask for it", category: "Sales" },
        { text: "I've tried some support but it hasn't been consistent or effective", category: "Operations" },
        { text: "I have access to support but keep avoiding actually using it", category: "Execution" },
      ],
    },
    {
      question: "What would make you feel like you're genuinely making progress with SM?",
      answers: [
        { text: "Finally understanding why SM happens and what drives it", category: "Strategy" },
        { text: "Being able to connect with people in situations that used to feel impossible", category: "Sales" },
        { text: "Having a reliable daily routine that reduces my anxiety", category: "Operations" },
        { text: "Completing one thing I've been avoiding for months", category: "Execution" },
      ],
    },
  ],
  consultant: [
    {
      question: "What feels like the biggest challenge in supporting your child's SM right now?",
      answers: [
        { text: "I don't fully understand what SM is or what causes it", category: "Strategy" },
        { text: "I struggle to help my child communicate outside the home", category: "Sales" },
        { text: "I don't have consistent strategies to support them day-to-day", category: "Operations" },
        { text: "I know what to try but can't find the energy or confidence to do it", category: "Execution" },
      ],
    },
    {
      question: "What would make the biggest difference for your child in the next few months?",
      answers: [
        { text: "Understanding their specific SM triggers and anxiety patterns", category: "Strategy" },
        { text: "Seeing them make even small steps toward communicating with others", category: "Sales" },
        { text: "Establishing a structured support routine at home and school", category: "Operations" },
        { text: "Actually implementing the strategies I already know about", category: "Execution" },
      ],
    },
    {
      question: "How well do you understand your child's SM experience?",
      answers: [
        { text: "I'm still learning — I'm not sure what's typical for SM", category: "Strategy" },
        { text: "I understand it but find it hard to explain to their school or family", category: "Sales" },
        { text: "I understand it well but our support plan isn't consistent", category: "Operations" },
        { text: "I have a solid understanding but haven't turned it into action yet", category: "Execution" },
      ],
    },
    {
      question: "How do you currently respond when your child faces a difficult communication moment?",
      answers: [
        { text: "I'm unsure what the right response is — I'm still figuring it out", category: "Strategy" },
        { text: "I try to help them speak, but it often increases their anxiety", category: "Sales" },
        { text: "I have some strategies but they're not applied consistently", category: "Operations" },
        { text: "I know the right approach but find it hard to stay patient in the moment", category: "Execution" },
      ],
    },
    {
      question: "How connected is your child's support network (school, therapist, family)?",
      answers: [
        { text: "I'm not sure who should be involved or what role each person plays", category: "Strategy" },
        { text: "We have support but I struggle to get everyone on the same page", category: "Sales" },
        { text: "We have some support but there are gaps and inconsistencies", category: "Operations" },
        { text: "I know what the ideal team looks like but haven't set it up yet", category: "Execution" },
      ],
    },
    {
      question: "What happens when another adult (teacher, family member) puts pressure on your child to speak?",
      answers: [
        { text: "I'm not sure how to educate them about SM without making it worse", category: "Strategy" },
        { text: "I try to advocate but feel like no one understands or listens", category: "Sales" },
        { text: "I have no consistent advocacy plan in place", category: "Operations" },
        { text: "I know what to say but hesitate to push back firmly enough", category: "Execution" },
      ],
    },
    {
      question: "How confident do you feel about the progress your child can make?",
      answers: [
        { text: "I'm not sure what realistic progress looks like for SM", category: "Strategy" },
        { text: "I believe in them but am losing hope that things will improve", category: "Sales" },
        { text: "I'm cautiously hopeful but lack the structure to support that progress", category: "Operations" },
        { text: "I'm confident they can improve — I just need to commit to the plan", category: "Execution" },
      ],
    },
    {
      question: "If you had the right guidance, what would you prioritize first?",
      answers: [
        { text: "Understanding SM deeply so I can be a more effective advocate", category: "Strategy" },
        { text: "Learning how to help my child build connections with others", category: "Sales" },
        { text: "Creating a consistent, structured support routine", category: "Operations" },
        { text: "My own mindset and ability to stay calm and follow through", category: "Execution" },
      ],
    },
  ],
  future_founder: [
    {
      question: "What best describes your role in someone's SM journey?",
      answers: [
        { text: "I'm a teacher trying to better understand and support a student with SM", category: "Strategy" },
        { text: "I'm a therapist or counselor working with SM clients", category: "Sales" },
        { text: "I'm a friend or family member who wants to support someone with SM", category: "Operations" },
        { text: "I'm a professional exploring SM to expand my expertise", category: "Execution" },
      ],
    },
    {
      question: "What is your main motivation for learning more about SM?",
      answers: [
        { text: "I want to truly understand what the person I support is experiencing", category: "Strategy" },
        { text: "I want to communicate with them in ways that reduce pressure and anxiety", category: "Sales" },
        { text: "I want to put better support systems or accommodations in place", category: "Operations" },
        { text: "I want to become more proactive instead of just reacting to situations", category: "Execution" },
      ],
    },
    {
      question: "What is stopping you from supporting this person more effectively right now?",
      answers: [
        { text: "I don't fully understand SM or what actually helps", category: "Strategy" },
        { text: "I worry I'll say or do something that makes things worse", category: "Sales" },
        { text: "I don't have enough time or structured resources to support them properly", category: "Operations" },
        { text: "I know what I should do but haven't acted on it yet", category: "Execution" },
      ],
    },
    {
      question: "How clear are you on what this person actually needs from you?",
      answers: [
        { text: "No, I'm still guessing what would help them most", category: "Strategy" },
        { text: "I have some ideas but feel unsure and hold back", category: "Sales" },
        { text: "I understand their needs but don't have a plan for how to meet them", category: "Operations" },
        { text: "Yes, I have a clear sense — I just need to follow through", category: "Execution" },
      ],
    },
    {
      question: "How comfortable are you discussing SM directly with the person you support?",
      answers: [
        { text: "Not comfortable at all — I don't know what to say", category: "Strategy" },
        { text: "I try to bring it up but it often feels awkward or unhelpful", category: "Sales" },
        { text: "We talk about it sometimes, but there's no consistency", category: "Operations" },
        { text: "I'm comfortable talking about it — I just need a clearer action plan", category: "Execution" },
      ],
    },
    {
      question: "How urgent is finding better support strategies for this person?",
      answers: [
        { text: "I'm in the early stages — still trying to understand the situation", category: "Strategy" },
        { text: "It's becoming urgent — I'm seeing them struggle more and want to help", category: "Sales" },
        { text: "Very urgent — I need practical tools I can use right now", category: "Operations" },
        { text: "I'm ready to act — I just need direction and structure", category: "Execution" },
      ],
    },
    {
      question: "What worries you most about supporting someone with SM?",
      answers: [
        { text: "That I don't understand it well enough to really help", category: "Strategy" },
        { text: "That my attempts to help might make them feel worse or pressured", category: "Sales" },
        { text: "That I can't provide the level of support they truly need", category: "Operations" },
        { text: "That I'll keep meaning to help but never actually do enough", category: "Execution" },
      ],
    },
    {
      question: "What would success look like for you in supporting this person with SM?",
      answers: [
        { text: "Having a clear, evidence-based understanding of how to help", category: "Strategy" },
        { text: "Seeing them feel more confident and connected because of my support", category: "Sales" },
        { text: "Having a reliable structure or framework I can use consistently", category: "Operations" },
        { text: "Knowing I'm taking consistent action — not just intending to", category: "Execution" },
      ],
    },
  ],
};

export const QUIZ_QUESTIONS = TRACK_QUESTIONS.member;

export interface CategoryResult {
  category: Category;
  score: number;
  percentage: number;
}

export interface QuizResult {
  totalScore: number;
  primaryBlocker: Category;
  scores: Record<Category, number>;
  categoryResults: CategoryResult[];
  topBlocker?: string;
  overallScore?: number;
  track?: TrackType;
}

export function calculateResults(answers: number[], track: TrackType = "member"): QuizResult {
  const questions = TRACK_QUESTIONS[track];
  const scores: Record<Category, number> = {
    Strategy: 0,
    Sales: 0,
    Operations: 0,
    Execution: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex >= 0 && answerIndex < 4 && questions[questionIndex]) {
      const category = questions[questionIndex].answers[answerIndex].category;
      scores[category] += 10;
    }
  });

  const maxPossible = questions.length * 10;

  const categories: Category[] = ["Strategy", "Sales", "Operations", "Execution"];
  const primaryBlocker = categories.reduce((max, cat) =>
    scores[cat] > scores[max] ? cat : max
  , categories[0]);

  const maxCategoryScore = scores[primaryBlocker];
  const totalScore = Math.round(100 - ((maxCategoryScore / maxPossible) * 40));

  const categoryResults: CategoryResult[] = categories.map((cat) => ({
    category: cat,
    score: scores[cat],
    percentage: Math.round((scores[cat] / maxPossible) * 100),
  }));

  categoryResults.sort((a, b) => b.score - a.score);

  const overallScore = Math.round((totalScore / 100) * 10);

  return { totalScore, primaryBlocker, scores, categoryResults, topBlocker: BLOCKER_INFO[primaryBlocker].title, overallScore, track };
}

export const BLOCKER_INFO: Record<Category, { title: string; explanation: string; action: string; color: string; icon: string }> = {
  Strategy: {
    title: "SM Awareness & Understanding",
    explanation: "Your biggest SM blocker is a gap in awareness and understanding. You may not yet have a clear picture of what Selective Mutism really is, what triggers it, or why it happens. Without this understanding, it's hard to make progress — you're navigating without a map.",
    action: "Start by reading one reliable resource about SM this week (such as smira.org.uk or selectivemutism.org). Write down 3 things that resonate with your own experience, and share one of them with someone you trust.",
    color: "indigo",
    icon: "Compass",
  },
  Sales: {
    title: "Connection & Communication",
    explanation: "Your biggest SM blocker is in connection and communication. You or your loved one may understand SM well, but the anxiety in real communication situations is still the primary wall. Social interaction feels overwhelming, and opportunities for connection are being missed.",
    action: "Identify one low-pressure communication situation this week — perhaps texting, writing, or a 1-on-1 conversation with someone safe. Take one small step toward it. Connection builds gradually, not all at once.",
    color: "emerald",
    icon: "DollarSign",
  },
  Operations: {
    title: "Coping Strategies & Daily Support",
    explanation: "Your biggest SM blocker is the absence of consistent coping strategies and daily support systems. You may understand SM and even know what helps, but there's no reliable routine or structure to lean on. Without consistency, progress is hard to build on.",
    action: "Choose one SM coping strategy (breathing exercises, a comfort object, a scripted phrase) and commit to practicing it in at least one situation this week. Consistency — not perfection — is what builds long-term progress.",
    color: "amber",
    icon: "Settings",
  },
  Execution: {
    title: "Courage & Action",
    explanation: "Your biggest SM blocker is taking action — the courage to step forward despite anxiety. You likely understand SM and have strategies available, but avoidance has become the default response. Real progress requires graduated exposure, one small step at a time.",
    action: "Choose one situation you've been avoiding and break it into 3 smaller steps. Commit to completing only the first, smallest step this week. Each act of courage — however small — rewires the brain and builds momentum.",
    color: "cyan",
    icon: "Rocket",
  },
};

export const TRACK_BLOCKER_INFO: Record<TrackType, Record<Category, { title: string; explanation: string; action: string }>> = {
  member: {
    Strategy: {
      title: "SM Awareness & Understanding",
      explanation: "Your biggest blocker is a gap in understanding your own SM. You may be uncertain about what causes it, what your specific triggers are, or how SM differs from shyness or anxiety. Without this clarity, it's hard to take purposeful steps forward.",
      action: "This week, explore one trusted SM resource (try smira.org.uk or selectivemutism.org). Write down 3 things that feel true to your experience, and share one insight with your Guide or someone you trust.",
    },
    Sales: {
      title: "Connection & Communication",
      explanation: "Your biggest blocker is the anxiety that stops you from communicating — even when you want to. You understand SM, but the gap between wanting to speak and actually speaking feels enormous in real situations.",
      action: "Identify one safe, low-pressure person in your life. This week, initiate contact in whatever way feels manageable — text, note, or whisper. Connection starts small and grows with each practice.",
    },
    Operations: {
      title: "Coping Strategies & Daily Structure",
      explanation: "Your biggest blocker is the lack of consistent strategies and structure in your daily SM journey. You know what might help, but nothing is reliably in place. Without a consistent framework, it's hard to build confidence.",
      action: "Pick one coping tool — slow breathing, a comfort item, or a scripted phrase — and use it deliberately in one situation this week. Log how it felt. Consistency is the foundation of progress.",
    },
    Execution: {
      title: "Courage & Graduated Action",
      explanation: "Your biggest blocker is avoidance. You know what to do and may even have strategies ready, but anxiety keeps steering you away from situations that could lead to growth. Each avoided situation reinforces the fear.",
      action: "Choose one situation you've been avoiding. Break it into 3 smaller versions of itself and commit to just the smallest one this week. Progress with SM is built one small courageous act at a time.",
    },
  },
  consultant: {
    Strategy: {
      title: "SM Knowledge & Advocacy Understanding",
      explanation: "Your biggest blocker as a parent or caregiver is a gap in knowledge about Selective Mutism. Without understanding the 'why' behind your child's silence, it's hard to advocate effectively or respond in ways that genuinely help.",
      action: "This week, read one article or watch one video specifically about how SM differs from shyness and how adults can help reduce pressure. Share one key insight with a teacher or family member involved in your child's life.",
    },
    Sales: {
      title: "Communication & Advocacy",
      explanation: "Your biggest blocker is communicating effectively with others about your child's SM — whether with schools, family members, or professionals. Your child needs a consistent, informed voice speaking on their behalf.",
      action: "Write a simple one-paragraph explanation of your child's SM that you can share with their school or family. Focus on what helps and what makes things worse. Having this written makes advocacy easier and more consistent.",
    },
    Operations: {
      title: "Support Systems & Consistency",
      explanation: "Your biggest blocker is the lack of a consistent, structured support system for your child. Even with good intentions, without a clear plan it's easy for support to be inconsistent — and consistency is what SM progress requires.",
      action: "Identify the 3 key people in your child's support network (teacher, therapist, family). This week, reach out to each one and agree on one shared approach or 'rule' to reduce pressure on your child.",
    },
    Execution: {
      title: "Follow-Through & Parental Confidence",
      explanation: "Your biggest blocker is follow-through — turning your knowledge and good intentions into consistent, calm action. It's natural to feel uncertain or overwhelmed, but your child's progress depends on your steady, patient presence.",
      action: "Choose one SM-informed strategy (such as 'don't ask questions that require a verbal response') and commit to applying it every day this week. Track one moment each day where it made a difference.",
    },
  },
  future_founder: {
    Strategy: {
      title: "SM Knowledge & Understanding",
      explanation: "Your biggest blocker as a supporter is insufficient knowledge about Selective Mutism. Well-intentioned support can sometimes make things worse if it comes from guesswork. The more you understand SM, the more effective your support becomes.",
      action: "Spend 30 minutes this week reading about SM from the perspective of the person experiencing it. Try selectivemutism.org or smira.org.uk. Then write down 3 things you'll do differently based on what you learned.",
    },
    Sales: {
      title: "Communication & Relationship Building",
      explanation: "Your biggest blocker is knowing how to communicate with someone who has SM in a way that genuinely reduces pressure rather than adding to it. Small adjustments in how you interact can make a significant difference.",
      action: "This week, try one specific communication adjustment: instead of asking direct questions, offer open-ended invitations ('You don't have to say anything, but I'm here'). Observe the difference in how they respond.",
    },
    Operations: {
      title: "Support Structure & Consistency",
      explanation: "Your biggest blocker is the absence of a consistent, structured approach to supporting this person. Without a plan, support tends to be reactive rather than proactive — and SM requires long-term, patient consistency.",
      action: "Write down 3 specific things you can do regularly to support this person (e.g., no pressure to speak in group settings, a designated one-on-one quiet time, or a simple weekly check-in). Commit to all 3 for the next 4 weeks.",
    },
    Execution: {
      title: "Taking Consistent Action",
      explanation: "Your biggest blocker is moving from intention to consistent action. You likely care deeply about this person and have good ideas — but without follow-through, support stays theoretical. Your actions, however small, matter enormously.",
      action: "Choose the single most impactful thing you can do for this person this week and do it — not perfectly, just consistently. Send the message, attend the appointment, have the conversation. Action creates change.",
    },
  },
};
