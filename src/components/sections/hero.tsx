"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileDown, Mail, MapPin, Phone, UsersRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/data";

const tagline = site.tagline;

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  const [typed, setTyped] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setTyped(tagline);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(tagline.slice(0, i));
      if (i >= tagline.length) window.clearInterval(id);
    }, 32);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      className="relative z-10 scroll-mt-28 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
              <span className="truncate">{site.address}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-w-xl items-start gap-3 border-l border-white/[0.12] pl-3.5 text-[13px] leading-relaxed text-zinc-500 sm:text-sm"
            >
              <UsersRound
                className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600"
                aria-hidden
              />
              <span className="text-zinc-400">{site.collaboration}</span>
            </motion.p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(1.75rem,5vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-white"
          >
            {site.name}
            <span className="mt-1 block bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              {site.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            <span className="text-zinc-200">{typed}</span>
            {!reduceMotion && (
              <span className="ml-1 inline-block h-4 w-px animate-pulse bg-zinc-500 align-middle sm:h-5" />
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#projects">
                Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link href="#contact">Contact</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <a
                href={site.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="h-4 w-4" />
                Résumé
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {(
              [
                ["Real-time", "WebSockets"],
                ["Backend", "APIs & data"],
                ["Production", "Ship & operate"],
              ] as const
            ).map(([title, sub]) => (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-black/20 transition-[border-color,box-shadow] hover:border-white/20"
              >
                <p className="text-lg font-semibold text-white sm:text-xl">{title}</p>
                <p className="mt-1 text-xs text-zinc-500">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          <motion.div
            className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent blur-2xl"
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.5, 0.85, 0.5], scale: [1, 1.02, 1] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Details
            </p>
            <ul className="mt-5 space-y-4 text-sm text-zinc-300">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                <a
                  href={`tel:${site.phoneE164}`}
                  className="text-zinc-200 underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-zinc-200 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                WhatsApp
              </Link>
              <a
                href={site.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white transition hover:border-white/25 hover:bg-white/10"
              >
                <FileDown className="h-3.5 w-3.5" />
                CV (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
