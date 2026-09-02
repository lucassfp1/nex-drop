import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const audiences = [
  ["Advogados", "Autoridade, áreas de atuação e contato."],
  ["Dentistas", "Procedimentos, confiança e agendamento."],
  ["Personal trainers", "Metodologia, posicionamento e captação de alunos."],
  ["Clínicas", "Especialidades, profissionais e agendamento."],
  ["Contadores", "Serviços, credibilidade e geração de leads."],
  ["Outros negócios", "Estrutura adaptada para a realidade de cada empresa."],
];

export function AudiencesSection() {
  return (
    <section className="section audiences-section" aria-labelledby="audiences-title">
      <Reveal className="section-heading split-heading">
        <div><p className="section-kicker">Sob medida</p><h2 id="audiences-title">Feito para negócios como o seu.</h2></div>
        <p>Sem template pronto com a sua logo por cima. A estrutura, a mensagem e a experiência partem do seu negócio.</p>
      </Reveal>
      <div className="audience-grid">
        {audiences.map(([title, text], index) => (
          <Reveal className="audience-card" key={title}>
            <div><span>0{index + 1}</span><ArrowUpRight aria-hidden="true" /></div>
            <h3>{title}</h3><p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
