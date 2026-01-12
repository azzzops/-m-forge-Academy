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
  "Portfolio-ready experience",
  "Lifetime alumni access",
];

export default function Programs() {
  return (
    <section className="w-full">
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
          {/* Status */}
          <div className="text-sm font-semibold text-muted-foreground">
            Completed
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-sidebar-primary">
              Magnum Ìmò 1.0
            </h3>
            <p className="text-sm text-muted-foreground">
              First Cohort — 2 weeks of intensive Web3 training
            </p>
          </div>

          {/* Curriculum snapshot */}
          <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            {training.map((t) => (
              <li key={t} className="flex gap-2">
                <BadgeCheck className="h-4 w-4 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* Achievements */}
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

          {/* Graduates Receive — Inset */}
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

        {/* Upcoming — Magnum Ìmò 2.0 (UNCHANGED) */}
        <div className="glass-card rounded-2xl px-10 py-9 flex flex-col gap-10">
          {/* Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>February 2026</span>
            </div>
            <span className="text-sm font-semibold text-chart-2">
              Upcoming
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-sidebar-primary">
                Magnum Ìmò 2.0
              </h3>
              <p className="text-sm text-muted-foreground">
                2nd Cohort — 12 weeks of hands-on, project-driven learning
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                "Build and deploy live blockchain projects",
                "Develop advanced DeFi tools",
                "Trade on-chain with real market data",
                "Join a fast-growing global alumni network",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-4 cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold glass-card">
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
