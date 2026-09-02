import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
const baseMetadata = createMetadata({
  title: "Sites estratégicos para negócios de serviço",
  description:
    "A NexDrop cria sites para profissionais e negócios que querem aumentar autoridade, confiança e geração de contatos.",
  path: "/",
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexDrop — Sites estratégicos para negócios de serviço",
    template: "%s | NexDrop",
  },
  applicationName: siteConfig.name,
  category: "Design e desenvolvimento de sites",
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileCta />
      </body>
      {analyticsEnabled && gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
