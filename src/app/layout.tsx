import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { PageBackground } from "@/components/page-background";
import { SiteShell } from "@/components/site-shell";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sulavkarki.dev"),
  title: {
    default: "Sulav Karki — Full Stack Engineer",
    template: "%s | Sulav Karki",
  },
  description:
    "Full stack engineer building scalable real-time systems and production-grade web applications. Backend-heavy expertise with MERN, WebSockets, PostgreSQL, and payments.",
  keywords: [
    "Sulav Karki",
    "full stack engineer",
    "real-time systems",
    "WebSockets",
    "MERN",
    "PostgreSQL",
    "Prisma",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Sulav Karki" }],
  openGraph: {
    title: "Sulav Karki — Full Stack Engineer",
    description:
      "Scalable real-time systems, production APIs, and polished product surfaces.",
    url: "https://sulavkarki.dev",
    siteName: "Sulav Karki",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulav Karki — Full Stack Engineer",
    description:
      "Scalable real-time systems, production APIs, and polished product surfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <PageBackground />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
