"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";
import { Check } from "lucide-react";

interface ShopCostProps {
  title: string[];
  lines: string[];
}

// A checkout path that visibly shrinks from many small steps to two —
// the visual form of "jeder Klick kostet Käufer" rather than a repeat of
// the sentence.
export function ShopCost({ title, lines }: ShopCostProps) {
  const stepCount = 5;

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
            <HoverLink href="#contact" variant="primary" className="px-8 py-4 text-[18px]">
              Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>

        <div className="mx-auto flex w-full max-w-[440px] flex-col gap-10">
          <div>
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Viele Schritte
            </span>
            <div className="flex items-center gap-2">
              {Array.from({ length: stepCount }, (_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="h-6 w-6 shrink-0 rounded-full border-2 border-ink-faint/50 sm:h-7 sm:w-7"
                />
              ))}
              <span className="ml-2 h-px flex-1 bg-border" />
            </div>
          </div>

          <div>
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-accent-hover">
              Wenige Schritte
            </span>
            <div className="flex items-center gap-3">
              {["1", "2"].map((n, i) => (
                <motion.span
                  key={n}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent-hover text-[15px] font-semibold text-accent-hover sm:h-12 sm:w-12"
                >
                  {n}
                </motion.span>
              ))}
              <span className="ml-1 h-px flex-1 bg-accent-hover" />
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-hover sm:h-12 sm:w-12"
              >
                <Check className="h-5 w-5 text-bg" strokeWidth={3} />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
