import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "Projetos de sites e experiências digitais",
  description: "Conheça projetos publicados e estudos conceituais da NexDrop para produtos, serviços, beleza, advocacia e gastronomia.",
  path: "/projetos",
});

export default function ProjectsPage() {
  return (
    <main id="conteudo">
      <PageIntro
        eyebrow="Portfólio NexDrop"
        title="Projetos feitos para comunicar valor antes da primeira conversa."
        description="Uma seleção de páginas publicadas e estudos conceituais. Cada projeto é identificado com clareza — sem apresentar conceitos como clientes reais."
        currentLabel="Projetos"
      />
      <section className="section internal-projects" aria-label="Lista de projetos">
        {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </section>
    </main>
  );
}
