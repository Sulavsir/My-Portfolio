"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="relative mt-12 max-w-3xl pl-0 sm:mt-16 sm:pl-2">
          <div
            aria-hidden
            className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-zinc-600/50 via-white/12 to-white/5 sm:left-5"
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${job.period}`} delay={i * 0.05}>
                <div className="relative flex gap-4 sm:gap-6">
                  <div className="relative z-10 flex w-8 flex-shrink-0 justify-center pt-1 sm:w-10">
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-[#0a0a0f] shadow-[0_0_0_6px_rgba(255,255,255,0.04)] sm:h-10 sm:w-10 sm:rounded-2xl"
                    >
                      <Briefcase className="h-3.5 w-3.5 text-zinc-400 sm:h-4 sm:w-4" />
                    </motion.span>
                  </div>

                  <motion.article
                    className="min-w-0 flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-xl shadow-black/30 backdrop-blur-xl transition-[border,box-shadow,transform] hover:-translate-y-0.5 hover:border-white/15 sm:p-6"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {job.company}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-300">{job.role}</p>
                        {job.product && (
                          <p className="mt-1 text-xs text-zinc-500">{job.product}</p>
                        )}
                      </div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {job.period}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-400">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {job.stack && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
