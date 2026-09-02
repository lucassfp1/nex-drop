import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="hero-grid" aria-hidden="true" />
      <Reveal>
        <p className="section-kicker">A próxima decisão começa online</p>
        <h2 id="final-cta-title">Seu cliente está pesquisando.<span>O que ele encontra quando chega até você?</span></h2>
        <div className="final-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Começar meu projeto <ArrowUpRight aria-hidden="true" /></a>
          <Link className="text-link" href="/contato">Ver formas de contato</Link>
        </div>
      </Reveal>
    </section>
  );
}
