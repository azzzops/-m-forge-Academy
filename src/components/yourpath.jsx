// import {
//   Calendar,
//   TrendingUp,
//   Database,
//   Award,
//   CheckCircle,
// } from "lucide-react";

// export default function CohortJourney() {
//   return (
//     <section className="w-full bg-background text-foreground py-20">
//       <div className="max-w-5xl mx-auto px-6 space-y-16">
//         {/* Section Header */}
//         <div className="space-y-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
//             Cohort Journey
//           </h2>
//           <p className="max-w-2xl m-auto text-muted-foreground">
//             A structured, two-week learning path designed to build foundational
//             understanding and applied Web3 competence.
//           </p>
//         </div>

//         {/* Weeks */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Week 1 */}
//           <div className="glass-card rounded-(--radius) border border-border p-8">
//             <div className="flex items-center gap-2 text-sm text-muted-foreground">
//               <Calendar className="w-4 h-4 text-primary" />
//               <span className="uppercase tracking-wide">Week 1</span>
//             </div>

//             <h3 className="mt-4 text-2xl font-semibold">
//               Foundations & Web3 Careers
//             </h3>

//             <div className="mt-6 h-px bg-border" />

//             <ol className="mt-6 space-y-5">
//               {[
//                 "Blockchain Foundations",
//                 "Web3 Ecosystem",
//                 "Career Paths",
//                 "Security Basics",
//                 "Guest Sessions",
//               ].map((item, index) => (
//                 <li key={item} className="flex items-start gap-4">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-sm font-medium text-primary">
//                     {index + 1}
//                   </div>
//                   <p className="text-muted-foreground">{item}</p>
//                 </li>
//               ))}
//             </ol>
//           </div>

//           {/* Week 2 */}
//           <div className="glass-card-2 rounded-(--radius) border border-border p-8">
//             <div className="flex items-center gap-2 text-sm text-muted-foreground">
//               <Calendar className="w-4 h-4 text-primary" />
//               <span className="uppercase tracking-wide">Week 2</span>
//             </div>

//             <h3 className="mt-4 text-2xl font-semibold">
//               Trading & Data Analytics
//             </h3>

//             <div className="mt-6 h-px bg-border" />

//             <ol className="mt-6 space-y-5">
//               {[
//                 "Trading Fundamentals",
//                 "AMA Sessions",
//                 "Solscan Analysis",
//                 "Dune Analytics",
//                 "Final Projects"
//               ].map((item, index) => (
//                 <li key={item} className="flex items-start gap-4">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-sm font-medium text-primary">
//                     {index + 6}
//                   </div>
//                   <p className="text-muted-foreground">{item}</p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>

//         {/* Graduates Receive */}
//         <div className="glass-card rounded-(--radius) border border-border p-8">
//           <div className="flex items-center gap-3">
//             <Award className="w-6 h-6 text-primary" />
//             <h3 className="text-2xl font-semibold">
//               Graduates Receive
//             </h3>
//           </div>

//           <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//             {[
//               "Certificate of Completion",
//               "Practical Web3 skills",
//               "Portfolio-ready projects",
//               "Alumni network access",
//             ].map((item) => (
//               <li key={item} className="flex items-start gap-3">
//                 <CheckCircle className="w-4 h-4 text-chart-2 mt-0.5" />
//                 <span className="text-muted-foreground">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
