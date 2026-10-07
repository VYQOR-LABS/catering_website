export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-[var(--brand-on-dark)] ${className}`}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-stroke)] font-serif text-sm">
        B
      </span>
      <div className="flex flex-col leading-tight">
        <span className="font-serif text-base tracking-wide">BUZZIT</span>
        <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-[var(--brand-muted)]">
          Event &amp; Catering
        </span>
      </div>
    </div>
  );
}
