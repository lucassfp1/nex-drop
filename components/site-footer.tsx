import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="brand" aria-label="NexDrop — página inicial">
          NEXDROP<span>.</span>
        </Link>
        <p>Sites estratégicos para negócios que precisam ser levados a sério.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <nav aria-label="Links do rodapé">
          <Link href="/projetos">Projetos</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/politica-de-privacidade">Privacidade</Link>
        </nav>
        <div className="footer-social">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.email}`}>E-mail</a>
        </div>
        <p>© {new Date().getFullYear()} NexDrop. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
