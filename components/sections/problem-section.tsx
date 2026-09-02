import { Compass, MousePointerClick, ScanEye } from "lucide-react";
import { Reveal } from "@/components/reveal";

const problems = [
  { number: "01", title: "Primeira impressão", text: "Um site amador pode fazer um bom negócio parecer menor do que realmente é.", icon: ScanEye },
  { number: "02", title: "Confiança", text: "Antes de entrar em contato, o cliente precisa acreditar na sua empresa.", icon: Compass },
  { number: "03", title: "Conversão", text: "Visitas sem direção clara viram oportunidades perdidas.", icon: MousePointerClick },
];

export function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <Reveal className="section-heading split-heading">
        <div><p className="section-kicker">Antes do primeiro contato</p><h2 id="problem-title">Seu cliente pesquisa antes de escolher.</h2></div>
        <p>A presença digital participa da decisão. Ela precisa confirmar a qualidade que o seu negócio já entrega no mundo real.</p>
      </Reveal>
      <div className="problem-grid">
        {problems.map(({ number, title, text, icon: Icon }) => (
          <Reveal className="problem-card" key={number}>
            <div className="card-topline"><span>{number}</span><Icon aria-hidden="true" /></div>
            <h3>{title}</h3><p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
