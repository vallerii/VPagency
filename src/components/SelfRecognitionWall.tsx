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
    text: "Sie wissen genau, was Sie brauchen — eine neue Website, einen Shop, eine eigene Lösung",
    top: 10,
    left: 20,
    size: 42,
    rotate: 2,
    revealAt: 0.36,
  },
  {
    text: "Nur nicht, wer es sauber und zuverlässig umsetzt",
    top: 32,
    left: 5,
    size: 34,
    rotate: -3,
    revealAt: 0.12,
  },
  {
    text: "Der letzte Dienstleister hat die Technik nie wirklich verstanden",
    top: 24,
    left: 70,
    size: 26,
    rotate: 4,
    revealAt: 0.6,
    fadeOut: true,
  },
  {
    text: "Sie brauchen kein langes Beratungsgespräch, sondern ein Team, das liefert",
    top: 46,
    left: 54,
    size: 28,
    rotate: -4,
    revealAt: 0.84,
    fadeOut: true,
  },
  {
    text: "Die Anforderungen sind klar — die Umsetzung soll es auch sein",
    top: 62,
    left: 4,
    size: 30,
    rotate: 2,
    revealAt: 0.24,
  },
  {
    text: "Sie suchen einen Partner mit echter technischer Tiefe, nicht nur mit Design",
    top: 70,
    left: 44,
    size: 28,
    rotate: 3,
    revealAt: 0.48,
  },
  {
    text: "Ein Angebot, das nicht nur gut klingt, sondern auch hält",
    top: 88,
    left: 26,
    size: 24,
    rotate: 2,
    revealAt: 0.72,
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

// Fluid type size instead of a fixed px + scale-transform-the-whole-canvas
// trick: that approach kept phrases from overlapping on narrow screens, but
// scaling the canvas down shrank its height too, so everything collapsed
// into a short strip centered in the middle of the section. Sizing text
// with clamp() keeps it legible on phones (never smaller than ~78% of the
// desktop size) while letting positions use the section's real, full
// height — so phrases spread top to bottom instead of bunching up.
function fluidSize(px: number) {
  const min = Math.round(px * 0.78);
  const vw = (px / 1180) * 100;
  return `clamp(${min}px, ${vw.toFixed(2)}vw, ${px}px)`;
}

const phraseWidthClass = "max-w-[78%] sm:max-w-[60%] lg:max-w-[46%]";

function StaticWall() {
  return (
    <div
      className="relative h-[78vh] w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg) 0%, var(--color-bg) 25%, color-mix(in srgb, var(--color-accent) 50%, var(--color-bg) 50%) 100%)",
      }}
      aria-hidden="true"
    >
      {PHRASES.map((p, i) => (
        <span
          key={i}
          className={`absolute font-medium leading-[1.15] tracking-tight text-ink ${phraseWidthClass}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            fontSize: fluidSize(p.size),
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
      <div className="px-6 pt-32 pb-10 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40 ">
        <h2 className=" mx-auto w-full max-w-[1440px] text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
          Klingt nach Ihrem Projekt?
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
          <div className="sticky top-0 h-dvh w-full overflow-hidden">
            {/* top:0% for the phrases below resolves to the viewport's
                actual top edge once this section is pinned mid-scroll —
                same spot the fixed header sits at (z-50). Padding on this
                wrapper wouldn't help (absolutely positioned children measure
                against the padding box, not the content box), so the
                header clearance has to be a real inset instead. */}
            <div className="absolute inset-x-0 top-28 bottom-0 sm:top-32">
              {PHRASES.map((p, i) => (
                <span
                  key={i}
                  className={`absolute font-medium leading-[1.15] tracking-tight text-ink ${phraseWidthClass}`}
                  style={{
                    top: `${p.top}%`,
                    left: `${p.left}%`,
                    fontSize: fluidSize(p.size),
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
