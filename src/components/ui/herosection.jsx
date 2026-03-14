import { Network, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full py-28 px-6">

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >

        {/* Vault Announcement */}

        <a
          href="#workshop-details"
          className="mb-8 text-sm text-neutral-600 border border-neutral-200 rounded-full px-4 py-1.5 flex items-center gap-2 hover:bg-neutral-100 transition"
        >
          Introducing the Ìmòforge Gratia Vault — 2026 Edition
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        {/* Eyebrow */}

        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-5">
          <Network className="h-4 w-4 text-chart-2" />
          <span className="font-medium tracking-wide">
            Ìmòforge Academy
          </span>
        </div>

        {/* Headline */}

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 max-w-3xl">
          <span className="text-chart-2">Connecting Builders.</span>
          <br />
          Empowering the Decentralized Future.
        </h1>

        {/* Description */}

        <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
          Ìmòforge Academy is a global Web3 and DeFi deep-tech academy
          training builders, analysts, traders, and security professionals
          through hands-on, project-driven learning.
        </p>

        {/* CTAs */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <a
            href="https://t.me/+BN_iOjD8s2BhZjZk"
            className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-semibold text-sm hover:bg-neutral-800 transition"
          >
            Join the Waitlist
          </a>

          <a
            href="#learn"
            className="px-6 py-3 border border-neutral-300 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition"
          >
            View Curriculum
          </a>

        </div>

      </motion.div>

    </section>
  );
}