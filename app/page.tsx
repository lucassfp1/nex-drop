import { AudiencesSection } from "@/components/sections/audiences-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ComparisonSection, ProcessSection, ServicesSection } from "@/components/sections/strategy-sections";
import { StructuredData } from "@/components/structured-data";
import { faqs } from "@/lib/content";
import { siteConfig, siteUrl } from "@/lib/site";

export default function Home() {
  const organizationData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteConfig.name, url: siteUrl, email: siteConfig.email, sameAs: [siteConfig.instagram] },
      { "@type": "ProfessionalService", "@id": `${siteUrl}/#service`, name: siteConfig.name, url: siteUrl, email: siteConfig.email, description: siteConfig.description, serviceType: ["Criação de sites", "Design de sites", "Desenvolvimento de sites", "Estratégia digital"], provider: { "@id": `${siteUrl}/#organization` } },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteConfig.name, url: siteUrl, inLanguage: "pt-BR", publisher: { "@id": `${siteUrl}/#organization` } },
    ],
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <main id="conteudo">
      <StructuredData data={organizationData} />
      <StructuredData data={faqData} />
      <Hero />
      <ProblemSection />
      <ProjectsSection />
      <AudiencesSection />
      <ComparisonSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
