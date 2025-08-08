"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { personal } from "@/lib/data";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function LeftSidebar() {
  const activeId = useScrollSpy(items.map((i) => i.id));

  return (
    <aside className="block px-6">
      <div className="lg:sticky lg:top-0 lg:h-[100svh] flex flex-col justify-between py-12 lg:py-24">
        <div>
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight">
              {personal.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-slate-300">
              {personal.role}
            </p>
            <p className="mt-4 max-w-sm text-slate-400">{personal.intro}</p>
          </div>

          <nav
            aria-label="Section navigation"
            className="mt-10 hidden lg:block"
          >
            <ul className="space-y-5 text-slate-400">
              {items.map((i) => {
                const isActive = activeId === i.id;
                return (
                  <li key={i.id} className="m-0">
                    <a
                      href={`#${i.id}`}
                      className="group flex items-center py-2"
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span
                        className={
                          "nav-indicator mr-4 h-px transition-all motion-reduce:transition-none " +
                          (isActive
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-700 group-hover:w-16 group-focus-visible:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200")
                        }
                      />
                      <span
                        className={
                          "nav-text text-xs font-bold uppercase tracking-widest transition-colors " +
                          (isActive
                            ? "text-slate-200"
                            : "text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200")
                        }
                      >
                        {i.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="pt-8 lg:pt-12 flex gap-5 text-slate-400">
          {personal.socials.map((s) => (
            <a
              key={s.label}
              className="hover:text-slate-200 transition-colors text-sm"
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
