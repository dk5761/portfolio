"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { experiences } from "@/lib/data";

export default function Experience() {
  const activeId = useScrollSpy(["experience-top", "experience-bottom"]);
  return (
    <section className="max-w-5xl mx-auto">
      <div id="experience-top" />
      <div className=" gap-10">
        <ol className="space-y-12">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.start}`}
              className="grid grid-cols-1 sm:[grid-template-columns:140px_1fr] gap-6"
            >
              <div className="text-[11px] text-slate-400 tracking-wide uppercase whitespace-nowrap">
                {exp.start} {exp.end ? `— ${exp.end}` : ""}
              </div>
              <div className="space-y-2">
                <h3 className="text-slate-100 font-semibold text-base">
                  {exp.title} · {exp.company}
                </h3>
                <p className="text-slate-300 text-sm leading-7 max-w-2xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.technologies.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div id="experience-bottom" />
    </section>
  );
}
