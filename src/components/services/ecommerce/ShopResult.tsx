"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { BeforeAfterRow } from "@/data/services";

interface ShopResultProps {
  rows: BeforeAfterRow[];
}

// A 2-column grid of compact cards rather than a stacked list — closer
// to a row of shop metric tiles, to keep the emphasis on speed and
// conversion rather than a feature-by-feature comparison.
export function ShopResult({ rows }: ShopResultProps) {
  return (
    <section className="relative w-full overflow-hidden bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 460"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="shopResultChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8FAFD4" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#8FAFD4" stopOpacity="0" />
            </linearGradient>
            <marker
              id="shopResultArrowhead"
              markerWidth="12"
              markerHeight="12"
              refX="3.5"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#8fafd4" />
            </marker>
          </defs>

          <motion.path
            d="M0,400 L180,370 L360,392 L540,300 L720,325 L900,225 L1080,255 L1260,120 L1400,70 L1400,460 L0,460 Z"
            fill="url(#shopResultChartFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.path
            d="M0,400 L180,370 L360,392 L540,300 L720,325 L900,225 L1080,255 L1260,120 L1400,70"
            fill="none"
            stroke="#8fafd4"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#shopResultArrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[1440px] text-balance text-center text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
        >
          Das Ergebnis für Sie
        </motion.h2>

        <div className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-4 rounded-[18px] border border-border bg-bg p-6"
            >
              <p className="text-[14px] leading-[1.4] text-ink-faint line-through">{row.before}</p>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-hover">
                  <TrendingUp className="h-4 w-4 text-bg" strokeWidth={2.5} />
                </span>
                <p className="text-[17px] font-medium leading-[1.35] text-ink sm:text-[18px]">{row.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
