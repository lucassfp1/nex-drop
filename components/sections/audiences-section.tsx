import Link from "next/link";
import { ArrowUpRight, LayoutTemplate, Search, Target, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";

const audiences = [
  "Advocacia",
  "Odontologia",
  "Clínicas",
  "Personal trainers",
  "Contabilidade",
  "Arquitetura",
  "Consultoria",
  "Negócios locais",
];

const capabilities = [
  { title: "Posicionamento", text: "Mensagem e estrutura para o negócio ser percebido com clareza.", icon: Target },
  { title: "Design e desenvolvimento", text: "Uma experiência própria, rápida e pensada para celular.", icon: LayoutTemplate },
  { title: "Conversão e SEO", text: "Conteúdo, busca e chamadas para transformar interesse em contato.", icon: Search },
  { title: "Integrações", text: "WhatsApp, formulários e ferramentas ligadas ao fluxo comercial.", icon: Workflow },
];

export function AudiencesSection() {
  return (
    <section className="section audiences-section" id="servicos" aria-labelledby="audiences-title">
      <Reveal className="section-heading split-heading">
        <div><p className="section-kicker">Estrutura sob medida</p><h2 id="audiences-title">O necessário para apresentar melhor o seu negócio.</h2></div>
        <p>Sem pacotes genéricos. A NexDrop reúne estratégia, design e desenvolvimento em uma única direção.</p>
      </Reveal>
      <Reveal className="expertise-console">
        <div className="glass-console-bar">
          <span><i aria-hidden="true" /> Sistema de projeto NexDrop</span>
          <span>Estratégia / Design / Entrega</span>
        </div>
        <div className="expertise-layout">
          <div className="audience-summary">
            <span className="console-label">Para quem criamos</span>
            <h3>Profissionais e empresas que vendem confiança antes do serviço.</h3>
            <ul>{audiences.map((audience) => <li key={audience}>{audience}</li>)}</ul>
            <Link href="/servicos">Conhecer os serviços <ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="capability-list">
            {capabilities.map(({ title, text, icon: Icon }, index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <span className="capability-icon"><Icon aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
