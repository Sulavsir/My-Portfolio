"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Skills
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-lg backdrop-blur-xl transition hover:border-white/12 sm:p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  {cat.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.03 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-zinc-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                <div
                  className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                  role="presentation"
                  aria-hidden
                >
                  <motion.div
                    className="h-full rounded-full bg-zinc-500/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
