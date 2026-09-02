# NexDrop

Site institucional da NexDrop, desenvolvido com Next.js, TypeScript, App Router e Tailwind CSS.

## Rodar localmente

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL`: URL pública final, usada em canonical, Open Graph, robots, sitemap e dados estruturados. Em produção, configure o domínio real sem barra no fim.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Measurement ID do Google Analytics 4, no formato `G-XXXXXXXXXX`.
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: use `true` somente depois de revisar a necessidade de consentimento e atualizar a política de privacidade para o uso real.
- `GOOGLE_SITE_VERIFICATION`: código de verificação HTML fornecido pelo Google Search Console.

Sem essas variáveis o site continua funcionando. Em desenvolvimento, a URL base assume `http://localhost:3000`; na Vercel, a URL de produção do projeto é usada como fallback.

## Google Analytics 4

1. Crie ou selecione uma propriedade GA4.
2. Copie o Measurement ID.
3. Adicione o valor em `NEXT_PUBLIC_GA_MEASUREMENT_ID` no ambiente da Vercel.
4. Depois de revisar consentimento e política de privacidade, defina `NEXT_PUBLIC_ENABLE_ANALYTICS=true`.
5. Faça um novo deploy para aplicar variáveis públicas ao bundle.

O componente de analytics não é renderizado quando a configuração está ausente ou desativada.

## Google Search Console

1. Acesse o Google Search Console e adicione uma propriedade para o domínio publicado.
2. Para propriedade de domínio, faça a verificação por DNS conforme a instrução fornecida pelo Google. Para prefixo de URL, também é possível usar a tag HTML.
3. Se usar tag HTML, copie apenas o valor do campo `content` e configure `GOOGLE_SITE_VERIFICATION` na Vercel.
4. Publique novamente e confirme a verificação na conta proprietária.
5. Envie o sitemap pela área **Sitemaps** usando a URL `https://SEU-DOMINIO/sitemap.xml`.

A configuração do projeto não publica o site nem solicita indexação automaticamente. Essas etapas dependem do domínio e da conta do proprietário.

## Verificação antes do deploy

```bash
npm run lint
npm run build
```

O projeto segue a estrutura padrão do Next.js e está preparado para deploy na Vercel sem adaptador adicional.
