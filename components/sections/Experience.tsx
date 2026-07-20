"use client";

import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { TIMELINE } from "@/lib/content";

function TimelineItem({ index, periodKey, roleKey, orgKey, descKey }: { index: number; periodKey: string; roleKey: string; orgKey: string; descKey: string }) {
  const period = useScrambleText(periodKey);
  const role = useScrambleText(roleKey);
  const org = useScrambleText(orgKey);
  const desc = useScrambleText(descKey);

  return (
    <Reveal index={index} className="relative pb-[52px] last:pb-0">
      <div className="absolute -left-10 top-1 h-[13px] w-[13px] rounded-full border-2 border-beige bg-[#0a0908] shadow-[0_0_16px_rgba(236,224,203,.5)]" />
      <div className="mb-2 font-mono text-[11.5px] tracking-[.14em] text-muted">{period}</div>
      <div className="font-display text-[22px] font-semibold text-text1">{role}</div>
      <div className="my-1 text-[14.5px] font-bold text-beige2">{org}</div>
      <p className="m-0 max-w-[640px] text-[15.5px] leading-[1.7] text-text2">{desc}</p>
    </Reveal>
  );
}

export function Experience() {
  const label = useScrambleText("exp.label");
  const heading = useScrambleText("exp.h2");

  return (
    <section id="experience" className="relative z-[1] mx-auto max-w-[900px] px-10 py-[100px]">
      <Reveal className="mb-4 font-mono text-xs tracking-[.22em] text-beige2">{label}</Reveal>
      <Reveal
        index={1}
        className="font-display m-0 mb-16 text-[clamp(32px,3.4vw,46px)] font-bold tracking-[-.02em] text-white"
      >
        {heading}
      </Reveal>
      <div className="relative pl-11">
        <div
          aria-hidden="true"
          className="absolute bottom-1.5 left-2.5 top-1.5 w-px"
          style={{ background: "linear-gradient(180deg, #ece0cb, rgba(236,224,203,.25), transparent)" }}
        />
        {TIMELINE.map((entry, i) => (
          <TimelineItem
            key={entry.period}
            index={i}
            periodKey={entry.period}
            roleKey={entry.role}
            orgKey={entry.org}
            descKey={entry.desc}
          />
        ))}
      </div>
    </section>
  );
}
