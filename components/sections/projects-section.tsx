import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projetos" aria-labelledby="projects-title">
      <Reveal className="section-heading projects-heading">
        <div><p className="section-kicker">Selected work</p><h2 id="projects-title">Projetos selecionados</h2></div>
        <Link href="/projetos" className="text-link">Ver todos os projetos <ArrowRight aria-hidden="true" /></Link>
      </Reveal>
      <div className="projects-list">
        {projects.slice(0, 3).map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} featured={index === 0} minimal /></Reveal>)}
      </div>
    </section>
  );
}
