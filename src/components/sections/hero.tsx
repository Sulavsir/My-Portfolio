"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/data";

const tagline = site.tagline;

export function HeroSection() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(tagline.slice(0, i));
      if (i >= tagline.length) window.clearInterval(id);
    }, 32);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 scroll-mt-28 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md"
          >
            <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-zinc-500" />
            <span className="truncate">{site.address}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(1.75rem,5vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-white"
          >
            {site.name}
            <span className="mt-1 block text-zinc-300">{site.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            <span className="text-zinc-200">{typed}</span>
            <span className="ml-1 inline-block h-4 w-px animate-pulse bg-zinc-500 align-middle sm:h-5" />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-lg font-semibold text-white sm:text-xl">Real-time</p>
              <p className="mt-1 text-xs text-zinc-500">WebSockets</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-lg font-semibold text-white sm:text-xl">Backend</p>
              <p className="mt-1 text-xs text-zinc-500">APIs & data</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-lg font-semibold text-white sm:text-xl">Production</p>
              <p className="mt-1 text-xs text-zinc-500">Ship & operate</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Details
            </p>
            <ul className="mt-5 space-y-4 text-sm text-zinc-300">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-500" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-500" />
                <a
                  href={`tel:${site.phoneE164}`}
                  className="text-zinc-200 underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-500" />
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
