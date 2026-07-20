"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = glowRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 280}px, ${e.clientY - 280}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[560px] w-[560px] rounded-full blur-[10px]"
      style={{
        background:
          "radial-gradient(circle, rgba(216,196,160,.07), rgba(255,255,255,.03) 45%, transparent 70%)",
        transform: "translate(-280px, -280px)",
      }}
    />
  );
}
