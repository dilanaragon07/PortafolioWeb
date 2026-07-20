"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroScene = dynamic(() => import("./HeroScene").then((mod) => mod.HeroScene), { ssr: false });

/** Mounts the 3D hero object only for capable, motion-consenting clients. */
export function HeroSceneLoader() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60">
      <HeroScene />
    </div>
  );
}
