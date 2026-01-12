import { Hammer, Globe, Users, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Hammer,
    title: "Learning by Building",
    description:
      "We believe mastery comes from practice. Every learner builds real smart contracts, DeFi tools, dashboards, and trading systems.",
  },
  {
    icon: Globe,
    title: "Globally Connected, Locally Rooted",
    description:
      "Our community spans Africa and beyond, connecting learners with builders, mentors, and innovators worldwide.",
  },
  {
    icon: Users,
    title: "Support Beyond Graduation",
    description:
      "We don’t stop at teaching. Our alumni network opens doors to jobs, grants, collaborations, and long-term growth.",
  },
  {
    icon: Rocket,
    title: "Built for the Future of Web3",
    description:
      "From blockchain engineering to data, security, and trading — our focus is on skills that remain relevant.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col gap-14 max-w-260 mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <span className="text-2xl font-bold uppercase tracking-wide text-chart-2">
          Why Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-shadow-primary-dark">
          Why Learners Choose Ìmòforge
        </h2>

        <p className="max-w-140 text-[17px] text-primary-light">
          We are building more than courses. We are shaping confident Web3
          builders with strong foundations, global perspective, and long-term
          support.
        </p>
      </div>

      {/* Beliefs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <div
              key={index}
              className="
                flex items-start gap-5
                transition-colors duration-300
                hover:text-primary-ring
              "
            >
              {/* Icon */}
              <div
                className="
                  mt-1 flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-full
                  border border-primary/15
                  bg-primary/5
                  text-chart-2
                "
              >
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-semibold text-primary-ring">
                  {reason.title}
                </h3>

                <p className="text-[16px] leading-relaxed text-primary-light">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
