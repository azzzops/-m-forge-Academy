import { Network } from "lucide-react";
import ring from "../../assets/grok_1767653137638.jpg"
import excited from "../../assets/file_00000000a61c724698afebc981bd5109.png"
import ranss from "../../assets/ranss.png"
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col gap-10 md:gap-20 py-15 justify-center items-center mt-14">
        {/* <div className="absolute z-[-2] left-[50%] top-[5%] w-100 h-100 blur-3xl"><img className="w-full h-full object-cover object-center" src={ring} alt="" /></div> */}
         <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-fit z-10"
    >
      {/* Banner */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="flex items-center gap-2 text-[12px] md:text-sm glass-card w-fit rounded-full p-2 px-4 bg-for-section shadow-lg"
      >
        <Network className="h-5 w-5 text-chart-2/80" />
        <h1 className="text-chart-2 font-semibold whitespace-nowrap">
          Ìmòforge Gratia Vault – 2026 Edition
        </h1>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#workshop-details"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        whileHover={{ scale: 1.1, rotate: 1, boxShadow: "0 0 15px var(--chart-2)" }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-chart-2 text-primary-foreground font-bold rounded-full shadow-lg text-center"
      >
        View Workshop Details
      </motion.a>
    </motion.div>
        <div className="flex md:flex-row flex-col-reverse gap-0 md:gap-20 ">
            <div className="flex flex-col gap-10 md:gap-9">
                <p className="max-w-200 text-center mx-auto text-[30px] font-bold md:text-[45px] md:leading-tight">
                    <span className="text-chart-2">Connecting Builders.</span> Empowering the Decentralized Future.

                </p>
                <h1 className="text-[18px] text-center mx-auto p-4 max-w-200 text-primary">
                  Ìmòforge Academy is a global Web3 & DeFi
                  <span className=""> deep-tech academy</span> training
                  builders, <span className="">analysts</span>, traders, and <span className="">security professionals</span> through
                  hands on, project driven learning.
                </h1>
                <div className="flex flex-col justify-center md:flex-row items-center  gap-4">
                <a href="https://t.me/+BN_iOjD8s2BhZjZk" className="p-3 font-bold bg-sidebar-primary text-cta text-xl rounded-xl">Join the Waitlist</a>
                <a href="#learn" className="border border-primary-ring/70 rounded-xl glass-card-2 p-3">View Curriculum</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
