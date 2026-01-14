import {
  Mail,
  Send,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="w-full max-w-260 mx-auto">
      <div className="flex flex-col gap-14">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-widest text-chart-2">
            CONTACT & SUPPORT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-sidebar-primary">
            Reach Out to Us
          </h2>
          <p className="max-w-140 mx-auto text-[16px] text-muted-foreground">
            We’re always open to questions, conversations, and meaningful
            connections. Reach out anytime we’re here to support your journey.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Email */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-chart-2">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-sidebar-primary">
                Email Support
              </h3>
            </div>

            <p className="text-[16px] leading-relaxed text-muted-foreground max-w-md">
              For inquiries, guidance, or general support, you can reach us
              directly via email. We respond with care and clarity.
            </p>

            <a
              href="mailto:support@imoforge.academy"
              className="text-[16px] font-medium text-primary-ring hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              support@imoforge.academy
            </a>
          </div>

          {/* Social Channels */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-chart-2">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-sidebar-primary">
                Social Channels
              </h3>
            </div>

            <p className="text-[16px] leading-relaxed text-muted-foreground max-w-md">
              Connect with us, ask questions, and stay updated through our
              official social platforms.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                {
                  name: "X (Twitter)",
                  href: "https://x.com/Imoforge_Acad",
                  icon: Twitter,
                },
                {
                  name: "TikTok",
                  href: "https://example.com/tiktok",
                  icon: MessageCircle,
                },
                {
                  name: "Instagram",
                  href: "https://example.com/instagram",
                  icon: Instagram,
                },
                {
                  name: "Telegram",
                  href: "https://example.com/telegram",
                  icon: Send,
                },
              ].map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-border
                    px-4 py-2
                    text-sm font-medium text-muted-foreground
                    hover:text-sidebar-primary
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ring
                    transition-colors
                  "
                >
                  <Icon className="h-4 w-4 text-chart-2" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
