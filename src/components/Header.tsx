"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-button";
import { SERVICES } from "@/data/services";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10"
    >
      <Link href="/" className="text-[21px] font-semibold tracking-tight text-ink">
        VP&nbsp;Digital
      </Link>

      <div className="flex items-center gap-8">
        <nav className="hidden items-center gap-6 lg:flex">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <HoverLink
          href="#contact"
          variant="secondary"
          className="hidden px-5 py-2.5 text-sm sm:inline-flex"
        >
          Обсудить проект
        </HoverLink>
      </div>
    </motion.header>
  );
}
