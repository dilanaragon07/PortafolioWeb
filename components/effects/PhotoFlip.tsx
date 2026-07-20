"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const REVEAL_DELAY_MS = 450;
const FLIP_DURATION_MS = 850;

export function PhotoFlip({ src, alt, objectPosition = "50% 22%" }: { src: string; alt: string; objectPosition?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setFlipped(true);
      return;
    }
    const revealId = window.setTimeout(() => {
      setFlipped(true);
      setGlow(true);
    }, REVEAL_DELAY_MS);
    const glowOffId = window.setTimeout(() => setGlow(false), REVEAL_DELAY_MS + FLIP_DURATION_MS);
    return () => {
      window.clearTimeout(revealId);
      window.clearTimeout(glowOffId);
    };
  }, [inView, reducedMotion]);

  return (
    <div ref={containerRef} className="relative h-full w-full" style={{ perspective: 1200 }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: FLIP_DURATION_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center bg-[#0c0b09]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <svg width="88" height="88" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-faint2">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <Image src={src} alt={alt} fill sizes="380px" className="object-cover" style={{ objectPosition }} priority />
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,.9), rgba(255,255,255,0) 70%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: glow ? 1 : 0 }}
        transition={{ duration: glow ? 0.25 : 0.85, ease: "easeOut" }}
      />
    </div>
  );
}
