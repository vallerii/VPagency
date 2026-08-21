"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

interface ServiceHeroProps {
  title: string[];
  subtitle: string;
}

export function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section
      className="relative flex min-h-[70dvh] w-full items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10 lg:px-16 min-h-[80dvh]"
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, #578CB5 20%, var(--color-bg) 86%) 0%, var(--color-bg) 62%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center text-center">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-faint transition-colors hover:text-ink"
        >
          ← Zur Startseite
        </motion.a>

        <div className="flex max-w-4xl flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[12vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[8vw] lg:text-[5.5vw] xl:text-[96px]"
          >
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
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
      </div>
    </section>
  );
}
