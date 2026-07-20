"use client";

import { useState } from "react";
import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { SKILLS } from "@/lib/content";

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function SkillCard({
  index,
  name,
  glyph,
  iconUrl,
  color,
}: {
  index: number;
  name: string;
  glyph: string;
  iconUrl: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal
      index={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-3.5 rounded-[20px] border bg-white/[0.03] px-3 py-7 backdrop-blur-md transition-all duration-[350ms]"
      style={{
        borderColor: hovered ? hexToRgba(color, 0.55) : "rgba(255,255,255,.07)",
        boxShadow: hovered
          ? `0 18px 50px rgba(0,0,0,.55), 0 0 34px ${hexToRgba(color, 0.28)}`
          : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      <div
        className="font-display flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border text-[17px] font-bold transition-colors duration-[350ms]"
        style={{
          borderColor: hovered ? hexToRgba(color, 0.5) : "rgba(236,224,203,.14)",
          background: hovered ? hexToRgba(color, 0.14) : "rgba(236,224,203,.07)",
          color: hovered ? color : "#ece0cb",
        }}
      >
        {failed ? (
          glyph
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconUrl}
            alt=""
            width={26}
            height={26}
            className="block h-[26px] w-[26px]"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div
        className="text-center text-[13px] font-bold tracking-[.02em] transition-colors duration-[350ms]"
        style={{ color: hovered ? color : "#d6d2c9" }}
      >
        {name}
      </div>
    </Reveal>
  );
}

export function Skills() {
  const label = useScrambleText("skills.label");
  const heading = useScrambleText("skills.h2");
  const desc = useScrambleText("skills.p");

  return (
    <section id="skills" className="relative z-[1] mx-auto max-w-[1200px] px-10 py-[100px]">
      <Reveal className="mb-4 font-mono text-xs tracking-[.22em] text-beige2">{label}</Reveal>
      <Reveal
        index={1}
        className="font-display m-0 mb-3.5 text-[clamp(32px,3.4vw,46px)] font-bold tracking-[-.02em] text-white"
      >
        {heading}
      </Reveal>
      <Reveal index={2} className="m-0 mb-14 max-w-[560px] text-base text-text2">
        {desc}
      </Reveal>
      <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-4 max-[640px]:grid-cols-2">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.slug} index={i} name={skill.name} glyph={skill.glyph} iconUrl={skill.iconUrl} color={skill.color} />
        ))}
      </div>
    </section>
  );
}
