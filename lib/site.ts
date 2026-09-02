const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

export const siteUrl = (
  configuredSiteUrl || (vercelProductionUrl ? `https://${vercelProductionUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const siteConfig = {
  name: "NexDrop",
  legalName: "NexDrop",
  description:
    "Estúdio digital que cria sites estratégicos para profissionais e negócios de serviço aumentarem autoridade, confiança e geração de contatos.",
  email: "lucasferpa2026@gmail.com",
  instagram: "https://www.instagram.com/nex.dropbr/",
  instagramLabel: "@nex.dropbr",
  whatsappNumber: "5521980388966",
  whatsappMessage: "Olá! Vi o site da NexDrop e gostaria de conversar sobre um novo projeto.",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export const primaryNav = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Processo", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
] as const;
