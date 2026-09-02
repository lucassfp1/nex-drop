import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const staticRoutes = ["", "/projetos", "/servicos", "/contato", "/politica-de-privacidade"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path, index) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/projetos" || path === "/servicos" ? 0.8 : 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projetos/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
