import { Braces, ChartNoAxesCombined, LayoutTemplate, MessageCircleMore, Search, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";

const before = ["Site genérico", "Contato difícil", "Pouca autoridade", "Sem direção clara", "Experiência mobile ruim"];
const after = ["Identidade própria", "CTA estratégico", "Posicionamento claro", "Responsividade", "Foco em conversão"];

const services = [
  { title: "Posicionamento", text: "Seu negócio precisa parecer tão profissional online quanto é presencialmente.", icon: Target },
  { title: "Design", text: "Interfaces construídas para transmitir confiança e diferenciação.", icon: LayoutTemplate },
  { title: "Desenvolvimento", text: "Experiências rápidas, responsivas e bem estruturadas.", icon: Braces },
  { title: "Conversão", text: "Cada seção conduz o visitante para uma próxima ação.", icon: ChartNoAxesCombined },
  { title: "SEO", text: "Estrutura técnica preparada para mecanismos de busca.", icon: Search },
  { title: "Integrações", text: "WhatsApp, formulários, redes sociais e ferramentas necessárias.", icon: MessageCircleMore },
];

const process = [
  ["01", "Diagnóstico", "Entendemos negócio, público e objetivo."],
  ["02", "Estratégia", "Definimos estrutura, comunicação e conversão."],
  ["03", "Design", "Criamos a experiência e a identidade digital."],
  ["04", "Desenvolvimento", "Transformamos o projeto em uma aplicação rápida e responsiva."],
  ["05", "Publicação", "Testamos e colocamos o novo site no ar."],
];

export function ComparisonSection() {
  return (
    <section className="section comparison-section" aria-labelledby="comparison-title">
      <Reveal className="section-heading">
        <p className="section-kicker">A mudança que importa</p>
        <h2 id="comparison-title">De presença genérica a posicionamento claro.</h2>
      </Reveal>
      <Reveal className="comparison-panel">
        <div className="comparison-side comparison-before"><p>Antes</p><ul>{before.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="comparison-center" aria-hidden="true"><span>N</span></div>
        <div className="comparison-side comparison-after"><p>NexDrop</p><ul>{after.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </Reveal>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section services-section" id="servicos" aria-labelledby="services-title">
      <Reveal className="section-heading split-heading">
        <div><p className="section-kicker">O que construímos</p><h2 id="services-title">Um site bonito é só o começo.</h2></div>
        <p>Cada decisão visual serve a uma mensagem, uma percepção e uma ação que o visitante precisa tomar.</p>
      </Reveal>
      <div className="services-grid">
        {services.map(({ title, text, icon: Icon }, index) => (
          <Reveal className="service-card" key={title}>
            <div className="card-topline"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
            <h3>{title}</h3><p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section process-section" id="processo" aria-labelledby="process-title">
      <Reveal className="section-heading split-heading">
        <div><p className="section-kicker">Processo</p><h2 id="process-title">Clareza do primeiro contato à publicação.</h2></div>
        <p>Você acompanha cada etapa, entende o que está sendo decidido e sabe qual é o próximo passo.</p>
      </Reveal>
      <div className="process-list">
        {process.map(([number, title, text]) => (
          <Reveal className="process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>
        ))}
      </div>
    </section>
  );
}
