import { Crosshair, Rocket, Target } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-20 px-4 md:px-0 max-w-6xl mx-auto">
      {/* Section Header */}
      <h1 className="flex items-center gap-3 bg-for-section px-6 py-3 rounded-full glass-card-2 shadow-lg">
        <Crosshair className="h-7 w-7 text-chart-2/80" />
        <span className="text-chart-2 font-bold text-xl md:text-3xl tracking-wide">
          About Ìmòforge Academy
        </span>
      </h1>

      {/* Who We Are */}
      <div className="relative glass-card p-6 md:p-10 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-20">
          <Crosshair className="h-32 w-32 text-chart-2" />
        </div>
        <h2 className="text-chart-2 font-extrabold text-2xl md:text-4xl mb-4">
          Who We Are
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Ìmòforge Academy is a global Web3 and DeFi deep tech education hub
          focused on blockchain engineering, DeFi tool and infrastructure
          development, Web3 security, and on-chain trading & market analytics.
          We train and connect learners from Africa and around the world through
          hands-on, project-driven programs, real-world applications, and one of
          the fastest growing Web3 alumni networks empowering graduates to
          build, trade, secure, and scale the decentralized future.
        </p>
      </div>

      {/* Àkàńó Labs */}
      <div className="relative glass-card p-6 md:p-10 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="absolute -bottom-10 -left-10 opacity-15">
          <Rocket className="h-32 w-32 text-chart-3" />
        </div>
        <h2 className="text-chart-2 font-extrabold text-2xl md:text-4xl mb-4">
          Àkàńó Labs
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-2">
          Àkàńó Labs is a technology and blockchain-focused innovation lab
          dedicated to education, research, and the development of secure,
          data-driven products across Web2 and Web3 technologies. We combine
          learning, experimentation, and real-world building to prepare
          individuals for the digital and decentralized future.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-2">
          Founded by Oyelude Waliullahi, Àkàńó Labs operates both as an
          innovation lab that builds and researches products and as an education
          ecosystem through its academy. Ìmòforge Academy is the official
          education arm, focused on structured learning, mentorship, and
          hands-on training in Web2, Web3, blockchain development, data
          analytics, DeFi, and digital finance.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 w-full">
        <div className="relative glass-card p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 overflow-hidden">
          <div className="absolute -top-8 -right-8 opacity-20">
            <Rocket className="h-24 w-24 text-chart-2" />
          </div>
          <h3 className="text-sidebar-primary font-bold text-2xl md:text-3xl">
            Our Vision
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            To build a globally respected education and innovation ecosystem
            that produces thoughtful builders, researchers, and analysts capable
            of shaping the future of decentralized and data-driven technologies.
          </p>
        </div>

        <div className="relative glass-card p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 overflow-hidden">
          <div className="absolute -top-8 -right-8 opacity-20">
            <Target className="h-24 w-24 text-chart-3" />
          </div>
          <h3 className="text-sidebar-primary font-bold text-2xl md:text-3xl">
            Our Mission
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            To educate, mentor, and empower individuals through rigorous,
            project-driven programs that combine research, experimentation, and
            real-world building — while fostering a strong, values-driven
            community of global Web3 professionals.
          </p>
        </div>
      </div>
    </div>
  );
}
