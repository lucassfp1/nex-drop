import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function MobileCta() {
  return (
    <a className="mobile-sticky-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
      Solicitar projeto <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
