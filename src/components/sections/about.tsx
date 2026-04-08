"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { about } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Bio
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal delay={0.05}>
            <motion.p
              className="text-lg leading-relaxed text-zinc-400"
              whileHover={{ color: "rgb(212 212 216)" }}
            >
              {about.body}
            </motion.p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-xl backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Focus
              </p>
              <ul className="mt-4 space-y-3">
                {about.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-zinc-300 ring-1 ring-white/10">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
