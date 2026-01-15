import Walilullahi from "../assets/Oyelude Walilullahi.jpg";
import { Quote } from "lucide-react";

export default function TheFounder() {
  return (
    <section className="w-full glass-card p-9 rounded-2xl max-w-180 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Founder Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <img
              src={Walilullahi}
              alt="Oyelude Waliullahi, Founder of Àkàńó Labs"
              className="
                w-100 h-100 object-cover rounded-2xl
                border border-border
              "
            />
          </div>
        </div>

        {/* Founder Content */}
        <div className="flex flex-col gap-6">
          {/* Identity */}
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-sidebar-primary">
              Oyelude Waliullahi
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Founder & Director, Àkàńó Labs · Blockchain Data Analyst,
              DeFi Tool Developer, Trader, and Cybersecurity Student
            </p>
          </div>

          {/* Bio */}
          <p className="text-[16px] leading-relaxed text-primary-light max-w-lg">
            Waliullahi is passionate about building technology, training, and
            connecting builders worldwide empowering skilled individuals to
            shape the decentralized future.
          </p>

          {/* Quote */}
          <div
            className="
              relative mt-4 rounded-xl
              border border-border
              bg-primary/5
              px-5 py-4
            "
          >
            <Quote className="h-4 w-4 text-chart-2 mb-2" />
            <q className="text-sm italic text-muted-foreground leading-relaxed">
              Skilled individuals and technology will transform the world.
            </q>
          </div>
        </div>
      </div>
    </section>
  );
}
