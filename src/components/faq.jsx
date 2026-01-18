import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is Àkàńó Labs and its connection to Ìmòforge Academy?",
    answer: [
      "Àkàńó Labs is a technology and blockchain-focused innovation lab dedicated to education, research, and the development of secure, data-driven products across Web2 and Web3 technologies.",
      "We combine learning, experimentation, and real-world building to prepare individuals for the digital and decentralized future.",
      "Founded by Oyelude Waliullahi, a blockchain data analyst, Web3 developer, and researcher, Àkàńó Labs operates as both an innovation lab building and researching technology products, and an education ecosystem through its academy and training programs.",
      "Ìmòforge Academy is the official education arm of Àkàńó Labs, focused on structured learning, mentorship, and hands-on training in Web2, Web3, blockchain development, data analytics, DeFi, and digital finance."
    ],
  },
  {
    id: 2,
    question: "What is Ìmòforge Academy?",
    answer: [
      "Ìmòforge Academy is the structured learning and training platform of Àkàńó Labs.",
      "It provides practical, mentor-guided learning to help participants develop real-world skills and long-term positioning in Web3 and modern technology systems."
    ],
  },
  {
    id: 3,
    question: "What is Magnum Ìmò 2.0?",
    answer: [
      "Magnum Ìmò 2.0 is the second cohort of Ìmòforge Academy.",
      "It is a Web3-first, 10-week intensive program designed to build strong technical foundations, on-chain thinking, and long-term positioning across modern tech ecosystems.",
      "Theme: A journey of a thousand miles begins with a single step.",
      "No hype. No shortcuts. No recycled content."
    ],
  },
  {
    id: 4,
    question: "When does Magnum Ìmò 2.0 start and how long does it last?",
    answer: [
      "Start date: 2 February, 2026.",
      "Duration: 10 weeks (intensive).",
      "Participants receive onboarding and preparation details prior to the cohort start date."
    ],
  },
  {
    id: 5,
    question: "Who is Magnum Ìmò 2.0 for?",
    answer: [
      "Beginners seeking a serious entry into Web3.",
      "Web2 developers and analysts transitioning into Web3.",
      "Traders and researchers seeking deeper system-level understanding.",
      "Tech learners focused on long-term skill development and positioning.",
      "It is built for people who want to think, build, and adapt — not chase trends."
    ],
  },
  {
    id: 6,
    question: "Do I need prior experience to join?",
    answer:
      "No prior Web3 or blockchain experience is required. The program starts from first principles and builds progressively.",
  },
  {
    id: 7,
    question: "What makes Ìmòforge Academy different from other academies?",
    answer: [
      "System-level understanding over memorizing tools.",
      "Transferable technical thinking across Web2 and Web3.",
      "Practical context without exposing proprietary frameworks.",
      "Long-term skill development, not content overload.",
      "This is guided learning with depth, not just lessons."
    ],
  },
  {
    id: 8,
    question: "What does the curriculum focus on?",
    answer: [
      "Web3 foundations and digital positioning.",
      "Smart contracts and protocol architecture.",
      "Blockchain data and on-chain intelligence.",
      "Security research and exploit awareness.",
      "DeFi mechanics and value flow.",
      "Trading and market strategy.",
      "Skill-to-income conversion and opportunity positioning.",
      "Each pillar is taught with practical context and real-world thinking."
    ],
  },
  {
    id: 9,
    question: "Is the program theoretical or practical?",
    answer:
      "The program is thinking-first and practice-driven. Participants learn how systems work, why decisions matter, and how to apply concepts across environments.",
  },
  {
    id: 10,
    question: "Will I receive a certificate?",
    answer:
      "Yes. Participants who successfully complete Magnum Ìmò 2.0 receive an official Ìmòforge Academy Certificate and access to the Alumni Community.",
  },
  {
    id: 11,
    question: "What is the Ìmòforge Academy Alumni Community?",
    answer: [
      "A private network for certified graduates.",
      "Continued learning and mentorship.",
      "Long-term networking.",
      "Early access to future programs and initiatives.",
      "Positioning within the academy ecosystem."
    ],
  },
  {
    id: 12,
    question: "How much time should I commit weekly?",
    answer: [
      "Magnum Ìmò 2.0 is intensive.",
      "Participants should expect to dedicate several focused hours per week to learning, thinking, and applying concepts.",
      "Consistency is essential."
    ],
  },
  {
    id: 13,
    question: "When does registration and payment open and close?",
    answer: [
      "Opens: 21 January, 2026.",
      "Closes: 1 February, 2026.",
      "Admission is via the Academy Waitlist only."
    ],
  },
  {
    id: 14,
    question: "Is there an early-bird discount?",
    answer:
      "Yes. A 30% early-bird discount is available for participants who register within the first 48 hours after payment opens. After this period, the fee returns to the standard cohort price.",
  },
  {
    id: 15,
    question: "How do I register for Magnum Ìmò 2.0?",
    answer: [
      "Join the official Ìmòforge Academy Waitlist.",
      "Receive the registration announcement.",
      "Complete payment within the registration window.",
      "Access is limited and slots are not guaranteed."
    ],
  },
  {
    id: 16,
    question: "Is Magnum Ìmò 2.0 for everyone?",
    answer: [
      "No. This program is not for individuals seeking quick money.",
      "It is not for those looking for signals or shortcuts.",
      "It is not for passive learning.",
      "It is for those committed to real understanding and long-term growth."
    ],
  },
  {
    id: 17,
    question: "Is the payment refundable?",
    answer:
      "No. Once payment is made, it is non-refundable due to the structured and limited nature of the cohort.",
  },
  {
    id: 18,
    question: "How do I stay updated and engaged?",
    answer: [
      "Follow Ìmòforge Academy and Àkàńó Labs on all official social media.",
      "Stay active in official channels.",
      "Track announcements, updates, and onboarding instructions.",
      "Staying connected ensures you do not miss any important information."
    ],
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(null);
  const reduceMotion = useReducedMotion();

  const toggleFaq = (id) => setActiveId(activeId === id ? null : id);

  return (
    <section className="bg-background">
      <div className="mx-auto"> 
        {/* Header */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <HelpCircle className="h-6 w-6 text-foreground/80" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className=" space-y-4">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl mx-auto max-w-250 border border-border bg-card/80 "
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium text-card-foreground wrap-break-word">
                    {faq.question}
                  </span>

                  <span className="flex p-3 items-center justify-center rounded-full border border-border text-muted-foreground">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: reduceMotion ? 0 : 0.25, ease: "easeOut" },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: reduceMotion ? 0 : 0.2, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 w-full text-sm md:text-base leading-relaxed text-muted-foreground space-y-3 wrap-break-word">
                        
                            {Array.isArray(faq.answer)
                              ? faq.answer.map((text, i) => <p key={i}>{text}</p>)
                              : <p>{faq.answer}</p>}
                      
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
