import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import { SiteShell } from "@/components/site-shell";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sulav Karki — Full Stack Engineer | Portfolio",
    template: "%s | Sulav Karki",
  },
  description:
    "Sulav Karki — full stack engineer portfolio. Real-time systems, MERN stack, WebSockets, PostgreSQL, APIs, and production web apps. Based in Bhaktapur, Nepal. Open to collaborate.",
  keywords: [
    "Sulav Karki",
    "Sulav Karki portfolio",
    "Sulav Karki developer",
    "Sulav Karki Nepal",
    "Sulav Karki full stack",
    "full stack engineer Nepal",
    "Bhaktapur developer",
    "MERN stack",
    "WebSockets",
    "real-time systems",
    "Next.js",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Sulav Karki", url: siteUrl }],
  creator: "Sulav Karki",
  publisher: "Sulav Karki",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sulav Karki — Full Stack Engineer | Portfolio",
    description:
      "Full stack engineer portfolio: real-time systems, APIs, and production web applications. Sulav Karki, Nepal.",
    url: siteUrl,
    siteName: "Sulav Karki",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulav Karki — Full Stack Engineer",
    description:
      "Portfolio: full stack engineer, real-time systems, MERN, PostgreSQL. Sulav Karki.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-full overflow-x-hidden bg-[#050508] font-sans text-zinc-100 antialiased`}
      >
        <JsonLd />
        <PageBackground />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
