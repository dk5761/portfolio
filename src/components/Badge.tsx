import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium leading-5 whitespace-nowrap " +
        (className ?? "")
      }
    >
      {children}
    </span>
  );
}
