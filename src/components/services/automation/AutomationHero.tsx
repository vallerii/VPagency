"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

interface AutomationHeroProps {
  title: string[];
  subtitle: string;
}

const NODES = ["Anfrage", "Prüfung", "CRM", "E-Mail", "Team"];

export function AutomationHero({ title, subtitle }: AutomationHeroProps) {
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
          Fluss
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
                  word === "Ergebnis" ? (
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
          className="relative mt-16 w-full max-w-[720px]"
        >
          <div className="relative flex items-center justify-between">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border"
            />
            <motion.span
              aria-hidden="true"
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent-hover shadow-[0_0_12px_2px_rgba(143,175,212,0.6)]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />
            {NODES.map((n) => (
              <div key={n} className="relative z-10 flex flex-col items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card sm:h-11 sm:w-11">
                  <span className="h-2 w-2 rounded-full bg-accent-hover" />
                </span>
                <span className="text-[11px] font-medium text-ink-faint sm:text-[13px]">{n}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
