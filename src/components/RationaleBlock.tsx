"use client";

import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-button";

export function RationaleBlock() {
  return (
    <section className="w-full px-6 py-32 text-center sm:px-10 lg:px-16 lg:py-44">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto  text-balance text-[10vw] font-medium leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[5vw] xl:text-[104px]"
      >
        Это происходит
        <br />
        почти с каждым
        <br />
        растущим бизнесом.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto mt-16 flex max-w-4xl grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]"
      >
        <p className="w-full">
          Бизнес растёт быстрее,
          <br />
          чем процессы.
        </p>
        <p className="w-full">
          Каждый подрядчик
          <br />
          решает только свою задачу.
        </p>
        <p className="w-full">
          Поэтому появляются
          <br />
          не связанные между собой решения.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-16 flex w-full max-w-4xl items-center justify-between" aria-hidden="true">
        <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-accent/35" />
        {[0, 1, 2].map((i) => (
          <span key={i} className="relative h-2.5 w-2.5 rounded-full bg-accent-hover" />
        ))}
      </div>

      <div className="mt-14">
        <HoverLink href="#contact" variant="secondary" className="px-8 py-4 text-[16px]">
          Нужна помощь?
        </HoverLink>
      </div>
    </section>
  );
}
