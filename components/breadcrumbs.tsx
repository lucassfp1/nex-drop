import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { siteUrl } from "@/lib/site";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.href ? `${siteUrl}${item.href === "/" ? "" : item.href}` : undefined,
  }));

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: structuredItems,
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {index > 0 ? <ChevronRight aria-hidden="true" /> : null}
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
