"use client";

import { motion } from "framer-motion";

interface ShopFunnelProps {
  title: string;
  items: string[];
}

const STAGES = ["Produkt", "Warenkorb", "Checkout", "Bezahlt"];
const WIDTHS = [100, 74, 52, 40];

// A generic funnel shape sets the scene — a shop narrows down to fewer
// buyers at every step — then the real symptom copy explains, in words,
// where and why that happens on a typical site.
export function ShopFunnel({ title, items }: ShopFunnelProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-balance text-center text-[9vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[2.8vw] xl:text-[52px]"
        >
          {title}
        </motion.h2>

        <div className="mx-auto mt-16 flex max-w-[460px] flex-col items-center gap-2">
          {STAGES.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: `${WIDTHS[i]}%`, transformOrigin: "top" }}
              className="flex items-center justify-between rounded-lg bg-accent-tint px-4 py-3"
            >
              <span className="text-[13px] font-medium text-ink sm:text-[14px]">{s}</span>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[16px] border border-border bg-card px-6 py-5 text-[16px] leading-[1.45] text-ink-soft sm:text-[17px]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
