import { useState } from "react";
import { Menu, X } from "lucide-react";
import Imo from "../assets/grok_1767654184534.jpg";

const links = [
  { name: "About", href: "#" },
  { name: "Curriculum", href: "#" },
  { name: "Cohort", href: "#" },
  { name: "Alumni", href: "#" },
  { name: "Founder", href: "#" },
  { name: "Contact", href: "#" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-b-chart-2/20 bg-background/20 backdrop-blur-[18px]">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl overflow-hidden">
            <img
              src={Imo}
              alt="Ìmòforge Academy Logo"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="flex flex-col text-[16px] font-semibold leading-tight">
            <span>Ìmòforge</span>
            <span>Academy</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-for-default hover:text-och transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="p-3 border-[3px] rounded-2xl glass-card-2 text-och hover:scale-105 transition-transform"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-for-default hover:text-och transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/20 backdrop-blur-[18px] border-t border-t-chart-2/20 transition-all">
          <ul className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-for-default text-lg hover:text-och transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block p-3 border-[3px] rounded-2xl glass-card-2 text-och text-center hover:scale-105 transition-transform"
                onClick={() => setMobileOpen(false)}
              >
                Join Waitlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
