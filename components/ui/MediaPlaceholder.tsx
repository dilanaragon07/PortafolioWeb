type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Elegant stand-in for a real screenshot/video/badge asset. Swap the parent
 * for a <Image>/<video> once the real file exists — see CLAUDE_ENV_REPORT.md.
 */
export function MediaPlaceholder({ label, className = "" }: MediaPlaceholderProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0c0b09] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 25% 20%, rgba(236,224,203,.10), transparent 55%), radial-gradient(circle at 80% 85%, rgba(255,255,255,.06), transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="bg-grid-mask absolute inset-0 opacity-40"
      />
      <span className="relative px-6 text-center font-mono text-[11px] tracking-[.14em] text-muted">
        {label}
      </span>
    </div>
  );
}
