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
      "Ìmòforge Academy is the official education arm of Àkàńó Labs, focused on structured learning, mentorship, and hands-on training in Web2, Web3, blockchain development, data analytics, DeFi, and digital finance.",
    ],
  },
  {
    id: 2,
    question: "What is Ìmòforge Academy?",
    answer: [
      "Ìmòforge Academy is the structured learning and training platform of Àkàńó Labs.",
      "It provides practical, mentor-guided learning to help participants develop real-world skills and long-term positioning in Web3 and modern technology systems.",
    ],
  },
  {
    id: 3,
    question: "What is Magnum Ìmò 2.0?",
    answer: [
      "Magnum Ìmò 2.0 is the second cohort of Ìmòforge Academy.",
      "It is a Web3-first, 10-week intensive program designed to build strong technical foundations, on-chain thinking, and long-term positioning across modern tech ecosystems.",
      "Theme: A journey of a thousand miles begins with a single step.",
      "No hype. No shortcuts. No recycled content.",
    ],
  },
  {
    id: 4,
    question: "When does Magnum Ìmò 2.0 start and how long does it last?",
    answer: [
      "Start date: 27 April, 2026.",
      "Duration: 10 weeks (intensive).",
      "Participants receive onboarding and preparation details prior to the cohort start date.",
    ],
  },
  {
    id: 5,
    question: "Who is Magnum Ìmò 2.0 for?",
    answer: [
      "Magnum Ìmò 2.0 is designed for both beginners and professionals.",
      "Whether you're new to blockchain or looking to formalize your skills, this 10-week program will teach you practical, career-ready skills in Web3, blockchain technology, and digital assets.",
    ],
  },
  {
    id: 6,
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required. The program starts with foundational concepts and gradually moves to hands-on projects and advanced applications, making it beginner-friendly while still valuable for professionals.",
  },
  {
    id: 7,
    question: "What makes Ìmòforge Academy different from other academies?",
    answer: [
      "System-level understanding over memorizing tools.",
      "Transferable technical thinking across Web2 and Web3.",
      "Practical context without exposing proprietary frameworks.",
      "Long-term skill development, not content overload.",
      "This is guided learning with depth, not just lessons.",
      "Graduates also gain access to our exclusive alumni community, continuing to learn, collaborate, and grow even after their cohort has finished.",
    ],
  },
  {
    id: 8,
    question: "What will I learn?",
    answer: [
      "Web3 & Blockchain Technology – How blockchain works and how digital projects are built.",
      "Blockchain Data & Analysis – How to read and analyze blockchain activity.",
      "On-Chain Research – Understanding project performance and digital asset behavior.",
      "Digital Asset & Trading Fundamentals – Safe strategies for exploring cryptocurrencies and tokens.",
      "Building on Blockchain – Smart contracts, dApps, and blockchain programs.",
      "Blockchain Safety & Security – Protecting projects and digital assets.",
      "Building a Career in Web3 – Roadmaps for jobs, freelancing, and opportunities.",
    ],
  },
  {
    id: 9,
    question: "How long is the program?",
    answer:
      "The cohort runs for 10 weeks, with interactive sessions, practical exercises, and mentorship support throughout.",
  },
  {
    id: 10,
    question: "How is the program delivered?",
    answer:
      "Magnum Ìmò 2.0 is fully online and cohort-based, meaning you'll learn alongside peers, participate in live sessions, and get guidance from mentors. All resources are accessible digitally.",
  },
  {
    id: 11,
    question: "What are the benefits of joining Magnum Ìmò 2.0?",
    answer: [
      "Receive a certificate of completion after successfully finishing the program.",
      "Gain access to the exclusive Ìmòforge Alumni Community for networking, mentorship, and continued learning.",
      "Develop career-ready skills in Web3 and blockchain.",
      "Work on hands-on projects with guidance from industry mentors.",
    ],
  },
  {
    id: 12,
    question: "What outcomes can I expect?",
    answer: [
      "Understand Web3 and blockchain technology.",
      "Analyze blockchain data and digital project activity.",
      "Build basic blockchain applications.",
      "Apply safe strategies to digital assets.",
      "Have a personal roadmap to start or advance a Web3 career.",
      "Receive a certificate and join the Ìmòforge alumni network.",
    ],
  },
  {
    id: 13,
    question: "How much does it cost?",
    answer:
      "The Magnum Ìmò 2.0 program is $50. This includes all live sessions, hands-on exercises, mentorship, learning resources, and access to the alumni community. Limited seats ensure personalized guidance.",
  },
  {
    id: 14,
    question: "When does registration and payment open and close?",
    answer: [
      "Opens: 20 April, 2026.",
      "Closes: 27 April, 2026.",
      "Admission is via the Academy Waitlist only.",
    ],
  },
  {
    id: 15,
    question: "How do I register for Magnum Ìmò 2.0?",
    answer: [
      "Join the official Ìmòforge Academy Waitlist.",
      "Receive the registration announcement.",
      "Complete payment within the registration window.",
      "Access is limited and slots are not guaranteed.",
    ],
  },
  {
    id: 16,
    question: "Is Magnum Ìmò 2.0 for everyone?",
    answer: [
      "No. This program is not for individuals seeking quick money.",
      "It is not for those looking for signals or shortcuts.",
      "It is not for passive learning.",
      "It is for those committed to real understanding and long-term growth.",
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
    question: "What is the Ìmòforge Academy Alumni Community?",
    answer: [
      "A private network for certified graduates.",
      "Continued learning and mentorship.",
      "Long-term networking.",
      "Early access to future programs and initiatives.",
      "Positioning within the academy ecosystem.",
    ],
  },
  {
    id: 19,
    question: "How do I stay updated and engaged?",
    answer: [
      "Follow Ìmòforge Academy and Àkàńó Labs on all official social media.",
      "Stay active in official channels.",
      "Track announcements, updates, and onboarding instructions.",
      "Staying connected ensures you do not miss any important information.",
    ],
  },
  {
    id: 20,
    question: "Does Ìmòforge Academy offer any free programs?",
    answer: [
      "Yes. Ìmòforge Academy has launched its annual free workshop called",
      "Ìmòforge Gratia Vault.",
      "Edition: 2026",
      "Duration: 2 weeks",
      "Start Date: 30 March 2026",
      "End Date: 12 April 2026",
      "Frequency: Held every year",
      "This workshop is designed to introduce learners to core concepts and prepare them for advanced programs.",
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
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
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
                        transition: {
                          duration: reduceMotion ? 0 : 0.25,
                          ease: "easeOut",
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          duration: reduceMotion ? 0 : 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 w-full text-sm md:text-base leading-relaxed text-muted-foreground space-y-3 wrap-break-word">
                        {Array.isArray(faq.answer) ? (
                          faq.answer.map((text, i) => <p key={i}>{text}</p>)
                        ) : (
                          <p>{faq.answer}</p>
                        )}
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
