"use client";

import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(
  sectionIds: string[],
  options?: {
    /** CSS margin for the root intersection box. Defaults to focusing the middle of the viewport. */
    rootMargin?: string;
    /** Intersection threshold. */
    threshold?: number | number[];
  }
) {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] ?? null
  );

  const { rootMargin, threshold } = useMemo(
    () => ({
      rootMargin: options?.rootMargin ?? "-20% 0px -70% 0px",
      threshold: options?.threshold ?? [0, 0.25, 0.5, 0.75, 1],
    }),
    [options?.rootMargin, options?.threshold]
  );

  useEffect(() => {
    // Ensure an initial active section before any intersection events fire
    if (!activeId && sectionIds.length > 0) {
      setActiveId(sectionIds[0]);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most visible in the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        } else {
          // Fallback: find the closest section above the viewport top
          const above = entries
            .filter(
              (e) => (e.target as HTMLElement).getBoundingClientRect().top <= 0
            )
            .sort(
              (a, b) =>
                (b.target as HTMLElement).getBoundingClientRect().top -
                (a.target as HTMLElement).getBoundingClientRect().top
            )[0];
          if (above?.target?.id) setActiveId(above.target.id);
        }
      },
      { rootMargin, threshold }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeId;
}
