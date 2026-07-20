"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { PhotoFlip } from "@/components/effects/PhotoFlip";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { STAT_KEYS, STAT_VALUES, LINKS } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const HOVER_SPRING = { type: "spring", stiffness: 380, damping: 22 } as const;

function StatCard({ index, valueKey, value }: { index: number; valueKey: string; value: string }) {
  const label = useScrambleText(valueKey);
  return (
    <Reveal
      index={index}
      whileHover={{ y: -6, transition: HOVER_SPRING }}
      className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-5 px-4 backdrop-blur-md transition-colors duration-300 hover:border-beige2/50"
    >
      <div className="font-display text-gradient-beige text-[32px] font-bold">{value}</div>
      <div className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[.06em] text-muted">{label}</div>
    </Reveal>
  );
}

export function About() {
  const label = useScrambleText("about.label");
  const heading = useScrambleText("about.h2");
  const p1 = useScrambleText("about.p1");
  const p2a = useScrambleText("about.p2a");
  const p2b = useScrambleText("about.p2b");
  const badge = useScrambleText("about.badge");

  const gridRef = useRef<HTMLDivElement>(null);
  const photoColRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !gridRef.current || !photoColRef.current || !textColRef.current) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Pin for whichever is bigger: the extra height the text column has
        // over the photo, or a 140px floor — guarantees a visible, contained
        // effect even when both columns end up close in height.
        const photoH = photoColRef.current?.offsetHeight ?? 0;
        const textH = textColRef.current?.offsetHeight ?? 0;
        const extra = Math.max(textH - photoH, 140);

        const trigger = ScrollTrigger.create({
          trigger: gridRef.current,
          start: "top 150px",
          end: `+=${extra}`,
          pin: photoColRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: gridRef, dependencies: [reducedMotion] },
  );

  return (
    <section id="about" className="relative z-[1] mx-auto max-w-[1200px] px-10 pb-[100px] pt-[140px]">
      <Reveal className="mb-4 font-mono text-xs tracking-[.22em] text-beige2">{label}</Reveal>

      <div ref={gridRef} className="grid grid-cols-[380px_1fr] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div ref={photoColRef}>
          <Reveal index={1} className="relative mx-auto w-full max-w-[380px]">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[32px] blur-[30px]"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(216,196,160,.16), transparent 60%), radial-gradient(circle at 80% 90%, rgba(255,255,255,.09), transparent 60%)",
              }}
            />
            <div className="conic-border relative rounded-[28px] p-0.5">
              <div className="relative h-[440px] overflow-hidden rounded-[26px] bg-[#0c0b09]">
                <PhotoFlip src="/photo-dilan.jpeg" alt="Dilan Smith Aragón Ortiz" />
              </div>
            </div>
            <div className="absolute -bottom-[18px] -right-[18px] rounded-2xl border border-white/10 bg-[rgba(12,11,9,.75)] px-5 py-3 font-mono text-xs text-beige shadow-[0_16px_50px_rgba(0,0,0,.5)] backdrop-blur-xl motion-safe:animate-floaty">
              {badge}
            </div>
          </Reveal>
        </div>

        <div ref={textColRef}>
          <Reveal
            index={2}
            className="font-display m-0 mb-6 text-[clamp(32px,3.4vw,46px)] font-bold leading-[1.15] tracking-[-.02em] text-white"
          >
            {heading}
          </Reveal>
          <Reveal index={3} className="m-0 mb-[18px] max-w-[620px] text-[17px] leading-[1.75] text-text2">
            {p1}
          </Reveal>
          <Reveal index={0} className="m-0 mb-11 max-w-[620px] text-[17px] leading-[1.75] text-text2">
            {p2a}
            <a href={LINKS.githubRepo} target="_blank" rel="noreferrer" className="font-semibold hover:text-beige">
              BilleteraGestia
            </a>
            {p2b}
          </Reveal>
          <div className="grid grid-cols-4 gap-4 max-[640px]:grid-cols-2">
            {STAT_KEYS.map((key, i) => (
              <StatCard key={key} index={i} valueKey={key} value={STAT_VALUES[i] ?? ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
