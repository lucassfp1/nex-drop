import Link from "next/link";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <Reveal className="section-heading split-heading">
        <div><p className="section-kicker">Perguntas frequentes</p><h2 id="faq-title">O que você precisa saber antes de começar.</h2></div>
        <p>Ainda ficou com alguma dúvida? <Link href="/contato">Converse com a NexDrop</Link>.</p>
      </Reveal>
      <Reveal className="faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.question}>
            <summary><span>0{index + 1}</span><strong>{faq.question}</strong><Plus aria-hidden="true" /></summary>
            <div className="faq-answer"><p>{faq.answer}</p></div>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
