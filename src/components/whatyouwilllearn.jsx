import {
  Blocks,
  Wrench,
  Shield,
  TrendingUp,
  BarChart3,
  Briefcase,
  LineChart,
} from "lucide-react";

const tracks = [
  {
    icon: Blocks,
    title: "Blockchain Fundamentals",
    description:
      "Understand the foundations of blockchain, decentralization, and trustless systems.",
  },
  {
    icon: Wrench,
    title: "Blockchain Engineering & DeFi Tools",
    description:
      "Design and build smart contracts, protocols, and decentralized infrastructure.",
  },
  {
    icon: Shield,
    title: "Web3 Security",
    description:
      "Audit smart contracts, identify vulnerabilities, and secure on-chain systems.",
  },
  {
    icon: TrendingUp,
    title: "On-Chain Trading & Analytics",
    description:
      "Read market behavior through on chain data and develop informed trading strategies.",
  },
  {
    icon: BarChart3,
    title: "Blockchain Data Analysis",
    description:
      "Analyze blockchain datasets using tools like Dune to extract real insights.",
  },
  {
    icon: Briefcase,
    title: "Web3 Careers & Branding",
    description:
      "Position yourself professionally and unlock global Web3 opportunities.",
  },
  {
    icon: LineChart,
    title: "Advanced Trading & DeFi",
    description:
      "Master advanced DeFi strategies, yield mechanics, and on-chain capital flow.",
  },
];

export default function Learn() {
  return (
    <section className="flex flex-col gap-14">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-2xl font-bold tracking-wide uppercase text-chart-2">
          What You’ll Learn
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-shadow-primary-dark">
          Academy Curriculum
        </h2>

        <p className="max-w-140 text-[18px] text-primary-light">
          At Ìmòforge Academy, we prepare builders, analysts, and traders for the
          future of decentralized technology through structured learning,
          hands on projects, and real world exposure.
        </p>
      </div>

      {/* Curriculum Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-260 mx-auto">
        {tracks.map((track, index) => {
          const Icon = track.icon;

          return (
            <div
              key={index}
              className="
                group relative flex flex-col gap-4 rounded-2xl
                border border-primary/10
                bg-primary/5 backdrop-blur
                px-6 py-7
                transition-all duration-300
                hover:border-primary/20
                hover:bg-primary/8
                focus-within:border-primary/20
              "
            >
              {/* Icon */}
              <div
                className="
                  flex h-11 w-11 items-center justify-center rounded-xl
                  border border-primary/15
                  bg-primary/10
                  text-chart-2
                "
              >
                <Icon size={22} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-semibold text-primary-ring">
                  {track.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-primary-light">
                  {track.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
