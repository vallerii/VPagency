"use client";

import { motion } from "framer-motion";
import { Table2, Mail, MessageCircle, Globe, type LucideIcon } from "lucide-react";

interface SystemChaosProps {
  title: string;
  items: string[];
}

interface Tool {
  icon: LucideIcon;
  scattered: { top: string; left: string; rotate: number };
}

// A handful of separate tools converge into one labeled hub — the visual
// short version of what the symptom list below spells out in full.
const TOOLS: Tool[] = [
  { icon: Table2, scattered: { top: "10%", left: "8%", rotate: -8 } },
  { icon: Mail, scattered: { top: "60%", left: "4%", rotate: 6 } },
  { icon: MessageCircle, scattered: { top: "8%", left: "82%", rotate: 5 } },
  { icon: Globe, scattered: { top: "58%", left: "86%", rotate: -6 } },
];

export function SystemChaos({ title, items }: SystemChaosProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          initial="scattered"
          whileInView="unified"
          viewport={{ once: true, amount: 0.6 }}
          className="relative mx-auto h-[220px] w-full max-w-[420px] sm:h-[240px]"
        >
          {TOOLS.map((t, i) => (
            <motion.span
              key={i}
              variants={{
                scattered: { top: t.scattered.top, left: t.scattered.left, rotate: t.scattered.rotate, opacity: 1, scale: 1 },
                unified: { top: "50%", left: "50%", rotate: 0, opacity: 0, scale: 0.6 },
              }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", x: "-50%", y: "-50%" }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card sm:h-16 sm:w-16"
            >
              <t.icon className="h-6 w-6 text-ink-faint sm:h-7 sm:w-7" strokeWidth={1.6} />
            </motion.span>
          ))}
          <motion.div
            variants={{
              scattered: { opacity: 0, scale: 0.6 },
              unified: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "absolute", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-accent-tint sm:h-24 sm:w-24">
              <span className="h-8 w-8 rounded-lg bg-accent-hover sm:h-9 sm:w-9" />
            </span>
            <span className="whitespace-nowrap text-[13px] font-medium text-ink">Ihr System</span>
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl text-balance text-center text-[9vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[2.8vw] xl:text-[52px]"
        >
          {title}
        </motion.h2>

        <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[16px] border border-border bg-card px-6 py-5 text-[16px] leading-[1.45] text-ink sm:text-[17px]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
