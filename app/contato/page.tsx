import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SocialLinks } from "@/components/social-links";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contato e solicitação de projeto",
  description: "Converse com a NexDrop sobre um novo site. Entre em contato por WhatsApp, Instagram ou e-mail.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <main id="conteudo">
      <PageIntro eyebrow="Contato" title="Conte sobre o site que o seu negócio precisa." description="O primeiro passo é uma conversa objetiva sobre o momento da empresa, o público e o resultado que o novo site precisa apoiar." currentLabel="Contato" />
      <section className="section contact-section" aria-labelledby="contact-options-title">
        <div className="contact-copy"><p className="section-kicker">Próximo passo</p><h2 id="contact-options-title">Escolha o canal mais confortável para você.</h2><p>O WhatsApp é o caminho mais rápido. A conversa inicial serve para entender o projeto e orientar os próximos passos, sem compromisso.</p></div>
        <SocialLinks className="contact-options" />
      </section>
      <section className="contact-note"><p className="section-kicker">O que acontece depois</p><p>Vamos entender sua necessidade, alinhar escopo e indicar a melhor estrutura. Se houver aderência, você recebe uma proposta clara para avaliar.</p></section>
    </main>
  );
}
