"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

interface WebsiteHeroProps {
  title: string[];
  subtitle: string;
}

// The browser window "assembles" itself: chrome first, then each UI block
// staggers in — a nav bar, a heading, two text lines, a button and an
// image tile — reading as "a site coming together" rather than a static
// screenshot. Pure whileInView/animate stagger, no scroll-scrubbing.
const blockVariants = {
  hidden: { opacity: 0, y: 10, scaleX: 0.6 },
  show: { opacity: 1, y: 0, scaleX: 1 },
};

export function WebsiteHero({ title, subtitle }: WebsiteHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28"
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, #578CB5 20%, var(--color-bg) 86%) 0%, var(--color-bg) 62%)",
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
              Struktur
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
                    word === "verkaufen" ? (
                      <span
                        key={j}
                        className="text-[#0E68FF]"
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
            transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}
            className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[18px] border border-border bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.4 }}
                className="ml-3 h-5 flex-1 rounded-full bg-bg"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.45 }}
                className="h-6 w-2/5 origin-left rounded-md bg-bg"
              />
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.45 }}
                className="mt-2 h-8 w-4/5 origin-left rounded-md bg-accent-tint"
              />
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.45 }}
                className="h-3.5 w-full origin-left rounded-md bg-bg"
              />
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.45 }}
                className="h-3.5 w-5/6 origin-left rounded-md bg-bg"
              />
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.45 }}
                className="mt-2 h-10 w-2/5 origin-left rounded-full bg-accent-hover"
              />
              <motion.span
                variants={blockVariants}
                transition={{ duration: 0.5 }}
                className="mt-3 h-28 w-full origin-top rounded-lg bg-bg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
