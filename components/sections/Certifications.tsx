"use client";

import Image from "next/image";
import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CERTIFICATIONS, LINKS } from "@/lib/content";

function CertCard({ file, title, issuer }: { file: string; title: string; issuer: string }) {
  return (
    <div className="conic-border-cert w-[230px] shrink-0 rounded-[24px] p-0.5 transition-transform duration-[350ms] hover:-translate-y-2 hover:scale-[1.02]">
      <div className="overflow-hidden rounded-[22px] bg-[#0a0908]">
        <div className="flex h-[170px] items-center justify-center bg-[#ece5d6] p-5">
          <div className="relative h-full w-full">
            <Image
              src={`/badges/${file}`}
              alt={`${title} — ${issuer}`}
              fill
              sizes="230px"
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="px-[18px] py-4">
          <div className="font-display text-[13.5px] font-semibold leading-snug text-text1">{title}</div>
          <div className="mt-1 font-mono text-[10.5px] tracking-[.08em] text-muted">{issuer.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const label = useScrambleText("certs.label");
  const heading = useScrambleText("certs.h2");
  const pdfLabel = useScrambleText("certs.pdf");
  const credlyLabel = useScrambleText("certs.credly");
  const reducedMotion = useReducedMotion();

  const track = reducedMotion ? CERTIFICATIONS : [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certs" className="relative z-[1] mx-auto max-w-[1200px] py-[100px]">
      <div className="px-10">
        <Reveal className="mb-4 font-mono text-xs tracking-[.22em] text-beige2">{label}</Reveal>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal
            index={1}
            className="font-display m-0 text-[clamp(32px,3.4vw,46px)] font-bold tracking-[-.02em] text-white"
          >
            {heading}
          </Reveal>
          <Reveal index={2} className="flex flex-wrap gap-3">
            <a
              href="/academic_transcript.pdf"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap rounded-full bg-beige px-6 py-3 text-sm font-extrabold text-ink transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(236,224,203,.4)]"
            >
              {pdfLabel}
            </a>
            <a
              href={LINKS.credly}
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap rounded-full border border-beige/30 px-6 py-3 text-sm font-bold transition-all duration-300 hover:border-beige/70 hover:shadow-[0_0_30px_rgba(216,196,160,.15)]"
            >
              {credlyLabel}
            </a>
          </Reveal>
        </div>
      </div>

      <Reveal index={3}>
        <div
          className="group [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
          style={{ overflow: reducedMotion ? "auto" : "hidden" }}
        >
          <div
            className={`flex w-max gap-5 px-10 ${reducedMotion ? "" : "motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]"}`}
          >
            {track.map((cert, i) => (
              <CertCard key={`${cert.file}-${i}`} file={cert.file} title={cert.title} issuer={cert.issuer} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
