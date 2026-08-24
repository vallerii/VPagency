"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";
import { Package, ShoppingCart, CreditCard } from "lucide-react";

interface ShopHeroProps {
  title: string[];
  subtitle: string;
}

const STEPS = [
  { icon: Package, label: "Produkt" },
  { icon: ShoppingCart, label: "Warenkorb" },
  { icon: CreditCard, label: "Kasse" },
];

export function ShopHero({ title, subtitle }: ShopHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28"
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, #578CB5 20%, var(--color-bg) 86%) 0%, var(--color-bg) 62%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center text-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-white/60"
        >
          Conversion
        </motion.span>

        <div className="flex max-w-4xl flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[12vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[8vw] lg:text-[5.5vw] xl:text-[96px]"
          >
            {title.map((line, i) => (
              <span key={i} className="block">
                {line.split(" ").map((word, j) =>
                  word === "Käufer" ? (
                    <span
                      key={j}
                      className="bg-gradient-to-r from-[#578CB5] to-[#0E68FF] bg-clip-text text-transparent"
                    >
                      {j > 0 ? " " : ""}
                      {word}
                    </span>
                  ) : (
                    `${j > 0 ? " " : ""}${word}`
                  )
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-[560px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <HoverLink href="#contact" variant="outline" className="px-8 py-4 text-[18px]">
              Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mt-16 w-full max-w-[560px]"
        >
          <div className="relative flex items-center justify-between">
            <span
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-border"
            />
            <motion.span
              aria-hidden="true"
              className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-sm bg-accent-hover shadow-[0_0_12px_2px_rgba(143,175,212,0.6)]"
              animate={{ left: ["10%", "50%", "90%", "90%", "10%"] }}
              transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.35, 0.5, 0.85, 1], ease: "easeInOut" }}
            />
            {STEPS.map((s) => (
              <div key={s.label} className="relative z-10 flex flex-col items-center gap-2.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card sm:h-12 sm:w-12">
                  <s.icon className="h-5 w-5 text-accent-hover" strokeWidth={1.7} />
                </span>
                <span className="text-[12px] font-medium text-ink-faint sm:text-[13px]">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
