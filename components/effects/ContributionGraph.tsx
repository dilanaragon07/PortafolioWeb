"use client";

import { useEffect, useRef } from "react";
import type { GithubCalendarDay } from "@/lib/github";

const COLS = 52;
const ROWS = 7;
const GAP = 3;
const SHADES = [
  "rgba(255,255,255,.05)",
  "rgba(236,224,203,.18)",
  "rgba(236,224,203,.38)",
  "rgba(236,224,203,.62)",
  "rgba(236,224,203,.92)",
];

/** Seeded placeholder pattern — only used if the live GitHub fetch failed. */
function SimulatedGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const width = canvas.clientWidth;
      const height = 130;
      canvas.width = width * 2;
      canvas.height = height * 2;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(2, 2);

      const cell = Math.min((width - (COLS - 1) * GAP) / COLS, (height - (ROWS - 1) * GAP) / ROWS);
      let seed = 7;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };

      for (let x = 0; x < COLS; x++) {
        const wave = 0.35 + 0.45 * Math.sin(x / 6) * Math.sin(x / 13 + 2);
        for (let y = 0; y < ROWS; y++) {
          const v = rnd() * 0.7 + Math.max(0, wave) * rnd();
          const level = v < 0.18 ? 0 : v < 0.38 ? 1 : v < 0.58 ? 2 : v < 0.78 ? 3 : 4;
          ctx.fillStyle = SHADES[level] ?? SHADES[0]!;
          ctx.beginPath();
          ctx.roundRect(x * (cell + GAP), y * (cell + GAP), cell, cell, 2.5);
          ctx.fill();
        }
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Simulated contribution graph (live GitHub data unavailable)"
      className="block h-[130px] w-full"
    />
  );
}

function RealGraph({ calendar }: { calendar: GithubCalendarDay[] }) {
  const sorted = [...calendar].sort((a, b) => a.date.localeCompare(b.date));
  const firstDate = sorted[0]?.date;
  if (!firstDate) return <SimulatedGraph />;

  const start = new Date(`${firstDate}T00:00:00Z`).getTime();
  const weeks: (GithubCalendarDay | null)[][] = [];

  for (const day of sorted) {
    const date = new Date(`${day.date}T00:00:00Z`);
    const dayOfWeek = date.getUTCDay();
    const weekIndex = Math.floor((date.getTime() - start) / (7 * 86400000));
    while (weeks.length <= weekIndex) weeks.push(new Array(7).fill(null));
    const week = weeks[weekIndex];
    if (week) week[dayOfWeek] = day;
  }

  return (
    <div
      role="img"
      aria-label={`GitHub contribution graph: ${sorted.filter((d) => d.level > 0).length} active days in the last year`}
      className="flex h-[130px] w-full items-stretch gap-[3px] overflow-hidden"
    >
      {weeks.map((week, wi) => (
        <div key={wi} className="flex flex-1 flex-col gap-[3px]">
          {week.map((day, di) => (
            <div
              key={di}
              title={day ? `${day.date}: level ${day.level}` : undefined}
              className="flex-1 rounded-[2.5px]"
              style={{ background: SHADES[day?.level ?? 0] }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ContributionGraph({ calendar }: { calendar?: GithubCalendarDay[] }) {
  if (calendar && calendar.length > 0) return <RealGraph calendar={calendar} />;
  return <SimulatedGraph />;
}
