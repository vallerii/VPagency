"use client";

import { motion } from "framer-motion";
import { Check, Table2, Mail, MessageCircle, Globe, type LucideIcon } from "lucide-react";
import type { BeforeAfterRow } from "@/data/services";

interface SystemResultProps {
  rows: BeforeAfterRow[];
}

interface Tool {
  icon: LucideIcon;
  top: string;
  left: string;
  rotate: number;
}

const TOOLS: Tool[] = [
  { icon: Table2, top: "8%", left: "14%", rotate: -8 },
  { icon: Mail, top: "66%", left: "6%", rotate: 6 },
  { icon: MessageCircle, top: "6%", left: "86%", rotate: 5 },
  { icon: Globe, top: "64%", left: "92%", rotate: -6 },
];

// The "scattered tools converge into one system" move from the symptoms
// block above, replayed here as a permanent fixture next to the result
// list, looping forever — this component IS the result, not a one-off
// reveal of it.
function ConvergenceLoop() {
  return (
    <div className="relative h-[220px] w-[220px] sm:h-[248px] sm:w-[248px]" aria-hidden="true">
      {TOOLS.map((t, i) => (
        <motion.span
          key={i}
          initial={{ top: t.top, left: t.left, rotate: t.rotate, opacity: 1, scale: 1 }}
          whileInView={{
            top: [t.top, "50%", t.top],
            left: [t.left, "50%", t.left],
            rotate: [t.rotate, 0, t.rotate],
            opacity: [1, 0, 1],
            scale: [1, 0.6, 1],
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 3.2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.6,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ position: "absolute", x: "-50%", y: "-50%" }}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card sm:h-14 sm:w-14"
        >
          <t.icon className="h-5 w-5 text-ink-faint sm:h-6 sm:w-6" strokeWidth={1.6} />
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 3.2,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.6,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ position: "absolute", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-accent-hover shadow-[0_12px_28px_-10px_rgba(143,175,212,0.6)] sm:h-20 sm:w-20"
      >
        <span className="h-7 w-7 rounded-md bg-bg" />
      </motion.div>
    </div>
  );
}

// One dashboard frame stands in for "your system": a looping icon-into-hub
// animation on the left says "everything consolidates into one system",
// and the same before/after copy runs down the right as a list — the
// visual and the text make the same point instead of one just decorating
// the other.
export function SystemResult({ rows }: SystemResultProps) {
  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1440px] text-balance text-center text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        Das Ergebnis für Sie
      </motion.h2>

      <div className="relative mx-auto mt-16 w-full max-w-[1080px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 sm:-inset-14"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(143, 175, 212, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 175, 212, 0.18) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, black 45%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 78%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid w-full grid-cols-1 overflow-hidden rounded-[24px] border border-border bg-bg sm:grid-cols-[320px_1fr]"
        >
          <div className="hidden items-center justify-center border-r border-border bg-card/60 p-8 sm:flex">
            <ConvergenceLoop />
          </div>

          <div className="flex flex-col justify-center ">
            {rows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center px-6 py-3.5 sm:px-8 sm:py-4"
              >
                <p className="flex items-center gap-2.5 text-[16px] font-medium leading-[1.3] text-ink sm:text-[18px]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-2">
                    <Check className="h-3 w-3 text-bg" strokeWidth={4} />
                  </span>
                  {row.after}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
