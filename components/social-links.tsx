import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";

function InstagramGlyph() {
  return (
    <span className="social-glyph" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.7" r="0.85" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

function WhatsAppGlyph() {
  return (
    <span className="social-glyph social-glyph-whatsapp" aria-hidden="true">
      <MessageCircle />
      <Phone />
    </span>
  );
}

const channels = [
  {
    label: "WhatsApp",
    value: "Iniciar conversa",
    href: whatsappUrl,
    icon: <WhatsAppGlyph />,
  },
  {
    label: "Instagram",
    value: siteConfig.instagramLabel,
    href: siteConfig.instagram,
    icon: <InstagramGlyph />,
  },
  {
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}?subject=Novo projeto NexDrop`,
    icon: <span className="social-glyph" aria-hidden="true"><Mail /></span>,
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links${className ? ` ${className}` : ""}`}>
      {channels.map((channel) => (
        <a href={channel.href} target="_blank" rel="noreferrer" key={channel.label}>
          {channel.icon}
          <span className="social-copy"><small>{channel.label}</small><strong>{channel.value}</strong></span>
          <ArrowUpRight className="social-arrow" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
