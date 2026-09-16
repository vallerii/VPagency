"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ShopFunnelProps {
  title: string;
  items: string[];
}

const STAGES = ["Produkt", "Warenkorb", "Checkout", "Bezahlt"];
const CLEAN_WIDTHS = [100, 74, 52, 40];
// Milder narrowing than the clean funnel — these steps carry full
// sentences, not single words, so they need room to wrap.
const PROBLEM_WIDTHS = [100, 90, 80, 70];

const ARROW_COLOR = "#0E68FF";

// The long divider between the two funnels — a shaft that stretches to
// match whichever column is taller (the grid row does that for free) plus
// a fixed arrowhead pinned to the bottom.
function FlowArrow() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-16 w-full items-center justify-center sm:h-auto sm:w-20"
    >
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ backgroundColor: ARROW_COLOR, transformOrigin: "top" }}
        className="absolute top-0 bottom-10 left-1/2 w-[3px] -translate-x-1/2"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-11 w-11 sm:h-12 sm:w-12" style={{ color: ARROW_COLOR }} strokeWidth={2.5} />
        </motion.span>
      </motion.div>
    </div>
  );
}

// Two funnels side by side instead of one — the shape everyone wants
// (clean, narrowing, on the right) and the shape it actually takes today,
// built from the same symptom copy as before instead of a generic list
// (on the left) — with a long arrow between them doing the "this becomes
// that" work no caption needs to spell out.
export function ShopFunnel({ title, items }: ShopFunnelProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* The section had no visible headline — the other four service
        pages open this block with it, so this one does too. */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14 max-w-3xl text-balance text-center text-[9vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:mb-20 lg:text-[2.8vw] xl:text-[52px]"
        >
          {title}
        </motion.h2>

        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-stretch gap-10 sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="mb-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft sm:text-[14px]">
              So läuft es oft
            </span>
            <div className="flex w-full max-w-[460px] flex-1 flex-col items-center justify-start gap-3">
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: `${PROBLEM_WIDTHS[i]}%`, transformOrigin: "top" }}
                  className="rounded-xl border border-dashed border-ink-faint/60 bg-card px-4 py-3.5 text-center"
                >
                  <span className="text-[15px] leading-[1.4] text-ink sm:text-[16px]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <FlowArrow />

          <div className="flex flex-col items-center">
            <span className="mb-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-link sm:text-[14px]">
              So wollen Sie es
            </span>
            <div className="flex w-full max-w-[400px] flex-1 flex-col items-center justify-start gap-5">
              {STAGES.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: `${CLEAN_WIDTHS[i]}%`, transformOrigin: "top" }}
                  // The goal state ("Bezahlt") is the one solid block; the
                  // steps leading to it are tinted. Text is 15–16px semibold
                  // — the old 13px ink on a 16% tint did not read.
                  className={`flex items-center justify-center rounded-xl px-4 py-4 ${
                    i === STAGES.length - 1
                      ? "bg-[#0E68FF] text-white"
                      : "border border-accent-line/30 bg-accent-tint text-link"
                  }`}
                >
                  <span className="text-[15px] font-semibold sm:text-[16px]">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
