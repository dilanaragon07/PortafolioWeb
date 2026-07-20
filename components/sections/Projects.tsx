"use client";

import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PROJECT_TAGS, LINKS } from "@/lib/content";

export function Projects() {
  const label = useScrambleText("work.label");
  const heading = useScrambleText("work.h2");
  const videoBadge = useScrambleText("proj.video");
  const desc = useScrambleText("proj.desc");
  const demoLabel = useScrambleText("proj.demo");
  const moreH = useScrambleText("more.h");
  const moreP = useScrambleText("more.p");
  const moreCta = useScrambleText("more.cta");

  return (
    <section id="work" className="relative z-[1] mx-auto max-w-[1200px] px-10 py-[100px]">
      <Reveal className="mb-4 font-mono text-xs tracking-[.22em] text-beige2">{label}</Reveal>
      <Reveal
        index={1}
        className="font-display m-0 mb-14 text-[clamp(32px,3.4vw,46px)] font-bold tracking-[-.02em] text-white"
      >
        {heading}
      </Reveal>

      <Reveal
        index={2}
        className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-colors duration-[400ms] hover:border-beige/35"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-[120px] h-[480px] w-[480px] rounded-full blur-[40px]"
          style={{ background: "radial-gradient(circle, rgba(216,196,160,.09), transparent 65%)" }}
        />
        <div className="grid grid-cols-[1.15fr_1fr] items-stretch max-lg:grid-cols-1">
          <div className="relative m-7 min-h-[460px] overflow-hidden rounded-[18px] border border-white/[0.08] max-lg:mb-0">
            <MediaPlaceholder label="BilleteraGestia — dashboard screenshot or video still" />
            <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
              <span className="rounded-full border border-white/[0.12] bg-[rgba(5,5,5,.7)] px-3.5 py-1.5 font-mono text-[11px] tracking-[.08em] text-beige backdrop-blur-md">
                {videoBadge}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center px-12 py-14 max-lg:px-8 max-lg:py-10">
            <div className="mb-3.5 font-mono text-[11.5px] tracking-[.18em] text-muted">ERP · FINTECH · 2025</div>
            <h3 className="font-display m-0 mb-4 text-[34px] font-bold tracking-[-.01em] text-white">
              BilleteraGestia
            </h3>
            <p className="m-0 mb-7 text-base leading-[1.7] text-text2">{desc}</p>
            <div className="mb-9 flex flex-wrap gap-2">
              {PROJECT_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-beige/[0.16] bg-beige/[0.06] px-3.5 py-1.5 font-mono text-[11.5px] text-beige2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3.5 max-[480px]:flex-col">
              <a
                href={LINKS.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-beige px-[26px] py-[13px] text-sm font-extrabold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(236,224,203,.4)]"
              >
                GitHub ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-[26px] py-[13px] text-sm font-semibold text-text1 transition-colors duration-300 hover:border-beige/50 hover:text-white"
              >
                {demoLabel}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal
        index={3}
        className="mt-5 flex flex-wrap items-center justify-between gap-5 rounded-[22px] border border-dashed border-white/[0.12] px-8 py-7"
      >
        <div>
          <div className="font-display text-lg font-semibold text-[#d6d2c9]">{moreH}</div>
          <div className="mt-1 text-sm text-muted">{moreP}</div>
        </div>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap text-sm font-bold hover:text-beige"
        >
          {moreCta}
        </a>
      </Reveal>
    </section>
  );
}
