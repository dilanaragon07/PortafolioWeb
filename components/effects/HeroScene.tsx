"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingKnot() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x += delta * 0.08;
    mesh.rotation.y += delta * 0.12;
    mesh.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.35;
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 1]} position={[1.9, 0.3, -1]}>
      <MeshDistortMaterial
        color="#ece0cb"
        roughness={0.3}
        metalness={0.1}
        distort={0.25}
        speed={1.2}
        transparent
        opacity={0.28}
        wireframe
      />
    </Icosahedron>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={25} color="#ece0cb" />
    </>
  );
}

/**
 * Decorative floating 3D object for the Hero. Client-only (WebGL), meant to
 * be loaded via next/dynamic({ ssr: false }) so it never blocks first paint.
 * `pointer-events-none` at the mount site keeps it from stealing clicks from
 * the CTAs — this component itself renders no DOM outside the canvas.
 */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 38 }}
      frameloop="always"
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
      }}
    >
      <Suspense fallback={null}>
        <Lights />
        <FloatingKnot />
      </Suspense>
    </Canvas>
  );
}
