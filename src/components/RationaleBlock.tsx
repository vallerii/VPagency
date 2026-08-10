"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RationaleBlock() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="w-full px-6 py-32 text-center sm:px-10 lg:px-16 lg:py-44">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto  text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        Die meisten Anbieter
        <br />
        lösen nur
        <br />
        ihre eigene Aufgabe
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto mt-16 flex max-w-4xl grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]"
      >
        <p className="w-full">
          Der Designer liefert Design,
          <br />
          der Entwickler nur Code
        </p>
        <p className="w-full">
          Niemand denkt
          <br />
          das Projekt als Ganzes mit
        </p>
        <p className="w-full">
          Wir übernehmen
          <br />
          Strategie, Design und Technik zusammen
        </p>
      </motion.div>

      <div
        className="relative mx-auto mt-20 flex w-full max-w-4xl items-center justify-between"
        aria-hidden="true"
      >
        <span className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-border">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className={`block h-full w-full bg-accent-hover ${!prefersReduced ? "pulse-line" : ""}`}
          />
        </span>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.35 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-3.5 w-3.5 rounded-full bg-accent-hover shadow-[0_0_0_5px_var(--color-accent-tint)]"
          />
        ))}
      </div>
    </section>
  );
}
