type SectionTitleProps = {
  children: React.ReactNode;
  active?: boolean;
};

export default function SectionTitle({ children, active }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={
          "h-px transition-all w-10 " +
          (active ? "bg-slate-200" : "bg-slate-700")
        }
      />
      <h2
        className={
          "text-[11px] tracking-[0.15em] uppercase transition-colors " +
          (active ? "text-slate-200" : "text-slate-400")
        }
      >
        {children}
      </h2>
    </div>
  );
}
