"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Projects() {
  const activeId = useScrollSpy(["projects-top", "projects-bottom"]);
  return (
    <section className="max-w-5xl mx-auto pb-24">
      <div className="gap-10">
        <div id="projects-top" />
        <ul className="group/list space-y-12">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group/item relative grid grid-cols-1 sm:[grid-template-columns:220px_1fr] gap-6 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="aspect-[16/10] rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 bg-slate-800/40 min-h-[120px]" />
              <div className="z-10 space-y-2">
                <div className="flex items-center gap-3">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.title}
                  </a>
                  {p.metrics && (
                    <span className="text-xs text-slate-400">{p.metrics}</span>
                  )}
                </div>
                <p className="text-slate-300 text-sm leading-normal max-w-2xl">
                  {p.description}
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used:"
                >
                  {p.technologies.map((t) => (
                    <li key={t} className="mr-1.5 mt-2">
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:group-hover/item:block lg:group-hover/item:bg-slate-800/50 lg:group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/item:drop-shadow-lg" />
            </li>
          ))}
        </ul>
        <div id="projects-bottom" />
      </div>
    </section>
  );
}
