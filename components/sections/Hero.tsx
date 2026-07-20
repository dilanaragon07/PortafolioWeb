"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useScramble, useScrambleText } from "@/hooks/useScramble";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroSceneLoader } from "@/components/effects/HeroSceneLoader";
import { ROLES } from "@/lib/content";

const ROLE_CYCLE_MS = 2600;
const ROLE_FADE_MS = 360;

function RoleText() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES[lang].length);
        setVisible(true);
      }, ROLE_FADE_MS);
    }, ROLE_CYCLE_MS);
    return () => window.clearInterval(id);
  }, [lang]);

  const target = ROLES[lang][index % ROLES[lang].length] ?? ROLES[lang][0] ?? "";
  const display = useScramble(target, lang);

  return (
    <span
      className="inline-block text-[#d6d2c9] transition-all duration-[350ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
    >
      {display}
    </span>
  );
}

export function Hero() {
  const innerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [showScrollHint, setShowScrollHint] = useState(true);

  const badge = useScrambleText("hero.badge");
  const tagline = useScrambleText("hero.tagline");
  const cta1 = useScrambleText("hero.cta1");
  const cta2 = useScrambleText("hero.cta2");
  const scrollLabel = useScrambleText("hero.scroll");

  useEffect(() => {
    const fitHint = () => setShowScrollHint(window.innerHeight >= 700);
    fitHint();
    window.addEventListener("resize", fitHint);
    return () => window.removeEventListener("resize", fitHint);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const strength = 1;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${dx * -18 * strength}px, ${dy * -12 * strength}px)`;
      }
      if (orb1Ref.current) orb1Ref.current.style.marginLeft = `${dx * 30 * strength}px`;
      if (orb2Ref.current) orb2Ref.current.style.marginRight = `${dx * -30 * strength}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  return (
    <header
      id="top"
      className="relative z-[1] flex min-h-screen flex-col items-center justify-center overflow-hidden px-10 pb-[90px] pt-[130px] text-center"
    >
      <div
        ref={orb1Ref}
        aria-hidden="true"
        className="absolute -top-[180px] left-[8%] h-[640px] w-[640px] rounded-full blur-[60px] motion-safe:animate-orbdrift"
        style={{ background: "radial-gradient(circle, rgba(216,196,160,.13), transparent 65%)" }}
      />
      <div
        ref={orb2Ref}
        aria-hidden="true"
        className="absolute -bottom-[220px] right-[4%] h-[720px] w-[720px] rounded-full blur-[70px] motion-safe:animate-orbdrift2"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,.07), transparent 65%)" }}
      />
      <div aria-hidden="true" className="bg-grid-mask absolute inset-0" />
      <HeroSceneLoader />

      <div ref={innerRef} className="relative max-w-[1060px] px-10">
        <div className="mb-[34px] inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-[18px] py-2 font-mono text-xs tracking-[.14em] text-text2 backdrop-blur-md">
          <span className="h-[7px] w-[7px] rounded-full bg-beige shadow-[0_0_12px_rgba(236,224,203,.8)] motion-safe:animate-pulseline" />
          <span>{badge}</span>
        </div>

        <h1 className="font-display m-0 text-[clamp(56px,7.4vw,104px)] font-bold leading-[1.02] tracking-[-.03em] text-white">
          Dilan Aragón
          <br />
          <span className="text-gradient-beige bg-[length:200%_auto] motion-safe:animate-shimmer">
            {tagline}
          </span>
        </h1>

        <div className="mt-[30px] h-[26px] font-mono text-[17px] text-text2">
          <span className="text-beige2">&gt;</span> <RoleText />
          <span className="text-beige2 motion-safe:animate-pulseline-fast">▊</span>
        </div>

        <div className="mt-11 flex justify-center gap-4 max-[480px]:flex-col">
          <motion.a
            href="#work"
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 22 } }}
            whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 500, damping: 30 } }}
            className="rounded-full bg-beige px-[34px] py-[15px] text-[15px] font-extrabold text-ink shadow-[0_0_36px_rgba(216,196,160,.25)] transition-colors duration-300 hover:bg-white hover:shadow-[0_0_60px_rgba(236,224,203,.45)]"
          >
            {cta1}
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 22 } }}
            whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 500, damping: 30 } }}
            className="rounded-full border border-white/[0.14] bg-white/[0.04] px-[34px] py-[15px] text-[15px] font-semibold text-text1 backdrop-blur-md transition-colors duration-300 hover:border-beige2/60 hover:text-white"
          >
            {cta2}
          </motion.a>
        </div>
      </div>

      {showScrollHint && (
        <div className="mt-16 flex flex-col items-center gap-2.5 font-mono text-[11px] tracking-[.2em] text-muted">
          {scrollLabel}
          <span
            aria-hidden="true"
            className="h-11 w-px motion-safe:animate-pulseline"
            style={{ background: "linear-gradient(180deg, #d8c4a0, transparent)" }}
          />
        </div>
      )}
    </header>
  );
}
