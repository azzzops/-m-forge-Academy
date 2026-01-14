import NavBar from "./components/navbar";
import About from "./components/about";
import HeroSection from "./components/ui/herosection";
import CoreValues from "./components/corevalues";
import Learn from "./components/whatyouwilllearn";
import WhyChooseUs from "./components/whyChooseUs";
import Programs from "./components/programs";
// import CohortJourney from "./components/yourpath";
import TestimonialsSection from "./components/testimonialsection";
import TheFounder from "./components/founder";
import ContactSupport from "./components/contactsection";

import Footer from "./components/footer";
import { FootprintsIcon } from "lucide-react";

export default function App(){
  return(
    <>
      <main>
        <section id="Home" className="flex flex-col px-10  items-center justify-center overflow-hidden">
          <NavBar />
          <HeroSection />
        </section>
         <section id="about" className="flex flex-col px-10 items-center justify-center overflow-hidden">
          <About />
        </section>
         <section id="corevalues" className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <CoreValues />
        </section>
         <section id="learn" className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <Learn />
        </section>
         <section id="whychooseus" className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <WhyChooseUs />
        </section>
         <section id="programs" className="flex flex-col px-15 mt-20 items-center justify-center overflow-hidden">
          <Programs />
        </section>
         {/* <section className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <CohortJourney />
        </section> */}
         <section id="TestimonialsSection" className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <TestimonialsSection />
        </section>
         <section id="thefounder" className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <TheFounder />
        </section>
         <section id="contact" className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <ContactSupport />
        </section>
         <section className="flex flex-col px-10 mt-20 items-center justify-center overflow-hidden">
          <Footer />
        </section>
      </main></>
  )
}