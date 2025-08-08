"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Image from "next/image";

export default function Projects() {
  const activeId = useScrollSpy(["projects-top", "projects-bottom"]);
  return (
    <section className="max-w-5xl mx-auto pb-24">
      <div className="gap-10">
        <div id="projects-top" />
        <ul className="group/list space-y-2">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group/item relative grid grid-cols-1 sm:[grid-template-columns:220px_1fr] gap-6  transition-all hover:!opacity-100 group-hover/list:opacity-50 w-full p-4 cursor-pointer
              
              hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg hover:rounded-lg
              "
              onClick={() => {
                if (p.href) {
                  window.open(p.href, "_blank");
                }
              }}
            >
              <div className="aspect-[16/10] rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 bg-slate-800/40 min-h-[120px]">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={100}
                    height={100}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
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
              {/* <div className="pointer-events-none absolute -inset-y-4 z-0 hidden rounded-md transition -inset-x-6 group-hover/item:block group-hover/item:bg-slate-800/50 group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover/item:drop-shadow-lg w-full" /> */}
            </li>
          ))}
        </ul>
        <div id="projects-bottom" />
      </div>
    </section>
  );
}
