import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Obrigado pelo contato",
  description: "Próximos passos após entrar em contato com a NexDrop.",
  path: "/obrigado",
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <main id="conteudo" className="status-page">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Obrigado" }]} />
      <div className="status-icon"><Check aria-hidden="true" /></div>
      <p className="section-kicker">Próximo passo</p>
      <h1>Obrigado por falar com a NexDrop.</h1>
      <p>Se você acabou de enviar uma mensagem por um canal de contato, vamos continuar a conversa por lá. O simples acesso a esta página não é registrado como envio de formulário.</p>
      <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight aria-hidden="true" /></a><Link className="button button-secondary" href="/"><ArrowLeft aria-hidden="true" /> Voltar ao site</Link></div>
    </main>
  );
}
