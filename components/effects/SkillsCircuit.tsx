"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);
}

/** PCB-style right-angle traces, purely decorative — the "systems engineering" motif for the site. */
const TRACES = [
  "M0,80 L180,80 L180,20 L420,20 L420,140 L680,140",
  "M1200,60 L980,60 L980,160 L760,160 L760,40 L680,40",
  "M0,260 L140,260 L140,340 L360,340 L360,220 L600,220 L600,300 L860,300",
  "M1200,320 L1040,320 L1040,240 L860,240",
  "M300,0 L300,90 L520,90 L520,0",
  "M900,400 L900,300 L680,300 L680,380",
];

const VIAS: [number, number][] = [
  [180, 80],
  [420, 20],
  [420, 140],
  [980, 60],
  [760, 160],
  [140, 260],
  [360, 340],
  [600, 220],
  [1040, 320],
  [1040, 240],
  [300, 90],
  [520, 90],
  [900, 300],
];

const PULSE_COUNT = 3;

/**
 * Subtle animated circuit-trace background for the Skills section — the
 * site's one dedicated "systems engineering" motif. Traces draw themselves
 * in on scroll (GSAP + ScrollTrigger), then a couple of small signal dots
 * loop along them (GSAP MotionPathPlugin). Fully decorative: aria-hidden,
 * pointer-events-none, and inert under prefers-reduced-motion.
 */
export function SkillsCircuit() {
  const svgRef = useRef<SVGSVGElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !svgRef.current) return;
      const paths = Array.from(svgRef.current.querySelectorAll<SVGPathElement>(".trace"));
      if (!paths.length) return;

      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: svgRef.current, start: "top 75%", once: true },
        });
      });

      const pulses = Array.from(svgRef.current.querySelectorAll<SVGCircleElement>(".pulse"));
      pulses.forEach((el, i) => {
        const path = paths[i % paths.length]!;
        gsap.to(el, {
          motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
          duration: 5 + i * 1.4,
          repeat: -1,
          ease: "none",
          delay: i * 0.7,
          scrollTrigger: { trigger: svgRef.current, start: "top 90%" },
        });
      });
    },
    { scope: svgRef, dependencies: [reducedMotion] },
  );

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {TRACES.map((d, i) => (
        <path
          key={i}
          className="trace"
          d={d}
          fill="none"
          stroke="#d8c4a0"
          strokeWidth={1}
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity={reducedMotion ? 0.12 : 0.16}
        />
      ))}
      {VIAS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.4} fill="#ece0cb" opacity={0.22} />
      ))}
      {!reducedMotion &&
        Array.from({ length: PULSE_COUNT }, (_, i) => (
          <circle key={i} className="pulse" r={3} fill="#ece0cb" opacity={0.85} />
        ))}
    </svg>
  );
}
