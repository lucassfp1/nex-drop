import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import adFlowImage from "@/images/AdFlow.jpg";
import advocacyImage from "@/images/site-adv.jpg";
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
        <div className="hero-showcase" aria-label="Prévia de projetos da NexDrop">
          <div className="showcase-card showcase-card-main">
            <Image src={adFlowImage} alt="Página inicial do projeto AdFlow" priority sizes="(max-width: 900px) 88vw, 46vw" placeholder="blur" />
          </div>
          <div className="showcase-card showcase-card-back">
            <Image src={advocacyImage} alt="Página conceitual de um escritório de advocacia" sizes="(max-width: 900px) 60vw, 28vw" placeholder="blur" />
          </div>
          <span className="showcase-label">Projetos existentes • Direções sob medida</span>
        </div>
      </section>
      <div className="niche-strip" aria-label="Segmentos atendidos">
        <div className="niche-track">
          {[...niches, ...niches].map((niche, index) => <span key={`${niche}-${index}`} aria-hidden={index >= niches.length}>{niche} <i aria-hidden="true" /></span>)}
        </div>
      </div>
    </>
  );
}
