"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

interface SystemHeroProps {
  title: string[];
  subtitle: string;
}

const tileVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export function SystemHero({ title, subtitle }: SystemHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28"
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, #8FAFD4 20%, var(--color-bg) 86%) 0%, var(--color-bg) 62%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px]">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-white/60"
            >
              System
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-[11vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[4vw] xl:text-[68px]"
            >
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line.split(" ").map((word, j) =>
                    word === "funktionieren" ? (
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
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-[460px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[20px]"
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
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="mx-auto grid w-full max-w-[520px] grid-cols-3 gap-3 rounded-[18px] border border-border bg-card p-4"
          >
            <motion.div
              variants={tileVariants}
              transition={{ duration: 0.45 }}
              className="col-span-1 row-span-2 flex flex-col gap-2.5 rounded-xl bg-bg p-3"
            >
              {["h-2.5 w-8", "h-2.5 w-10", "h-2.5 w-7", "h-2.5 w-9"].map((c, i) => (
                <span key={i} className={`rounded-full bg-accent-tint ${c}`} />
              ))}
            </motion.div>
            <motion.div
              variants={tileVariants}
              transition={{ duration: 0.45 }}
              className="col-span-2 flex flex-col justify-between rounded-xl bg-bg p-4"
            >
              <span className="h-2.5 w-1/2 rounded-full bg-accent-tint" />
              <span className="text-[26px] font-heading font-semibold text-ink">128</span>
            </motion.div>
            <motion.div
              variants={tileVariants}
              transition={{ duration: 0.5 }}
              className="col-span-2 flex items-end gap-1.5 rounded-xl bg-bg p-4"
            >
              {[40, 65, 50, 80, 60, 90].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-full rounded-sm bg-accent-hover/70"
                />
              ))}
            </motion.div>
            <motion.div
              variants={tileVariants}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center rounded-xl bg-accent-tint p-4"
            >
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-accent-hover border-t-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
