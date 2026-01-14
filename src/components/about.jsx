import { Crosshair, Rocket, Target } from "lucide-react";
export default function About() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h1 className="flex w-fit bg-for-section px-4 py-1 rounded-full gap-2 items-center glass-card-2">
          <div>
            <Crosshair className="h-5 w-5 text-chart-2/80" />
          </div>
          <span className="text-chart-2 text-nowrap text-[18px] md:text-xl">
            About ÌmoForge Academy
          </span>
        </h1>
        <div className="flex flex-col gap-3 glass-card md:p-8 p-3 rounded-2xl">
          <h1 className="text-chart-2 text-xl font-bold">Who We Are</h1>
          <p className="max-w-140 text-[16px] text-muted-foreground">
            Ìmòforge Academy is a global Web3 and DeFi deep tech education hub
            focused on blockchain engineering, DeFi tool and infrastructure
            development, Web3 security, and on chain trading & market analytics.
            We train and connect learners from Africa and around the world
            through hands on, project driven programs, real world applications,
            and one of the fastest growing Web3 alumni networks empowering
            graduates to build, trade, secure, and scale the decentralized
            future.
          </p>
        </div>
        <div className="gap-20 grid-1 pt-20 items-center">
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-3">
            <div>
              <Rocket className="text-chart-2" width={35} height={35} />
            </div>
            <h1 className="text-sidebar-primary font-bold text-xl">Our Vision</h1>
            <p className="text-muted-foreground text-[16px]">
              To be the world's leading deep tech Web3 and DeFi academy,
              empowering builders, innovators, and analysts across Africa and
              globally to shape the decentralized future.
            </p>
          </div>
          <div className="flex glass-card p-5 rounded-2xl flex-col gap-3">
            <div>
              <Target className="text-chart-2" width={35} height={35} />
            </div>
            <h1 className="text-sidebar-primary font-bold text-xl">Our Mission</h1>
            <p className="text-muted-foreground text-[16px]">
              To train, mentor, and connect learners from Africa and around the
              world through hands on, project driven blockchain, DeFi, security,
              and trading programs, while cultivating one of the fastest-growing
              global Web3 alumni networks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
