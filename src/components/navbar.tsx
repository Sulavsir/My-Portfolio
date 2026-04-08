"use client";

import { motion } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { site } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#050508]/55 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-xl",
            "supports-[backdrop-filter]:bg-[#050508]/40",
          )}
        >
          <Link
            href="#hero"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10">
              SK
            </span>
            <span className="hidden sm:inline">{site.name.split(" ")[0]}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const id = l.href.slice(1);
              const active = activeId === id;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-white",
                    active && "text-white",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10 sm:inline-flex"
            >
              <FileDown className="h-3.5 w-3.5" />
              CV
            </a>
            <Link
              href="#contact"
              className="hidden rounded-xl bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:bg-white sm:inline-flex"
            >
              Contact
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-white/[0.08] bg-[#050508]/80 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto overscroll-contain">
              <a
                href={site.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-white/[0.06]"
              >
                <FileDown className="h-4 w-4" />
                Résumé (PDF)
              </a>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-white/[0.06]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
