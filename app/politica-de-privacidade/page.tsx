import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Política de privacidade",
  description: "Entenda como a NexDrop trata dados enviados voluntariamente e como recursos de análise podem ser utilizados no site.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <main id="conteudo">
      <PageIntro eyebrow="Privacidade" title="Informações claras sobre seus dados." description="Esta página descreve, em linguagem simples, o funcionamento atual do site da NexDrop. Ela não substitui orientação jurídica específica." currentLabel="Política de privacidade" />
      <article className="legal-content">
        <section><h2>1. Dados enviados voluntariamente</h2><p>Este site não possui formulário de contato ativo neste momento. Ao escolher falar por WhatsApp, Instagram ou e-mail, você utiliza o serviço da respectiva plataforma e envia apenas as informações que decidir compartilhar durante a conversa.</p></section>
        <section><h2>2. Analytics e cookies</h2><p>O projeto está preparado para receber Google Analytics 4, mas o recurso só é carregado quando um identificador e a ativação correspondente são configurados. Caso seja ativado, a implementação e esta política devem ser revisadas de acordo com o uso real e com as exigências de consentimento aplicáveis.</p></section>
        <section><h2>3. Finalidade do contato</h2><p>As informações recebidas pelos canais públicos são usadas para responder solicitações, entender possíveis projetos e manter a comunicação iniciada por você.</p></section>
        <section><h2>4. Serviços de terceiros</h2><p>WhatsApp, Instagram, e-mail e eventual ferramenta de analytics possuem políticas próprias. Ao abrir um link externo, o tratamento de dados também passa a seguir as regras desse serviço.</p></section>
        <section><h2>5. Atualizações</h2><p>Esta página deve ser atualizada sempre que novas ferramentas de coleta, formulários ou integrações forem adicionados ao site.</p></section>
        <section><h2>6. Contato</h2><p>Para dúvidas sobre esta política, escreva para <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ou acesse a <Link href="/contato">página de contato</Link>.</p></section>
      </article>
    </main>
  );
}
