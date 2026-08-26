"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  SlidersHorizontal,
  Workflow,
  LifeBuoy,
  User,
  Search,
  Star,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { HoverLink } from "@/components/ui/hover-button";

interface RationaleStripProps {
  slug: string;
  title: string[];
  lines: string[];
}

const THEME_ICON: Record<string, LucideIcon> = {
  websites: Globe,
  ecommerce: ShoppingCart,
  "custom-software": SlidersHorizontal,
  automation: Workflow,
  support: LifeBuoy,
};

const BADGES: { icon: LucideIcon; label: string; top: string; left: string; delay: number }[] = [
  { icon: User, label: "Kunde", top: "4%", left: "0%", delay: 0.5 },
  { icon: Search, label: "Aufgabe", top: "10%", left: "64%", delay: 0.6 },
  { icon: BadgeCheck, label: "Ergebnis", top: "66%", left: "60%", delay: 0.7 },
  { icon: Star, label: "Lösung", top: "78%", left: "2%", delay: 0.8 },
];

const RING_DOTS = ["top-0 left-1/2", "top-1/2 left-full", "top-full left-[62%]"];

function RationaleVisual({ slug }: { slug: string }) {
  const Icon = THEME_ICON[slug] ?? Globe;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px] ">
      <div className="absolute inset-[-70%] rounded-full border border-accent-hover/62" />
      <div className="absolute inset-[-30%] rounded-full border border-accent-hover/72" />
      <div className="absolute inset-[5%] rounded-full border border-accent-hover/82" />
      <div className="absolute inset-[24%] rounded-full border border-accent-hover/92" />

      {RING_DOTS.map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent`}
        />
      ))}


      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-accent-tint sm:h-28 sm:w-28"
      >
        <Icon className="h-12 w-12 text-accent-hover" strokeWidth={1.5} />
      </motion.div>

      {BADGES.map(({ icon: Icon, label, top, left, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ top, left }}
          className="absolute inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-ink shadow-[0_4px_16px_-6px_rgba(23,23,23,0.12)] sm:text-[14px] lg:text-[18px]"
        >
          <Icon className="h-6 w-6 text-accent-hover" strokeWidth={2} />
          {label}
        </motion.div>
      ))}
    </div>
  );
}

export function RationaleStrip({ slug, title, lines }: RationaleStripProps) {
  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32 min-h-[85dvh] overflow-hidden ">
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
                {line.split(" ").map((word, j) =>
                  word === "stillsteht" ? (
                    <span
                      key={j}
                      className="bg-gradient-to-r from-[#8FAFD4] to-[#0E68FF] bg-clip-text text-transparent"
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

        <RationaleVisual slug={slug} />
      </div>
    </section>
  );
}
