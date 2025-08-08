"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Projects() {
  const activeId = useScrollSpy(["projects-top", "projects-bottom"]);
  return (
    <section className="max-w-5xl mx-auto pb-24">
      <div className=" gap-10">
        <div id="projects-top" />
        <ul className="space-y-12">
          {projects.map((p) => (
            <li
              key={p.title}
              className="grid grid-cols-1 sm:[grid-template-columns:220px_1fr] gap-6"
            >
              <div className="aspect-[16/10] rounded-lg bg-slate-800/40 border border-slate-700/40 min-h-[120px]" />
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <a
                    className="text-slate-100 font-semibold hover:underline"
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
                <p className="text-slate-300 text-sm leading-7 max-w-2xl">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.technologies.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div id="projects-bottom" />
      </div>
    </section>
  );
}
