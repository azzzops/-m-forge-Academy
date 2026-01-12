import {
  Hammer,
  ShieldCheck,
  Lightbulb,
  Globe,
  GraduationCap,
} from "lucide-react";

export default function CoreValues() {
  const CoreValues = [
    {
      icon: Hammer,
      title: "Hands-On Learning",
      description: "Learn by building real projects, not just theory.",
    },
    {
      icon: ShieldCheck,
      title: "Security First",
      description: "Every builder understands security fundamentals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Impact",
      description: "Creating practical solutions for real-world problems.",
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Connect with builders across Africa and beyond.",
    },
    {
      icon: GraduationCap,
      title: "Builder-Driven Education",
      description: "Curriculum designed by active Web3 practitioners.",
    },
  ];

  return (
    <>
      <div className="space-y-5">
        <div className="space-y-2.5 text-center">
          <p className="text-2xl font-bold text-chart-2">WHAT WE STAND FOR</p>
          <h1 className="text-xl text-shadow-primary-dark font-bold">Our Core Values</h1>
        </div>
        <div className="grid max-w-280 grid-cols-1 md:grid-cols-3 gap-8">
            {CoreValues.map(t => (
                <div key={t.title} className="space-y-2.5 glass-card-2 p-8 rounded-xl">
                    <div><t.icon className="h-8 w-8 text-chart-2" /></div>
                    <h1 className="text-[16px] font-bold text-sidebar-primary">{t.title}</h1>
                    <p className="max-w-80 text-muted-foreground text-[14px]">{t.description}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}
