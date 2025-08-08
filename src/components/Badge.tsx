import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full bg-emerald-900/40 text-emerald-200 border border-emerald-600/30 px-2.5 py-1 text-[11px] font-medium tracking-wide whitespace-nowrap " +
        (className ?? "")
      }
    >
      {children}
    </span>
  );
}
