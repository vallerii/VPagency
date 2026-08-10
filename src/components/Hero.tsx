"use client";

import { motion } from "framer-motion";
import { BoxLoader } from "./ui/box-loader";
import { HoverLink } from "./ui/hover-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh w-full items-center overflow-hidden px-6 pt-30 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-10 relative">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[11vw] font-medium leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[5vw] xl:text-[100px]"
          >
            Не знаете, что нужно бизнесу? Мы разберёмся
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 max-w-[800px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px] xl:text-[26px]"
          >
            Разбираемся в проблеме бизнеса и предлагаем решение, которое
            действительно работает
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12"
          >
            <HoverLink href="#contact" variant="primary" className="px-8 py-4 text-[18px] w-full sm:w-auto">
              Рассказать о задаче
            </HoverLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex lg:absolute right-[10%]  items-center justify-center lg:justify-end"
        >
          <div className="sm:scale-100 lg:scale-110 xl:scale-150">
            <BoxLoader />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
