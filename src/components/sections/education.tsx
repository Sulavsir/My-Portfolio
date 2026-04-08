"use client";

import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Education
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={i * 0.08}>
              <Card className="transition hover:border-white/15 hover:shadow-lg hover:shadow-black/40">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-zinc-400 ring-1 ring-white/10">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <CardTitle className="text-xl">{ed.school}</CardTitle>
                    <p className="mt-1 text-sm text-zinc-500">{ed.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-zinc-200">{ed.degree}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {ed.detail}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
