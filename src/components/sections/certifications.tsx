"use client";

import { Award } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { certifications } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Certifications
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Certifications
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/12">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-zinc-400 ring-1 ring-white/10">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">{c.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{c.issuer}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-600">
                    {c.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
