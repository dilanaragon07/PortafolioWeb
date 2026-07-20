"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { ContributionGraph } from "@/components/effects/ContributionGraph";
import { languageColor } from "@/lib/languageColors";
import { GH_STAT_KEYS, LINKS } from "@/lib/content";
import type { GithubData } from "@/lib/github";

function GhStat({ index, labelKey, value }: { index: number; labelKey: string; value: string }) {
  const label = useScrambleText(labelKey);
  return (
    <div className="rounded-[18px] border border-white/[0.07] bg-white/[0.025] px-[22px] py-5">
      <div className="font-display text-beige text-[26px] font-bold">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[.06em] text-muted">{label}</div>
    </div>
  );
}

const BEIGE_SHADES = ["#ece0cb", "#b8ab93", "#8a8172", "#5c574d", "#38352f"];

function LanguageBarSegment({ name, pct, shade }: { name: string; pct: number; shade: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={`${name} — ${pct}%`}
      style={{ width: `${pct}%`, background: hovered ? languageColor(name) : shade }}
      className="cursor-default transition-colors duration-200"
    />
  );
}

function LanguageEntry({ name, pct, shade }: { name: string; pct: number; shade: string }) {
  const [hovered, setHovered] = useState(false);
  const color = hovered ? languageColor(name) : shade;
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex cursor-default items-center gap-1.5 rounded-full px-1.5 py-0.5 transition-colors duration-200"
      style={{ color, backgroundColor: hovered ? `${languageColor(name)}1a` : "transparent" }}
    >
      <span style={{ color }}>●</span> {name} <span className="text-[10px] text-muted">{pct}%</span>
    </span>
  );
}

export function GitHubActivityClient({ data }: { data: GithubData | null }) {
  const heading = useScrambleText("gh.h2");
  const sub = useScrambleText("gh.sub");
  const openProfile = useScrambleText("gh.open");
  const langsLabel = useScrambleText("gh.langs");

  const login = data?.login ?? "dilanaragon07";
  const profileUrl = data?.profileUrl ?? LINKS.github;
  const languages = data?.languages?.length ? data.languages : null;

  const statValues = [
    data ? String(data.contributionsLastYear) : "—",
    data ? String(data.publicRepos) : "—",
    data ? String(data.totalStars) : "—",
    data ? `${data.longestStreakDays}d` : "—",
  ];

  return (
    <section id="github" className="relative z-[1] mx-auto max-w-[1200px] px-10 py-[100px]">
      <Reveal className="mb-4 font-mono text-xs tracking-[.22em] text-beige2">05 — GITHUB</Reveal>
      <Reveal
        index={1}
        className="font-display m-0 mb-14 text-[clamp(32px,3.4vw,46px)] font-bold tracking-[-.02em] text-white"
      >
        {heading}
      </Reveal>

      <Reveal
        index={2}
        className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] px-11 py-10 backdrop-blur-xl max-[640px]:px-6 max-[640px]:py-7"
      >
        <div className="mb-7 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            {data?.avatarUrl ? (
              <Image
                src={data.avatarUrl}
                alt={`@${login}`}
                width={44}
                height={44}
                className="rounded-full border border-beige/20"
              />
            ) : (
              <div className="font-display flex h-11 w-11 items-center justify-center rounded-full border border-beige/20 bg-beige/[0.08] font-bold text-beige">
                DA
              </div>
            )}
            <div>
              <div className="font-display text-[16px] font-semibold text-text1">@{login}</div>
              <div className="font-mono text-[11.5px] tracking-[.06em] text-muted">{sub}</div>
            </div>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap text-[13.5px] font-bold hover:text-beige"
          >
            {openProfile}
          </a>
        </div>

        <ContributionGraph calendar={data?.calendar} />

        <div className="mt-8 grid grid-cols-4 gap-4 max-[640px]:grid-cols-2">
          {GH_STAT_KEYS.map((key, i) => (
            <GhStat key={key} index={i} labelKey={key} value={statValues[i] ?? "—"} />
          ))}
        </div>

        {languages && (
          <>
            <div className="mt-6 flex items-center gap-2.5 font-mono text-[11px] text-muted">
              <span>{langsLabel}</span>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full">
                {languages.map((lang, i) => (
                  <LanguageBarSegment
                    key={lang.name}
                    name={lang.name}
                    pct={lang.pct}
                    shade={BEIGE_SHADES[i] ?? BEIGE_SHADES[BEIGE_SHADES.length - 1]!}
                  />
                ))}
              </div>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-x-1 gap-y-1.5 font-mono text-[11px] text-muted">
              {languages.map((lang, i) => (
                <LanguageEntry
                  key={lang.name}
                  name={lang.name}
                  pct={lang.pct}
                  shade={BEIGE_SHADES[i] ?? BEIGE_SHADES[BEIGE_SHADES.length - 1]!}
                />
              ))}
            </div>
          </>
        )}
      </Reveal>
    </section>
  );
}
