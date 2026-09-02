import { projects } from "@/lib/content";
import { siteConfig, siteUrl } from "@/lib/site";

export function GET() {
  const projectLines = projects
    .map((project) => `- ${project.name} (${project.status}): ${siteUrl}/projetos/${project.slug}`)
    .join("\n");

  const content = `# NexDrop

NexDrop é um estúdio digital que cria sites estratégicos para profissionais e negócios de serviço.

## Serviços
- Estratégia e arquitetura de conteúdo para sites
- Design responsivo e direção visual
- Desenvolvimento de sites
- Estrutura técnica para SEO
- Integrações com WhatsApp, formulários e redes sociais quando necessárias

## Públicos atendidos
Advogados, dentistas, clínicas, personal trainers, contadores, arquitetos, consultores, negócios locais e outros prestadores de serviço.

## Páginas principais
- Início: ${siteUrl}
- Projetos: ${siteUrl}/projetos
- Serviços: ${siteUrl}/servicos
- Contato: ${siteUrl}/contato
- Política de privacidade: ${siteUrl}/politica-de-privacidade

## Projetos públicos
${projectLines}

## Contato público
- WhatsApp: https://wa.me/${siteConfig.whatsappNumber}
- Instagram: ${siteConfig.instagram}
- E-mail: mailto:${siteConfig.email}

Este arquivo é complementar e experimental. Ele não substitui robots.txt, sitemap.xml, dados estruturados ou SEO tradicional.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
