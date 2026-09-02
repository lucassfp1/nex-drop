import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card${featured ? " is-featured" : ""}`}>
      <Link href={`/projetos/${project.slug}`} className="project-image" aria-label={`Ver case ${project.name}`}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          sizes={featured ? "(max-width: 768px) 94vw, 72vw" : "(max-width: 768px) 94vw, 46vw"}
          placeholder="blur"
        />
        <span>Ver case</span>
      </Link>
      <div className="project-meta">
        <p><span>{project.index}</span> / {project.category}</p>
        <p>{project.status}</p>
      </div>
      <div className="project-copy">
        <div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <Link href={`/projetos/${project.slug}`} aria-label={`Ler detalhes do projeto ${project.name}`}>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <ul className="tag-list" aria-label={`Entregas do projeto ${project.name}`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  );
}
