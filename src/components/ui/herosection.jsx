import { Network } from "lucide-react";
import ring from "../../assets/grok_1767653137638.jpg"
import excited from "../../assets/file_00000000a61c724698afebc981bd5109.png"
export default function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col gap-10 md:gap-20 py-15 justify-center items-center mt-14">
        {/* <div className="absolute z-[-2] left-[50%] top-[5%] w-100 h-100 blur-3xl"><img className="w-full h-full object-cover object-center" src={ring} alt="" /></div> */}
        <div className="flex items-center text-nowrap gap-2 text-[12px] glass-card w-fit z-10 rounded-full p-2">
          <div>
            <Network className="h-5 w-5 text-chart-2/80" />
          </div>
          <h1>Magnum Ìmò 2.0 — Cohort Starting February 2026.</h1>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-0 md:gap-20 ">
            <div className="flex flex-col gap-10 md:gap-9">
                <p className="max-w-130 text-center text-[30px] font-bold md:text-[45px] md:leading-tight">
                    <span className="text-chart-2">Connecting Builders.</span> Empowering the Decentralized Future.

                </p>
                <h1 className="text-[18px] text-center max-w-150 text-primary">
                  Ìmòforge Academy is a global Web3 & DeFi
                  <span className=""> deep-tech academy</span> training
                  builders, <span className="">analysts</span>, traders, and <span className="">security professionals</span> through
                  hands-on, project-driven learning.
                </h1>
                <div className="flex flex-col justify-center md:flex-row items-center  gap-4">
                <a href="#" className="p-3 bg-sidebar-primary text-cta text-xl rounded-xl">Join the Waitlist</a>
                <a href="#" className="border border-primary-ring/70 rounded-xl glass-card-2 p-3">View Curriculum</a>
                </div>
            </div>
             <div className="translate-y-0 md:-translate-y-15 w-100 h-100 md:w-150 md:h-150 mask-radial-from-20% overflow-hidden mask-radial-at-top opacity-700 mask-image:radial-gradient(circle_at_top,black_40%,transparent_80%)
    [-webkit-mask-image:radial-gradient(circle_at_top,black_40%,transparent_80%)]">
                <img className="absolute w-ful h-full object-cover object-center " src={excited} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
