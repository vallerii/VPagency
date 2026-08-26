"use client";

import { motion } from "framer-motion";
// Cube animation is temporarily disabled in favor of the Reactive Lines
// background (see page.tsx) — kept here, commented out, so it can be
// restored later without re-writing it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BoxLoader } from "./ui/box-loader";
import { HoverLink } from "./ui/hover-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh w-full items-center overflow-hidden px-6 pt-30 sm:px-10 lg:min-h-[86dvh] lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-10 relative">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[12vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[8vw] lg:text-[5.5vw] xl:text-[96px]"
          >
            <span className="text-[#0E68FF]">
              Digitale Lösungen
            </span>{" "}
            für Ihr Unternehmen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 max-w-[800px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]"
          >
            Wir gestalten und entwickeln Websites, Online-Shops und
            individuelle Webanwendungen — von der ersten Idee bis zur
            fertigen Lösung
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12"
          >
            <HoverLink href="#contact" variant="outline" className="px-8 py-4 text-[18px] w-full sm:w-auto">
              Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>

        {/* Cube animation — commented out, not removed, while the Reactive
        Lines background (page.tsx) is used instead. Uncomment to restore.
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 flex lg:absolute right-[10%]  items-center justify-center lg:justify-end"
        >
          <div className="opacity-80 sm:scale-90 lg:scale-100 xl:scale-125">
            <BoxLoader />
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
