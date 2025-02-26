import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { 
    icon: FaXTwitter, 
    href: "https://x.com/Intern_AItool",
    label: "Follow on X"
  },
  { 
    icon: FaTelegram, 
    href: "https://t.me/intern_AItool",
    label: "Join Telegram"
  },
  { 
    icon: FaDiscord, 
    href: "https://discord.gg/cjqfwZvY",
    label: "Join Discord"
  },
];

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 InternAI. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}