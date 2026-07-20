"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translate } from "@/lib/content";

const SCRAMBLE_DURATION_MS = 900;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Animates `target` into view with a binary-scramble reveal (chars resolve
 * left-to-right on a p^2 curve) whenever `trigger` changes. A `target`
 * change that isn't accompanied by a `trigger` change swaps instantly —
 * this lets one primitive serve both scramble-on-language-switch and
 * plain-swap-on-other-reasons callers (e.g. the hero role cycler).
 */
export function useScramble(target: string, trigger: unknown): string {
  const [display, setDisplay] = useState(target);
  const isFirstRun = useRef(true);
  const prevTrigger = useRef(trigger);
  const rafId = useRef<number>();

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      prevTrigger.current = trigger;
      setDisplay(target);
      return;
    }

    if (prevTrigger.current === trigger || prefersReducedMotion()) {
      prevTrigger.current = trigger;
      setDisplay(target);
      return;
    }
    prevTrigger.current = trigger;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    const start = performance.now();

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / SCRAMBLE_DURATION_MS);
      const shown = Math.floor(p * p * target.length);
      let bits = "";
      for (let i = 0; i < target.length - shown; i++) bits += Math.random() < 0.5 ? "0" : "1";
      setDisplay(target.slice(0, shown) + bits);
      if (p < 1) {
        rafId.current = requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };
    rafId.current = requestAnimationFrame(step);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, trigger]);

  return display;
}

/** Scrambles the translated string for `key` whenever the active language changes. */
export function useScrambleText(key: string): string {
  const { lang } = useLanguage();
  return useScramble(translate(lang, key), lang);
}
