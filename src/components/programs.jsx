import {
  Calendar,
  ArrowRight,
  CheckCircle,
  Trophy,
  BadgeCheck,
  Award,
} from "lucide-react";

const training = [
  "Blockchain & Web3 foundations",
  "Web3 career exploration",
  "Wallets & security best practices",
  "Solana memecoin trading",
  "On-chain data analysis using Dune",
  "Guest sessions & AMAs",
];

const Achievements = [
  "Guest sessions & AMAs",
  "First DeFi tools",
  "Trading experience",
  "Alumni network",
];

const GraduatesReceive = [
  "Certificate of Completion",
  "Practical Web3 skills",
  "Portfolio ready experience",
  "Lifetime alumni access",
];

export default function Programs() {
  return (
    <section className="w-full px-20">
      {/* Section header */}
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold tracking-widest text-chart-2">
          PROGRAMS
        </p>
        <h2 className="mt-2 text-3xl font-bold text-sidebar-primary">
          Cohorts & Programs
        </h2>
      </div>

      <div className="grid-1 gap-10 mx-auto justify-center">
        {/* Completed — Magnum Ìmò 1.0 */}
        <div className="glass-card-2 rounded-2xl px-8 py-8 flex flex-col gap-6 opacity-90">
          <div className="text-sm font-semibold text-muted-foreground">
            Completed
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-sidebar-primary">
              Magnum Ìmò 1.0
            </h3>
            <p className="text-sm text-muted-foreground">
              Ìmòforge Academy · First Cohort
            </p>
            <p className="text-sm text-muted-foreground">
              <b>Duration:</b> 2 weeks of intensive Web3 training
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            {training.map((t) => (
              <li key={t} className="flex gap-2">
                <BadgeCheck className="h-4 w-4 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-4 w-4 text-chart-2" />
              <h4 className="text-sm font-semibold text-sidebar-primary">
                Student Achievements
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {Achievements.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-4 w-4 text-chart-2" />
              <h4 className="text-sm font-semibold text-sidebar-primary">
                Graduates Receive
              </h4>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {GraduatesReceive.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upcoming — Magnum Ìmò 2.0 */}
        <div className="glass-card rounded-2xl px-10 py-9 flex flex-col gap-10">
          {/* Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Starts 2 February, 2026</span>
            </div>
            <span className="text-sm font-semibold text-chart-2">Upcoming</span>
          </div>

          {/* Content */}
          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Duration */}
            

            {/* Program identity */}
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-sidebar-primary">
                Magnum Ìmò 2.0
              </h3>
              <p className="text-sm text-muted-foreground">
                Ìmòforge Academy · Second Cohort
              </p>
              <p className="text-sm text-muted-foreground">
              <b>Duration:</b> 10-Week Intensive
            </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Theme: A journey of a thousand miles begins with a single step.
            </p>

            <p className="text-sm text-muted-foreground">
              Magnum Ìmò 2.0 is a focused Web3-first technology cohort for
              individuals building real understanding and long-term direction
              across on-chain and modern tech systems.
            </p>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-sidebar-primary">
                This program is designed to develop:
              </p>

              <ul className="space-y-3 text-sm">
                {[
                  "Strong technical and Web3 foundations",
                  "On-chain thinking and system-level execution",
                  "Long-term positioning across Web2 and Web3 ecosystems",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm font-medium text-sidebar-primary">
              No hype. No shortcuts. No recycled content.
            </p>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-sidebar-primary">
                Curriculum Focus
              </p>
              <p className="text-sm text-muted-foreground">
                Rather than surface-level lessons, the program is structured
                around seven core pillars:
              </p>
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Web3 foundations and digital positioning",
                "Smart contracts and protocol architecture",
                "Blockchain data and on-chain intelligence",
                "Security research and exploit awareness",
                "DeFi mechanics and value flow",
                "Trading and market strategy",
                "Skill-to-income conversion and opportunity positioning",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground">
              The program emphasizes transferable technical thinking, helping
              Web2 builders, analysts, and tech learners adapt their skills into
              Web3 contexts. Each pillar is taught with practical context and
              hands-on thinking, without revealing proprietary frameworks.
            </p>

            <p className="text-sm text-muted-foreground">
              Access is limited. Admission is via the Academy waitlist only.
            </p>

            <button className="mt-4 cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold glass-card">
              <a href="https://t.me/+BN_iOjD8s2BhZjZk">
                Join the Academy Waitlist
              </a>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
