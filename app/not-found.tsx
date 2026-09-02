import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página solicitada não existe ou mudou de endereço.",
};

export default function NotFound() {
  return (
    <main id="conteudo" className="not-found-page">
      <p className="not-found-code" aria-hidden="true">404</p>
      <p className="section-kicker">Esta rota saiu do mapa</p>
      <h1>A página que você procura não está aqui.</h1>
      <p>Você pode voltar ao início, explorar os projetos ou conversar com a NexDrop.</p>
      <div className="hero-actions"><Link className="button button-primary" href="/"><ArrowLeft aria-hidden="true" /> Voltar ao início</Link><Link className="button button-secondary" href="/projetos">Ver projetos <ArrowRight aria-hidden="true" /></Link><Link className="text-link" href="/contato">Ir para contato</Link></div>
    </main>
  );
}
