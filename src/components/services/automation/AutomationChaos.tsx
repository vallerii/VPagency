"use client";

import { motion } from "framer-motion";
import { Table2, Mail, MessageCircle, FileText, Calendar, Inbox, type LucideIcon } from "lucide-react";

interface AutomationChaosProps {
  title: string;
  items: string[];
}

interface Chip {
  icon: LucideIcon;
  top: string;
  left: string;
  rotate: number;
}

// Same symptom copy as the plain list everywhere else, but here it reads
// against a loose backdrop of disconnected tool icons — the chaos those
// symptoms actually describe — rather than the sticky-note treatment
// Websites uses.
const CHIPS: Chip[] = [
  { icon: Table2, top: "6%", left: "78%", rotate: -6 },
  { icon: Mail, top: "20%", left: "4%", rotate: 5 },
  { icon: MessageCircle, top: "48%", left: "84%", rotate: 4 },
  { icon: FileText, top: "68%", left: "2%", rotate: -4 },
  { icon: Calendar, top: "84%", left: "72%", rotate: 6 },
  { icon: Inbox, top: "36%", left: "44%", rotate: -3 },
];

export function AutomationChaos({ title, items }: AutomationChaosProps) {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {CHIPS.map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.35, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            style={{ top: c.top, left: c.left, transform: `rotate(${c.rotate}deg)` }}
            className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card sm:h-16 sm:w-16"
          >
            <c.icon className="h-6 w-6 text-ink-faint sm:h-7 sm:w-7" strokeWidth={1.6} />
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[900px]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-center text-[9vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[2.8vw] xl:text-[52px]"
        >
          {title}
        </motion.h2>

        <div className="relative mx-auto mt-14 flex max-w-[560px] flex-col gap-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/90 px-6 py-4 text-center text-[16px] font-medium leading-[1.4] text-ink backdrop-blur-sm sm:text-[18px]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
