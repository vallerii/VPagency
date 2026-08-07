"use client";

import { motion } from "framer-motion";

interface RationaleStripProps {
  title: string[];
  lines: string[];
}

export function RationaleStrip({ title, lines }: RationaleStripProps) {
  return (
    <section className="w-full bg-card px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl text-balance text-[9vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[3.6vw] xl:text-[72px]"
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
        className="mx-auto mt-12 flex max-w-3xl flex-col gap-4 text-[16px] leading-[1.5] text-ink-soft sm:flex-row sm:justify-center sm:gap-8 sm:text-[17px]"
      >
        {lines.map((line, i) => (
          <p key={i} className="sm:max-w-[220px]">
            {line}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
