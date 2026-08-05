"use client";

import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-button";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10"
    >
      <a href="#top" className="text-[21px] font-semibold tracking-tight text-ink">
        VP&nbsp;Digital
      </a>
      <HoverLink
        href="#contact"
        variant="secondary"
        className="hidden px-5 py-2.5 text-sm sm:inline-flex"
      >
        Обсудить проект
      </HoverLink>
    </motion.header>
  );
}
