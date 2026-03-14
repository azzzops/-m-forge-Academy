    import { motion } from "framer-motion";
    import {
    Calendar,
    Clock,
    Sparkles,
    Boxes,
    BarChart3,
    Wallet,
    TrendingUp,
    Code,
    Shield,
    Briefcase,
    } from "lucide-react";

    const topics = [
    {
        icon: Boxes,
        title: "Introduction to Blockchain & Web3",
        desc: "Foundational understanding of decentralized systems and protocols.",
    },
    {
        icon: BarChart3,
        title: "Blockchain Data Analysis",
        desc: "Learn to extract and interpret on-chain data insights.",
    },
    {
        icon: Wallet,
        title: "On-Chain Analysis & Wallet Tracking",
        desc: "Track wallets, decode transactions, understand behavioral signals.",
    },
    {
        icon: TrendingUp,
        title: "Market Analysis & Memecoin Fundamentals",
        desc: "Understand token cycles, hype mechanics, and market psychology.",
    },
    {
        icon: Code,
        title: "Blockchain Engineering & Development",
        desc: "Core smart contract logic and development workflows.",
    },
    {
        icon: Shield,
        title: "Blockchain Security Research",
        desc: "Threat models, vulnerabilities, and protocol-level risk awareness.",
    },
    {
        icon: Briefcase,
        title: "Branding & Career in Web3",
        desc: "Position yourself for long-term relevance in the ecosystem.",
    },
    ];

    const containerVariants = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.08,
        },
    },
    };

    const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    export default function GratiaVaultSection() {
    return (
        <section className="relative py-28 px-6 md:px-12">
            

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-175 h-100 bg-primary-light opacity-20 blur-3xl rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 md:p-16 mb-20"
            >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Ìmòforge Gratia Vault
                    <span className="block text-base text-muted-foreground mt-2">
                    2026 Edition
                    </span>
                </h2>

                <p className="text-lg text-muted-foreground italic">
                    The lantern lights, yet the path is yours.
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    March 16, 2026
                    </div>
                    <div className="flex items-center gap-2">
                    <Clock size={16} />
                    2 Weeks Intensive
                    </div>
                    <div className="flex items-center gap-2">
                    <Sparkles size={16} />
                    First Edition
                    </div>
                </div>
                </div>

                <div>
                <a href="https://t.me/imoforge_waitlist" target="_blank" className="block cursor-pointer px-8 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition">
              
                    Reserve a Seat
            
                </a>
                
                </div>

            </div>
            </motion.div>

            <div className="mb-5 mx-auto text-center text-3xl font-semibold"><h1>What You’ll Learn at Ìmòforge Gratia Vault - 2026 Edition</h1></div>

            {/* Curriculum Grid */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
            >
            {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass-card-2 rounded-xl p-8 space-y-4 cursor-pointer"
                >
                    <Icon
                    className="text-primary"
                    size={28}
                    />

                    <h3 className="text-lg font-semibold leading-snug">
                    {topic.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                    {topic.desc}
                    </p>
                </motion.div>
                );
            })}
            </motion.div>

           

        </div>
        </section>
    );
    }