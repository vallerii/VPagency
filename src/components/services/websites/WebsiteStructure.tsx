"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

interface WebsiteStructureProps {
  title: string[];
  lines: string[];
}

type Phase = "weak" | "strong";

interface Rect {
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: number;
}

interface UIBlock {
  id: string;
  weak: Rect;
  strong: Rect;
  /** Wobbles in place while the site is still "weak" — the unclear, unreliable CTA. */
  unstable?: boolean;
}

// The site itself, in two states: a shaky, off-balance "before" and an
// aligned, confident "after". Only the CTA and the two content blocks
// actually move — the nav bar is the one constant, so the window always
// reads as "a site", never an abstract pattern.
const UI_BLOCKS: UIBlock[] = [
  {
    id: "nav",
    weak: { top: "0%", left: "0%", width: "100%", height: "11%", rotate: 0 },
    strong: { top: "0%", left: "0%", width: "100%", height: "11%", rotate: 0 },
  },
  {
    id: "headline",
    weak: { top: "20%", left: "6%", width: "50%", height: "9%", rotate: -3 },
    strong: { top: "17%", left: "0%", width: "100%", height: "13%", rotate: 0 },
  },
  {
    id: "cta",
    weak: { top: "36%", left: "64%", width: "17%", height: "7%", rotate: 6 },
    strong: { top: "34%", left: "35%", width: "30%", height: "9%", rotate: 0 },
    unstable: true,
  },
  {
    id: "card1",
    weak: { top: "58%", left: "2%", width: "25%", height: "22%", rotate: -7 },
    strong: { top: "50%", left: "4%", width: "42%", height: "36%", rotate: 0 },
  },
  {
    id: "card2",
    weak: { top: "70%", left: "58%", width: "23%", height: "18%", rotate: 5 },
    strong: { top: "50%", left: "50%", width: "42%", height: "36%", rotate: 0 },
  },
];

interface VisitorSpec {
  id: number;
  top: string;
  delay: number;
  /** This one keeps bouncing off even after the site improves — a good site still filters, it just filters better. */
  alwaysBounces?: boolean;
}

const VISITORS: VisitorSpec[] = [
  { id: 0, top: "22%", delay: 0 },
  { id: 1, top: "40%", delay: 0.7 },
  { id: 2, top: "60%", delay: 1.4, alwaysBounces: true },
  { id: 3, top: "78%", delay: 2.1 },
  { id: 4, top: "50%", delay: 2.8 },
];

// A single incoming visitor: while the site is weak it drifts in and fades
// out before reaching the CTA (confused, bounces); once the site is strong
// it travels all the way through the CTA and on toward the right edge — the
// same dot, a different outcome.
function VisitorDot({ spec, phase }: { spec: VisitorSpec; phase: Phase }) {
  const bounces = phase === "weak" || spec.alwaysBounces;
  return (
    <motion.span
      aria-hidden="true"
      style={{ position: "absolute", top: spec.top }}
      className="h-[6px] w-[6px] rounded-full bg-accent-hover"
      animate={{
        left: bounces ? ["-6%", "44%"] : ["-6%", "50%", "97%"],
        opacity: bounces ? [0, 1, 1, 0] : [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: bounces ? 1.9 : 2.8,
        times: bounces ? [0, 0.2, 0.75, 1] : [0, 0.15, 0.4, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.7,
        delay: spec.delay,
        ease: "easeInOut",
      }}
    />
  );
}

// How long each state stays on screen before flipping to the other, once
// the loop is running.
const PHASE_DURATION: Record<Phase, number> = { weak: 2200, strong: 4500 };

// The "Die Website ist der erste Kontaktpunkt" illustration: not a generic
// decorative animation, but the argument the copy is making, played out —
// a weak, shaky site where visitors drift off, rebuilding itself into a
// clear one where visitors flow through, then falling back to weak again —
// on an endless loop, so the "before" is never more than a few seconds away.
export function WebsiteStructure({ title, lines }: WebsiteStructureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("weak");

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const schedule = (current: Phase) => {
      timer = setTimeout(() => {
        if (cancelled) return;
        const next: Phase = current === "weak" ? "strong" : "weak";
        setPhase(next);
        schedule(next);
      }, PHASE_DURATION[current]);
    };

    schedule("weak");
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [inView]);

  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32 overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
          >
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h2>
          <span className="mt-6 block h-px w-10 bg-accent-hover" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex max-w-[460px] flex-col gap-3 text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]"
          >
            {lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9"
          >
            <HoverLink href="#contact" variant="outline" className="px-8 py-4 text-[18px]">
              Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-[20px] border border-border bg-bg p-3"
        >
          {/* the site */}
          {UI_BLOCKS.map((b) => (
            <motion.span
              key={b.id}
              variants={{
                weak: {
                  ...b.weak,
                  opacity: b.id === "cta" ? 1 : 0.8,
                  ...(b.unstable
                    ? {
                        rotate: [b.weak.rotate, b.weak.rotate - 5, b.weak.rotate + 3, b.weak.rotate],
                        transition: { rotate: { repeat: Infinity, duration: 1.6, ease: "easeInOut" } },
                      }
                    : {}),
                },
                strong: { ...b.strong, opacity: 1, rotate: 0 },
              }}
              initial="weak"
              animate={phase}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute" }}
              className={`rounded-md transition-colors duration-500 ${
                b.id === "cta"
                  ? phase === "strong"
                    ? "bg-emerald-500"
                    : "bg-red-500"
                  : "bg-accent-tint"
              }`}
            />
          ))}

          {/* incoming visitors */}
          {VISITORS.map((v) => (
            <VisitorDot key={v.id} spec={v} phase={phase} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
