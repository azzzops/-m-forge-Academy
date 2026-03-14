import {
  Calendar,
  ArrowRight,
  CheckCircle,
  Trophy,
  BadgeCheck,
  Award,
  Shield,
  BarChart2,
  Search,
  Coins,
  Code2,
  Lock,
  Briefcase,
  Star,
  Zap,
  Users,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const training = [
  "Blockchain & Web3 foundations",
  "Web3 career exploration",
  "Wallets & security best practices",
  "Solana memecoin trading",
  "On-chain data analysis using Dune",
  "Guest sessions & AMAs",
];

const achievements = [
  "Guest sessions & AMAs",
  "First DeFi tools",
  "Trading experience",
  "Alumni network",
];

const graduatesReceive = [
  "Certificate of Completion",
  "Practical Web3 skills",
  "Portfolio ready experience",
  "Lifetime alumni access",
];

const curriculum = [
  {
    icon: Shield,
    num: "01",
    title: "Blockchain & Web3 Foundations",
    desc: "Build a deep understanding of how blockchain works and why Web3 is transforming the internet.",
    points: [
      "How blockchains process and verify transactions",
      "How wallets, tokens, and smart contracts work",
      "Structure of major blockchain ecosystems",
      "The role of decentralization in the future internet",
    ],
  },
  {
    icon: BarChart2,
    num: "02",
    title: "Blockchain Data Analysis",
    desc: "Learn to analyze blockchain data and extract insights like professional crypto researchers.",
    points: [
      "How to read blockchain transactions",
      "Use analytics tools to track on-chain activity",
      "Identify trends in crypto markets",
      "How blockchain data is used by analysts and investors",
    ],
  },
  {
    icon: Search,
    num: "03",
    title: "On-Chain Research",
    desc: "Discover how analysts track wallet activity and movements from major market participants.",
    points: [
      "How to track \u201csmart money\u201d wallets",
      "Analyze token activity and liquidity",
      "How researchers monitor blockchain ecosystems",
      "How on-chain insights influence crypto markets",
    ],
  },
  {
    icon: Coins,
    num: "04",
    title: "Memecoin Market Intelligence",
    desc: "Understand the dynamics behind memecoins and the risks involved.",
    points: [
      "How memecoin trends emerge",
      "How traders identify early opportunities",
      "Evaluate token activity before participating",
      "Risk awareness and responsible decision-making",
    ],
  },
  {
    icon: Code2,
    num: "05",
    title: "Building on Blockchain",
    desc: "Get introduced to the tools developers use to build decentralized applications.",
    points: [
      "Smart contract fundamentals",
      "Architecture of decentralized applications (dApps)",
      "Tools used by Web3 developers",
      "How blockchain products are designed and deployed",
    ],
  },
  {
    icon: Lock,
    num: "06",
    title: "Blockchain Security Research",
    desc: "Explore how blockchain systems are analyzed for vulnerabilities and how to protect users.",
    points: [
      "Common blockchain attack vectors",
      "Smart contract vulnerabilities",
      "How scams and exploits happen in Web3",
      "Best practices for security awareness",
    ],
  },
  {
    icon: Briefcase,
    num: "07",
    title: "Web3 Career Pathways",
    desc: "Learn how to position yourself for real opportunities in the Web3 industry.",
    points: [
      "Different career roles in Web3",
      "How to build a Web3 portfolio",
      "How to contribute to blockchain communities",
      "Find opportunities in the global crypto ecosystem",
    ],
  },
];

const differentiators = [
  { icon: BarChart2, text: "Practical exposure to blockchain analytics and research tools" },
  { icon: Search,    text: "Understanding of on-chain market intelligence" },
  { icon: Shield,    text: "Awareness of security risks within blockchain systems" },
  { icon: Briefcase, text: "Insights into multiple career paths in the Web3 ecosystem" },
  { icon: Users,     text: "Access to a community of learners, builders, and researchers" },
  { icon: Star,      text: "Continuous mentorship even after the cohort ends" },
];

const outcomes = [
  "Understand how blockchain ecosystems operate",
  "Interpret blockchain data and on-chain activity",
  "Identify security risks in blockchain systems",
  "Build foundational blockchain applications",
  "Gain clarity on career paths in Web3",
  "Contribute to projects and potentially land internships or Web3 roles",
];

/* ─────────────────────────────────────────────
   DESIGN TOKENS (all inline, no Tailwind custom)
───────────────────────────────────────────── */
const F = { fontFamily: "'Bricolage Grotesque', sans-serif" };

const C = {
  primary:      "oklch(0.373 0.034 259.733)",
  primaryLight: "oklch(0.446 0.03 256.802)",
  accent:       "oklch(0.627 0.265 303.9)",
  accentFaint:  "oklch(0.627 0.265 303.9 / 0.07)",
  accentBorder: "oklch(0.627 0.265 303.9 / 0.18)",
  fore:         "oklch(0.21 0.034 264.665)",
  fore55:       "oklch(0.21 0.034 264.665 / 0.55)",
  fore40:       "oklch(0.21 0.034 264.665 / 0.40)",
  fore25:       "oklch(0.21 0.034 264.665 / 0.25)",
  border:       "oklch(0.707 0.022 261.325 / 0.18)",
  bg:           "oklch(1 0 0)",
  bgMuted:      "oklch(0.978 0.004 264 / 1)",   // very light blue-grey — section 1.0
  bgTinted:     "oklch(0.974 0.006 290 / 1)",   // barely perceptible warm-lilac — section 2.0
  muted:        "oklch(0.928 0.006 264.531)",
};

/* ─────────────────────────────────────────────
   PRIMITIVES
───────────────────────────────────────────── */

function Badge({ children, variant = "upcoming" }) {
  const s =
    variant === "completed"
      ? { background: C.muted, color: C.primary,     border: `1px solid ${C.border}` }
      : { background: C.accentFaint, color: C.accent, border: `1px solid ${C.accentBorder}` };
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-semibold tracking-widest uppercase"
      style={{ ...s, ...F }}
    >
      {children}
    </span>
  );
}

function MicroLabel({ children }) {
  return (
    <p
      className="text-[11px] font-semibold tracking-widest uppercase"
      style={{ color: C.fore40, ...F, marginBottom: "0.875rem" }}
    >
      {children}
    </p>
  );
}

function SectionRule() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: `1px solid ${C.border}`,
        margin: "2.75rem 0",
      }}
    />
  );
}

/* Single curriculum card — kept from previous revision */
function CurriculumCard({ icon: Icon, num, title, desc, points }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: C.bg,
        border: `1px solid ${C.border}`,
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl"
          style={{ background: C.accentFaint, border: `1px solid ${C.accentBorder}` }}
        >
          <Icon className="h-4 w-4" style={{ color: C.accent }} />
        </div>
        <span className="text-[11px] font-bold tracking-wider" style={{ color: C.fore25, ...F }}>
          {num}
        </span>
      </div>

      <div>
        <p className="text-sm font-semibold mb-1.5" style={{ color: C.fore, ...F }}>{title}</p>
        <p className="text-xs leading-relaxed" style={{ color: C.fore55, ...F }}>{desc}</p>
      </div>

      <ul
        className="flex flex-col gap-1.5 mt-auto pt-3"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        {points.map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-xs" style={{ color: C.fore55, ...F }}>
            <span
              className="flex-shrink-0 rounded-full"
              style={{ width: 5, height: 5, marginTop: 5, background: C.accent }}
            />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function Programs() {
  return (
    <div style={{ ...F, background: C.bg }}>

      {/* ══════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════ */}
      <div
        className="text-center"
        style={{
          padding: "5rem 1.5rem 4rem",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <p
          className="text-[11px] font-semibold tracking-widest uppercase mb-3"
          style={{ color: C.accent, ...F }}
        >
          Programs
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ color: C.fore, letterSpacing: "-0.025em", ...F, marginBottom: "1rem" }}
        >
          Cohorts & Programs
        </h1>
        <p
          className="text-base max-w-md mx-auto"
          style={{ color: C.fore55, lineHeight: 1.7, ...F }}
        >
          Structured learning experiences built for real understanding across the
          blockchain and Web3 ecosystem.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          SECTION — MAGNUM ÌMÒ 1.0
      ══════════════════════════════════════════ */}
      <section style={{ background: C.bgMuted, borderBottom: `1px solid ${C.border}` }}>
        <div
          className="max-w-4xl mx-auto"
          style={{ padding: "5rem 1.5rem" }}
        >

          {/* Section identifier */}
          <div style={{ marginBottom: "3rem" }}>
            <Badge variant="completed">Completed</Badge>

            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                letterSpacing: "-0.02em",
                color: C.fore,
                marginTop: "1.25rem",
                marginBottom: "0.5rem",
                ...F,
              }}
            >
              Magnum Ìmò 1.0
            </h2>
            <p className="text-sm" style={{ color: C.fore55, ...F }}>
              Ìmòforge Academy · First Cohort · 2-Week Intensive
            </p>
          </div>

          {/* Intro prose */}
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: C.fore55, ...F, marginBottom: "3rem" }}
          >
            The founding cohort of Ìmòforge Academy — a 2-week intensive introduction to
            Web3 foundations, wallets, on-chain trading, and data analysis. Students left
            with practical skills and a foundation for deeper exploration.
          </p>

          <SectionRule />

          {/* Training covered */}
          <div style={{ marginBottom: "3rem" }}>
            <MicroLabel>Topics Covered</MicroLabel>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12">
              {training.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm" style={{ color: C.fore55 }}>
                  <BadgeCheck className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: C.accent }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <SectionRule />

          {/* Two columns: achievements + graduates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <MicroLabel>Student Achievements</MicroLabel>
              <div className="flex flex-wrap gap-2">
                {achievements.map((a) => (
                  <span
                    key={a}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                      color: C.fore55,
                      ...F,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <MicroLabel>Graduates Receive</MicroLabel>
              <ul className="flex flex-col gap-2.5">
                {graduatesReceive.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm" style={{ color: C.fore55 }}>
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: C.accent }} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION — MAGNUM ÌMÒ 2.0
      ══════════════════════════════════════════ */}
      <section style={{ background: C.bgTinted }}>
        <div
          className="max-w-4xl mx-auto"
          style={{ padding: "5rem 1.5rem" }}
        >

          {/* Section identifier */}
          <div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
            style={{ marginBottom: "3rem" }}
          >
            <div>
              <Badge variant="upcoming">Upcoming</Badge>
              <h2
                className="font-bold"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                  letterSpacing: "-0.02em",
                  color: C.fore,
                  marginTop: "1.25rem",
                  marginBottom: "0.5rem",
                  ...F,
                }}
              >
                Magnum Ìmò 2.0
              </h2>
              <p className="text-sm" style={{ color: C.fore55, ...F }}>
                Ìmòforge Academy · Second Cohort · 10-Week Intensive
              </p>
            </div>
            <div
              className="flex items-center gap-2 text-sm flex-shrink-0"
              style={{ color: C.fore40, ...F, marginTop: "0.25rem" }}
            >
              <Calendar className="h-4 w-4" />
              <span>Starts 27 April, 2026</span>
            </div>
          </div>

          {/* Theme quote */}
          <p
            className="text-sm italic"
            style={{
              color: C.fore55,
              borderLeft: `2px solid ${C.accentBorder}`,
              paddingLeft: "1rem",
              marginBottom: "1.5rem",
              ...F,
            }}
          >
            "A journey of a thousand miles begins with a step."
          </p>

          {/* Overview */}
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: C.fore55, ...F, marginBottom: "3rem" }}
          >
            A practical Web3 learning program designed to help students understand blockchain
            technology, analyze on-chain data, identify opportunities in the crypto ecosystem,
            build decentralized applications, and explore careers in the global Web3 industry.
          </p>

          <SectionRule />

          {/* ── Curriculum grid ── */}
          <div style={{ marginBottom: "3rem" }}>
            <MicroLabel>What You Will Learn</MicroLabel>
            <p
              className="text-sm max-w-xl"
              style={{ color: C.fore55, marginBottom: "2rem", lineHeight: 1.7, ...F }}
            >
              Seven core pillars taught with practical context and hands-on thinking —
              no recycled content, no shortcuts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {curriculum.map((item) => (
                <CurriculumCard key={item.num} {...item} />
              ))}
            </div>
          </div>

          <SectionRule />

          {/* ── Differentiators ── */}
          <div style={{ marginBottom: "3rem" }}>
            <MicroLabel>What Makes It Different</MicroLabel>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {differentiators.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-lg"
                    style={{
                      width: 32,
                      height: 32,
                      background: C.accentFaint,
                      border: `1px solid ${C.accentBorder}`,
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: C.accent }} />
                  </div>
                  <p className="text-sm leading-relaxed pt-0.5" style={{ color: C.fore55, ...F }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <SectionRule />

          {/* ── Recognition ── */}
          <div style={{ marginBottom: "3rem" }}>
            <MicroLabel>Internship & Recognition</MicroLabel>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ marginBottom: "1.25rem" }}>
              {/* Top 10 */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: C.accentFaint,
                  border: `1px solid ${C.accentBorder}`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4" style={{ color: C.accent }} />
                  <span className="text-sm font-semibold" style={{ color: C.accent, ...F }}>
                    Top 10 Students
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.fore55, ...F }}>
                  Exclusive internship at{" "}
                  <span className="font-semibold" style={{ color: C.fore }}>Àkàńó Labs</span>
                  {" "}— real-world experience in Web3 research, data analysis, and product building.
                </p>
              </div>

              {/* Top 20 */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="h-4 w-4" style={{ color: C.primaryLight }} />
                  <span className="text-sm font-semibold" style={{ color: C.fore, ...F }}>
                    Top 20 Students
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.fore55, ...F }}>
                  Publicly recognized with certificates, social media features, and mentorship
                  opportunities — creating prestige and motivation.
                </p>
              </div>
            </div>

            <p className="text-xs" style={{ color: C.fore40, ...F }}>
              This system creates scarcity, competition, and social proof — driving students to
              perform and share their success.
            </p>
          </div>

          <SectionRule />

          {/* ── Outcomes ── */}
          <div>
            <MicroLabel>Program Outcome</MicroLabel>
            <p
              className="text-sm max-w-xl"
              style={{ color: C.fore55, marginBottom: "1.75rem", lineHeight: 1.7, ...F }}
            >
              By the end of Magnum Ìmò 2.0, students will have built a foundation that
              translates directly into real-world opportunities.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm" style={{ color: C.fore55 }}>
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: C.accent }} />
                  {o}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: C.bg,
          borderTop: `1px solid ${C.border}`,
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          className="text-[11px] font-semibold tracking-widest uppercase"
          style={{ color: C.accent, ...F, marginBottom: "1rem" }}
        >
          Limited Access
        </p>
        <p
          className="text-sm max-w-sm mx-auto"
          style={{ color: C.fore55, lineHeight: 1.7, ...F, marginBottom: "2.25rem" }}
        >
          Admission is via the Academy waitlist only. Starts 27 April, 2026.
        </p>
        <a
          href="https://t.me/+BN_iOjD8s2BhZjZk"
          className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            background: C.primary,
            color: "#fff",
            padding: "0.875rem 1.5rem",
            boxShadow: `0 1px 3px oklch(0 0 0 / 0.1), 0 6px 16px oklch(0.373 0.034 259.733 / 0.22)`,
            ...F,
          }}
        >
          Join the Academy Waitlist
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

    </div>
  );
}