import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Serviços de criação de sites estratégicos",
  description: "Estratégia, design, desenvolvimento, SEO técnico e integrações para sites de profissionais e negócios de serviço.",
  path: "/servicos",
});

const deliverables = [
  ["Estratégia e estrutura", "Definição da jornada, hierarquia das páginas e mensagens principais."],
  ["Design responsivo", "Interfaces próprias, pensadas para leitura e ação em cada tamanho de tela."],
  ["Desenvolvimento", "Implementação rápida, acessível e preparada para publicação."],
  ["SEO técnico", "Metadata, headings, sitemap, robots e base semântica para indexação."],
  ["Integrações", "WhatsApp, formulários, redes sociais e ferramentas adequadas ao projeto."],
  ["Publicação", "Revisão final, configuração técnica e apoio para colocar o site no ar."],
];

export default function ServicesPage() {
  return (
    <main id="conteudo">
      <PageIntro eyebrow="Serviços" title="Sites sob medida para negócios que vendem confiança." description="A NexDrop une estratégia, design e desenvolvimento para transformar presença digital em uma ferramenta real de posicionamento e contato." currentLabel="Serviços" />
      <section className="section service-deliverables" aria-labelledby="deliverables-title">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">Escopo</p><h2 id="deliverables-title">O que um projeto pode incluir.</h2></div>
          <p>O escopo final depende do objetivo do seu negócio. Você recebe uma proposta específica, não um pacote genérico.</p>
        </div>
        <div className="deliverables-list">
          {deliverables.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Check aria-hidden="true" /></article>
          ))}
        </div>
        <div className="internal-links-panel">
          <p>Quer ver como essa abordagem aparece na prática?</p>
          <Link className="text-link" href="/projetos">Conheça os projetos da NexDrop <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="compact-cta"><h2>Vamos transformar a percepção do seu negócio?</h2><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar projeto <ArrowUpRight aria-hidden="true" /></a></section>
    </main>
  );
}
