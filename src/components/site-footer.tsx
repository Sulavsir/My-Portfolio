import Link from "next/link";

import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:px-6">
        <p className="max-w-md">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href={site.cvPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            CV
          </Link>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            GitHub
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            LinkedIn
          </Link>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            Instagram
          </Link>
          <Link
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            Facebook
          </Link>
          <Link href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
            WhatsApp
          </Link>
          <Link href={`mailto:${site.email}`} className="hover:text-zinc-300">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
