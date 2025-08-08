"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function LeftSidebar() {
  const activeId = useScrollSpy(items.map((i) => i.id));

  return (
    <aside className="hidden md:block px-6">
      <div className="sticky top-0 h-[100svh] flex flex-col justify-between py-24">
        <div>
          <h1 className="text-6xl font-extrabold text-slate-100 tracking-tight">
            Your Name
          </h1>
          <p className="mt-3 text-xl text-slate-300">Front End Engineer</p>
          <p className="mt-4 max-w-sm text-slate-400">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <nav aria-label="Section navigation" className="mt-10">
          <ul className="space-y-5 text-slate-400">
            {items.map((i) => {
              const isActive = activeId === i.id;
              return (
                <li key={i.id}>
                  <a
                    href={`#${i.id}`}
                    className="group flex items-center gap-4"
                  >
                    <span
                      className={
                        "h-px w-8 transition-colors " +
                        (isActive
                          ? "bg-slate-200"
                          : "bg-slate-700 group-hover:bg-slate-500")
                      }
                    />
                    <span
                      className={
                        "uppercase tracking-[0.15em] text-xs transition-colors " +
                        (isActive
                          ? "text-slate-200"
                          : "text-slate-400 group-hover:text-slate-200")
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

        <div className="pt-12 flex gap-5 text-slate-400">
          <a
            className="hover:text-slate-200 transition-colors text-sm"
            href="#"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            className="hover:text-slate-200 transition-colors text-sm"
            href="#"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-slate-200 transition-colors text-sm"
            href="#"
            aria-label="Twitter"
          >
            Twitter
          </a>
        </div>
      </div>
    </aside>
  );
}
