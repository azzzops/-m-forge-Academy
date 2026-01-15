import { Mail, Twitter, Instagram, Send } from "lucide-react";


export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background px-6 md:px-10 py-12">
      <div className="max-w-260 mx-auto flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <h2 className="text-2xl font-bold text-sidebar-primary">
              Ìmòforge Academy
            </h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Empowering builders worldwide with hands on Web3 programs,
              real world projects, and a global alumni network.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-chart-2">
              Navigate
            </h3>
            <ul className="flex flex-col gap-1 text-[15px] text-muted-foreground">
              <li>
                <a
                  href="#programs"
                  className="hover:text-sidebar-primary transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-sidebar-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#founder"
                  className="hover:text-sidebar-primary transition-colors"
                >
                  Founder
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sidebar-primary transition-colors"
                >
                  Contact / Support
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact & Community */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-sidebar-primary">
              Connect with Us
            </h3>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-chart-2" />
              <a
                href="mailto:support@imoforge.academy"
                className="text-[15px] text-primary-ring hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                support@imoforge.academy
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                { name: "X (Twitter)", href: "https://x.com/Imoforge_Acad", icon: Twitter },
                { name: "Instagram", href: "https://www.instagram.com/imoforge_acad?igsh=dmk2ZnpldW9jeGZq", icon: Instagram },
                { name: "TikTok", href: "https://www.tiktok.com/@imoforge_acad?_r=1&_t=ZS-934FVgaYyzi", icon: Send },
                { name: "Telegram", href: "https://t.me/imoforge_Acad ", icon: Send },
              ].map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-[14px] text-muted-foreground hover:text-sidebar-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4 text-chart-2" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between text-[14px] text-muted-foreground">
          <span>© {new Date().getFullYear()} Ìmòforge Academy</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
