"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useScrambleText } from "@/hooks/useScramble";
import { Reveal } from "@/components/effects/Reveal";
import { PROJECT_TAGS, LINKS } from "@/lib/content";

type Shot = "dashboard" | "login";

export function Projects() {
  const [shot, setShot] = useState<Shot>("dashboard");

  const label = useScrambleText("work.label");
  const heading = useScrambleText("work.h2");
  const dashboardBadge = useScrambleText("proj.badge.dashboard");
  const loginBadge = useScrambleText("proj.badge.login");
  const dashboardTab = useScrambleText("proj.tab.dashboard");
  const loginTab = useScrambleText("proj.tab.login");
  const dashboardAlt = useScrambleText("proj.imgAlt");
  const loginAlt = useScrambleText("proj.imgAltLogin");
  const desc = useScrambleText("proj.desc");
  const demoLabel = useScrambleText("proj.demo");
  const moreH = useScrambleText("more.h");
  const moreP = useScrambleText("more.p");
  const moreCta = useScrambleText("more.cta");

  const shots: Record<Shot, { src: string; alt: string; badge: string; tab: string }> = {
    dashboard: { src: "/projects/billeteragestia-dashboard.png", alt: dashboardAlt, badge: dashboardBadge, tab: dashboardTab },
    login: { src: "/projects/billeteragestia-login.png", alt: loginAlt, badge: loginBadge, tab: loginTab },
  };
  const active = shots[shot];

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
          <div className="relative m-7 min-h-[460px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0c0b09] max-lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={shot}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
              <span className="rounded-full border border-white/[0.12] bg-[rgba(5,5,5,.7)] px-3.5 py-1.5 font-mono text-[11px] tracking-[.08em] text-beige backdrop-blur-md">
                {active.badge}
              </span>
            </div>
            <div className="absolute right-4 top-4 flex gap-1.5 rounded-full border border-white/[0.12] bg-[rgba(5,5,5,.7)] p-1 backdrop-blur-md">
              {(Object.keys(shots) as Shot[]).map((key) => (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => setShot(key)}
                  aria-pressed={shot === key}
                  whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                  whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 500, damping: 30 } }}
                  className={`rounded-full px-3 py-1 font-mono text-[11px] tracking-[.06em] transition-colors duration-200 ${
                    shot === key ? "bg-beige text-ink" : "text-muted hover:text-beige"
                  }`}
                >
                  {shots[key].tab}
                </motion.button>
              ))}
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
              <motion.a
                href={LINKS.githubRepo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 380, damping: 22 } }}
                whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 500, damping: 30 } }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-beige px-[26px] py-[13px] text-sm font-extrabold text-ink transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(236,224,203,.4)]"
              >
                GitHub ↗
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 380, damping: 22 } }}
                whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 500, damping: 30 } }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-[26px] py-[13px] text-sm font-semibold text-text1 transition-colors duration-300 hover:border-beige/50 hover:text-white"
              >
                {demoLabel}
              </motion.a>
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
