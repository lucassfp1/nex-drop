import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { getProject, projects } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { siteUrl, whatsappUrl } from "@/lib/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return createMetadata({
    title: `${project.name} — Case de site`,
    description: project.summary,
    path: `/projetos/${project.slug}`,
    image: project.image.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const projectData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${siteUrl}/projetos/${project.slug}`,
    image: `${siteUrl}${project.image.src}`,
    creator: { "@type": "Organization", name: "NexDrop", url: siteUrl },
  };

  return (
    <main id="conteudo">
      <StructuredData data={projectData} />
      <article className="project-detail">
        <div className="project-detail-head">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Projetos", href: "/projetos" }, { label: project.name }]} />
          <div className="project-detail-label"><span>{project.index}</span><p>{project.category} / {project.status}</p></div>
          <h1>{project.name}</h1>
          <p className="project-lead">{project.summary}</p>
        </div>

        <div className="project-detail-image">
          <Image src={project.image} alt={project.imageAlt} priority sizes="(max-width: 768px) 94vw, 88vw" placeholder="blur" />
        </div>

        <div className="project-detail-content">
          <section><p className="section-kicker">Visão geral</p><h2>Uma direção criada para o contexto do projeto.</h2></section>
          <div className="detail-columns">
            <div><h3>O projeto</h3><p>{project.overview}</p></div>
            <div><h3>Objetivo</h3><p>{project.objective}</p></div>
            <div><h3>Direção</h3><p>{project.direction}</p></div>
          </div>
          <ul className="tag-list" aria-label="Características do projeto">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <div className="detail-actions">
            <a className="button button-primary" href={project.externalUrl} target="_blank" rel="noreferrer">Ver projeto publicado <ArrowUpRight aria-hidden="true" /></a>
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Quero um projeto assim <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>

        <div className="project-back"><Link href="/projetos"><ArrowLeft aria-hidden="true" /> Voltar para projetos</Link></div>
      </article>
    </main>
  );
}
