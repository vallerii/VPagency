"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-button";
import { SERVICES } from "@/data/services";

const NAV_ITEMS = [...SERVICES.map((s) => ({ slug: s.slug, label: s.label })), { slug: "produkte", label: "Projekte" }];

export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10"
    >
      <Link href="/" className="inline-flex items-center">
        <img src="/logo-mini.png" alt="VP Digital" className="h-[54px] w-auto" />
      </Link>

      <div className="flex items-center gap-6">
        <nav
          onMouseLeave={() => setHovered(null)}
          className="hidden items-center gap-1 rounded-full border border-border bg-card/80 p-1.5 backdrop-blur-sm lg:flex"
        >
          {NAV_ITEMS.map((s) => {
            const isActive = pathname === `/${s.slug}`;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                onMouseEnter={() => setHovered(s.slug)}
                className={`relative isolate rounded-full px-4 py-2 text-[16px] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-[rgba(143,175,212,0.32)]"
                  />
                ) : (
                  hovered === s.slug && (
                    <motion.span
                      layoutId="header-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-tint"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )
                )}
                {s.label}
              </Link>
            );
          })}
        </nav>

        <HoverLink
          href="#contact"
          variant="secondary"
          className="hidden px-5 py-2.5 h-[54px] text-sm sm:inline-flex"
        >
          Projekt besprechen
        </HoverLink>
      </div>
    </motion.header>
  );
}
