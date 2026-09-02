import type { Metadata } from "next";
import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contato e solicitação de projeto",
  description: "Converse com a NexDrop sobre um novo site. Entre em contato por WhatsApp, Instagram ou e-mail.",
  path: "/contato",
});

const contacts = [
  { label: "WhatsApp", value: "Iniciar conversa", href: whatsappUrl, icon: MessageCircle, primary: true },
  { label: "Instagram", value: siteConfig.instagramLabel, href: siteConfig.instagram, icon: AtSign },
  { label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}?subject=Novo projeto NexDrop`, icon: Mail },
];

export default function ContactPage() {
  return (
    <main id="conteudo">
      <PageIntro eyebrow="Contato" title="Conte sobre o site que o seu negócio precisa." description="O primeiro passo é uma conversa objetiva sobre o momento da empresa, o público e o resultado que o novo site precisa apoiar." currentLabel="Contato" />
      <section className="section contact-section" aria-labelledby="contact-options-title">
        <div className="contact-copy"><p className="section-kicker">Próximo passo</p><h2 id="contact-options-title">Escolha o canal mais confortável para você.</h2><p>O WhatsApp é o caminho mais rápido. A conversa inicial serve para entender o projeto e orientar os próximos passos, sem compromisso.</p></div>
        <div className="contact-options">
          {contacts.map(({ label, value, href, icon: Icon, primary }) => (
            <a className={`contact-card${primary ? " is-primary" : ""}`} href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon aria-hidden="true" /><span>{label}<strong>{value}</strong></span><ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
      <section className="contact-note"><p className="section-kicker">O que acontece depois</p><p>Vamos entender sua necessidade, alinhar escopo e indicar a melhor estrutura. Se houver aderência, você recebe uma proposta clara para avaliar.</p></section>
    </main>
  );
}
