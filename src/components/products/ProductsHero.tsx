"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

export function ProductsHero({ breadcrumbs }: { breadcrumbs?: ReactNode }) {
  return (
    <section
      className="relative flex min-h-[60dvh] w-full flex-col overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, #8FAFD4 20%, var(--color-bg) 86%) 0%, var(--color-bg) 62%)",
      }}
    >
      {/* Breadcrumbs sit at the top of the hero, left-aligned with the content — the same place as on /leistungen, /glossar and the article pages. */}
      {breadcrumbs && (
        <div className="mx-auto mb-10 w-full max-w-[1440px]">{breadcrumbs}</div>
      )}
      <div className="mx-auto my-auto flex w-full max-w-[1440px] flex-col items-center text-center">
        <div className="flex max-w-4xl flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[11vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[5vw] xl:text-[84px]"
          >
            Was aus Geschäfts&shy;problemen
            <br />
            wird, wenn man sie{" "}
            <span className="text-link">
              löst
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-[620px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]"
          >
            Jedes Projekt hier begann mit derselben Frage wie Ihres: „Warum
            läuft das bei uns so langsam?&ldquo; — nicht mit einer fertigen
            Vorstellung von Website, Portal oder Automatisierung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <HoverLink href="#contact" variant="outline" className="px-8 py-4 text-[18px]">
              Eigenes Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
