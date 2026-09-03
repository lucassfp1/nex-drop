import { Reveal } from "@/components/reveal";

const process = [
  ["01", "Diagnóstico", "Entendemos negócio, público e objetivo."],
  ["02", "Estratégia", "Definimos estrutura, comunicação e conversão."],
  ["03", "Design", "Criamos a experiência e a identidade digital."],
  ["04", "Desenvolvimento", "Transformamos o projeto em uma aplicação rápida e responsiva."],
  ["05", "Publicação", "Testamos e colocamos o novo site no ar."],
];

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
