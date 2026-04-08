"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

const featured = projects.find((p) => p.featured)!;
const rest = projects.filter((p) => !p.featured);

export function ProjectsSection() {
  const [p1, p2, p3, p4, ...moreRest] = rest;

  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2" delay={0.05}>
            <FeaturedCard project={featured} />
          </Reveal>

          {p1 && (
            <Reveal className="lg:col-span-5" delay={0.08}>
              <CompactCard project={p1} />
            </Reveal>
          )}
          {p2 && (
            <Reveal className="lg:col-span-5" delay={0.1}>
              <CompactCard project={p2} />
            </Reveal>
          )}
          {p3 && (
            <Reveal className="lg:col-span-6" delay={0.12}>
              <WideCard project={p3} />
            </Reveal>
          )}
          {p4 && (
            <Reveal className="lg:col-span-6" delay={0.14}>
              <WideCard project={p4} />
            </Reveal>
          )}
        </div>

        {moreRest.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {moreRest.map((p, i) => (
              <Reveal key={p.slug} delay={0.06 + i * 0.04}>
                <CompactCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl"
    >
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#07070c]/80">
        <div className="absolute left-6 top-6 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-zinc-200 ring-1 ring-white/15 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Featured
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="default">
                {s}
              </Badge>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {project.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Key impact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {project.impact.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-zinc-600">—</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
          >
            View project
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function CompactCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-lg shadow-black/30 backdrop-blur-xl transition hover:border-white/15 sm:min-h-0"
    >
      <div className="relative aspect-[16/9] w-full flex-shrink-0 overflow-hidden sm:aspect-[16/10] sm:max-h-[200px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((s) => (
            <Badge key={s} variant="muted">
              {s}
            </Badge>
          ))}
        </div>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white"
        >
          Open
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

function WideCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-lg backdrop-blur-xl transition hover:border-white/15"
    >
      <div className="grid gap-0 sm:grid-cols-[1.05fr_0.95fr] sm:items-stretch">
        <div className="relative min-h-[200px] w-full overflow-hidden sm:min-h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-center p-5 sm:py-6 sm:pr-6">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            {project.impact.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-zinc-600">—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white"
          >
            View project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
