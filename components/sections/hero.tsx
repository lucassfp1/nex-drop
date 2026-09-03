import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import adFlowImage from "@/images/AdFlow.jpg";
import { whatsappUrl } from "@/lib/site";

const niches = ["Advocacia", "Odontologia", "Clínicas", "Personal trainers", "Contabilidade", "Arquitetura", "Consultoria", "Negócios locais"];

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Design digital para negócios</p>
          <h1 id="hero-title">Seu negócio pode ser excelente.<span>Seu site precisa provar isso.</span></h1>
          <p className="hero-description">Criamos sites estratégicos para profissionais e empresas que querem transformar visitas em novos contatos.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Quero um novo site <ArrowUpRight aria-hidden="true" /></a>
            <Link className="button button-secondary" href="/#projetos">Ver projetos <ArrowDown aria-hidden="true" /></Link>
          </div>
          <ul className="hero-proof" aria-label="Diferenciais da NexDrop">
            <li>Design estratégico</li><li>Mobile first</li><li>SEO ready</li>
          </ul>
        </div>
        <div className="hero-showcase" role="group" aria-label="Prévia de projetos da NexDrop">
          <div className="showcase-frame">
            <div className="showcase-browser-bar" aria-hidden="true">
              <span className="browser-dots"><i /><i /><i /></span>
              <span>nexdrop / selected work</span>
              <span>01</span>
            </div>
            <div className="showcase-viewport">
              <Image
                src={adFlowImage}
                alt="Página inicial completa do projeto AdFlow"
                fill
                preload
                sizes="(max-width: 900px) 94vw, 50vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="showcase-info-bar">
            <span className="showcase-status"><i aria-hidden="true" /> Projeto em foco</span>
            <span className="showcase-project"><small>01 / Produto digital</small><strong>AdFlow</strong></span>
            <Link href="/projetos/adflow" aria-label="Conhecer o projeto AdFlow"><ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <div className="niche-strip" role="region" aria-label="Segmentos atendidos">
        <div className="niche-track">
          {[...niches, ...niches].map((niche, index) => <span key={`${niche}-${index}`} aria-hidden={index >= niches.length}>{niche} <i aria-hidden="true" /></span>)}
        </div>
      </div>
    </>
  );
}
