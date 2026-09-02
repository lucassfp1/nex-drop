import { Breadcrumbs } from "@/components/breadcrumbs";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentLabel: string;
  currentHref?: string;
};

export function PageIntro({ eyebrow, title, description, currentLabel, currentHref }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="hero-grid" aria-hidden="true" />
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: currentLabel, href: currentHref }]} />
      <p className="section-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
