"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useReducedMotion } from "framer-motion";

interface Phrase {
  text: string;
  top: number; // %
  left: number; // %
  size: number; // px at desktop
  rotate: number; // deg
  revealAt: number; // 0..1 — point in the scroll where it darkens
  fadeOut?: boolean; // if true, sinks back to near-invisible after revealing
}

const PHRASES: Phrase[] = [
  {
    text: "Заявки теряются, клиенты ждут дольше, чем хотелось бы",
    top: 32,
    left: 6,
    size: 34,
    rotate: -3,
    revealAt: 0.12,
  },
  {
    text: "Excel и таблицы заменяют систему",
    top: 60,
    left: 4,
    size: 30,
    rotate: 2,
    revealAt: 0.24,
  },
  {
    text: "Всё держится на вас — без вас ничего не происходит",
    top: 5,
    left: 30,
    size: 42,
    rotate: 2,
    revealAt: 0.36,
  },
  {
    text: "Сотрудники делают одно и то же вручную",
    top: 64,
    left: 46,
    size: 28,
    rotate: 3,
    revealAt: 0.48,
  },
  {
    text: "Информация разбросана по пяти местам",
    top: 18,
    left: 72,
    size: 26,
    rotate: 4,
    revealAt: 0.6,
    fadeOut: true,
  },
  {
    text: "Сайт или сервис устарел, но непонятно, что делать в первую очередь",
    top: 85,
    left: 28,
    size: 24,
    rotate: 2,
    revealAt: 0.72,
  },
  {
    text: "Раньше уже пробовали с подрядчиком — не сработало",
    top: 36,
    left: 56,
    size: 28,
    rotate: -4,
    revealAt: 0.84,
    fadeOut: true,
  },
];

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const u = clamp((x - edge0) / (edge1 - edge0));
  return u * u * (3 - 2 * u);
}

function phraseOpacity(t: number, p: Phrase) {
  const rise = smoothstep(p.revealAt - 0.09, p.revealAt + 0.03, t);
  const base = 0.3 + rise * 0.7; // 0.3 (faint) -> 1 (solid)

  if (!p.fadeOut) return base;

  const fall = smoothstep(p.revealAt + 0.16, p.revealAt + 0.3, t);
  return base * (1 - fall * 0.85); // sinks back to ~0.15
}

function StaticWall() {
  return (
    <div
      className="relative mx-auto h-[70vh] w-full max-w-5xl px-6"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg) 0%, var(--color-bg) 25%, color-mix(in srgb, var(--color-accent) 50%, var(--color-bg) 50%) 100%)",
      }}
      aria-hidden="true"
    >
      {PHRASES.map((p, i) => (
        <span
          key={i}
          className="absolute max-w-[46%] font-medium leading-[1.15] tracking-tight text-ink"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            fontSize: p.size * 0.62,
            transform: `rotate(${p.rotate}deg)`,
            opacity: 0.75,
          }}
        >
          {p.text}
        </span>
      ))}
    </div>
  );
}

export function SelfRecognitionWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  const [t, setT] = useState(0);

  useEffect(() => {
    const unsub = smooth.on("change", (v) => setT(v));
    return () => unsub();
  }, [smooth]);

  return (
    <section className="relative w-full bg-bg">
      <div className="px-6 pt-32 pb-10 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40">
        <h2 className="text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
          Вам знакомо?
        </h2>
      </div>

      {prefersReduced ? (
        <StaticWall />
      ) : (
        <div
          ref={containerRef}
          className="relative h-[240vh] w-full"
          style={{
            // A single gradient painted across the whole scroll length —
            // the sticky viewport below has no background of its own, so
            // as the page scrolls past it, a progressively lower (more
            // accent-saturated) slice of this gradient shows through.
            // Stays flat bg for the first quarter so the very start of the
            // block reads as neutral before any color shift begins, and
            // the end stop is a muted 50/50 mix rather than solid accent.
            background:
              "linear-gradient(to bottom, var(--color-bg) 0%, var(--color-bg) 25%, color-mix(in srgb, var(--color-accent) 20%, var(--color-bg) 50%) 100%)",
          }}
        >
          <div className="sticky top-0 flex h-dvh w-full items-center overflow-hidden">
            <div className="relative h-[70vh] w-full scale-[0.62] sm:scale-[0.82] lg:scale-100">
              {PHRASES.map((p, i) => (
                <span
                  key={i}
                  className="absolute max-w-[46%] font-medium leading-[1.15] tracking-tight text-ink"
                  style={{
                    top: `${p.top}%`,
                    left: `${p.left}%`,
                    fontSize: p.size,
                    transform: `rotate(${p.rotate}deg)`,
                    opacity: phraseOpacity(t, p),
                  }}
                >
                  {p.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
