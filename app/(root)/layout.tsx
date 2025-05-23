import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404Riyan – Tech Enthusiast & Fullstack Developer",
  description:
    "Riyan adalah Web Developer yang fokus pada pengembangan AI, Web3, dan SaaS. Lihat proyek inovatif seperti Form2WA dan AI Note Summarizer.",
  keywords: [
    "Riyan",
    "404Riyan",
    "Fullstack Developer",
    "Web3",
    "AI Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "OpenRouter",
    "Form2WA",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Riyadhul Jinan Nasution", url: "https://404ryan.com" }],
  creator: "Riyan",
  metadataBase: new URL("https://404ryan.com"),
  openGraph: {
    title: "404Riyan – Tech Enthusiast & Fullstack Developer",
    description:
      "Web developer yang menjelajahi AI, Web3, dan SaaS. Telusuri proyek-proyek kreatif Riyan seperti Form2WA dan AI Note Summarizer.",
    url: "https://404ryan.com",
    siteName: "404Riyan",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404Riyan – Tech Enthusiast & Fullstack Developer",
    description:
      "Eksplorasi proyek AI dan Web3 bersama Riyan, seorang pengembang fullstack muda dengan semangat teknologi.",
    creator: "@404riyan", // jika punya Twitter
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
