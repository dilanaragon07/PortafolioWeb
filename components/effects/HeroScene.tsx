"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import type { Group, Mesh } from "three";

/**
 * A small, hand-laid-out node graph — reads as a dependency graph / circuit
 * cluster rather than a decorative blob. Positions + edges are fixed (not
 * randomized) so the shape is deliberate and stable across renders.
 */
const NODES: [number, number, number][] = [
  [0, 0, 0],
  [0.9, 0.4, 0.2],
  [-0.8, 0.5, -0.3],
  [0.5, -0.7, 0.4],
  [-0.6, -0.6, 0.1],
  [0.2, 0.9, -0.5],
  [1.3, -0.2, -0.6],
  [-1.2, 0.1, 0.5],
  [0.1, -1.1, -0.3],
  [1.0, 1.0, 0.3],
  [-1.0, -1.0, -0.2],
  [1.4, 0.6, 0.6],
  [-1.4, 0.7, -0.7],
  [0.4, 0.2, 1.1],
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 5],
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 10],
  [5, 9],
  [6, 11],
  [7, 12],
  [3, 13],
  [0, 13],
  [9, 11],
  [10, 4],
  [8, 10],
  [2, 12],
];

/** A handful of edges along which a small "data packet" travels on a loop. */
const PACKETS: { edge: [number, number]; speed: number; offset: number }[] = [
  { edge: [0, 1], speed: 0.22, offset: 0 },
  { edge: [0, 3], speed: 0.17, offset: 0.4 },
  { edge: [1, 6], speed: 0.26, offset: 0.15 },
  { edge: [2, 7], speed: 0.2, offset: 0.7 },
  { edge: [3, 8], speed: 0.24, offset: 0.55 },
];

function Nodes() {
  const refs = useRef<(Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.scale.setScalar(1 + Math.sin(t * 1.4 + i * 1.3) * 0.18);
    });
  });

  return (
    <>
      {NODES.map((p, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }} position={p}>
          <icosahedronGeometry args={[0.045, 0]} />
          <meshBasicMaterial color="#ece0cb" transparent opacity={0.55} />
        </mesh>
      ))}
    </>
  );
}

function Edges() {
  return (
    <>
      {EDGES.map(([a, b], i) => (
        <Line key={i} points={[NODES[a]!, NODES[b]!]} color="#d8c4a0" transparent opacity={0.16} lineWidth={1} />
      ))}
    </>
  );
}

/** Small emissive points that lerp along their assigned edge, fading at the endpoints — reads as data traveling the graph. */
function Packets() {
  const refs = useRef<(Mesh | null)[]>([]);
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    PACKETS.forEach((p, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      const raw = (t * p.speed + p.offset) % 1;
      a.set(...NODES[p.edge[0]]!);
      b.set(...NODES[p.edge[1]]!);
      mesh.position.lerpVectors(a, b, raw);
      const fade = raw < 0.12 ? raw / 0.12 : raw > 0.88 ? (1 - raw) / 0.12 : 1;
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.85 * fade;
    });
  });

  return (
    <>
      {PACKETS.map((_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0} />
        </mesh>
      ))}
    </>
  );
}

function Graph() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.06;
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    g.position.y = 0.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.25;
  });

  return (
    <group ref={group} position={[1.9, 0.25, -1]} scale={0.85}>
      <Edges />
      <Nodes />
      <Packets />
    </group>
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
 * Decorative floating 3D node-graph for the Hero. Client-only (WebGL), meant
 * to be loaded via next/dynamic({ ssr: false }) so it never blocks first
 * paint. `pointer-events-none` at the mount site keeps it from stealing
 * clicks from the CTAs — this component itself renders no DOM outside the
 * canvas.
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
        <Graph />
      </Suspense>
    </Canvas>
  );
}
