"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function SidebarNav() {
  const activeId = useScrollSpy(items.map((i) => i.id));

  return (
    <nav className="hidden md:block px-6">
      <ul className="sticky top-24 space-y-5 text-slate-400">
        {items.map((i) => {
          const isActive = activeId === i.id;
          return (
            <li key={i.id}>
              <a href={`#${i.id}`} className="group flex items-center gap-4">
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
  );
}
