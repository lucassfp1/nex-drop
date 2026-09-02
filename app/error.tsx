"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="conteudo" className="not-found-page">
      <p className="section-kicker">Algo não carregou como esperado</p>
      <h1>Não conseguimos abrir esta página agora.</h1>
      <p>Tente novamente. Se o problema continuar, volte para a página inicial.</p>
      <div className="hero-actions"><button className="button button-primary" type="button" onClick={reset}><RotateCcw aria-hidden="true" /> Tentar novamente</button><Link className="button button-secondary" href="/">Voltar ao início</Link></div>
    </main>
  );
}
