"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { experiences } from "@/lib/data";

export default function Experience() {
  const activeId = useScrollSpy(["experience-top", "experience-bottom"]);
  return (
    <section className="max-w-5xl mx-auto">
      <div className=" gap-10">
        <div id="experience-top" />
        <ol className="group/list space-y-12">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.start}`}
              className="group/item relative grid grid-cols-1 sm:[grid-template-columns:140px_1fr] gap-6 pb-1 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transition-all"
            >
              <div className="z-10 text-[11px] font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap">
                {exp.start} {exp.end ? `— ${exp.end}` : ""}
              </div>
              <div className="z-10 space-y-2">
                <h3 className="text-slate-200 font-medium leading-snug text-base">
                  <span className="inline-flex items-baseline">
                    {exp.title} ·{" "}
                    <span className="inline-block ml-1">{exp.company}</span>
                  </span>
                </h3>
                <p className="text-slate-300 text-sm leading-normal max-w-2xl">
                  {exp.description}
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {exp.technologies.map((t) => (
                    <li key={t} className="mr-1.5 mt-2">
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:group-hover/item:block lg:group-hover/item:bg-slate-800/50 lg:group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/item:drop-shadow-lg" />
            </li>
          ))}
        </ol>
        <div id="experience-bottom" />
      </div>
    </section>
  );
}
