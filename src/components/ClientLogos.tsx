"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASES } from "@/data/cases";

// Only clients we have an actual logo file for run in the strip — the
// filenames match public/logos/<slug>.<ext> shipped alongside this
// component. CASES itself may contain additional case studies (e.g. ones
// without a supplied logo yet); those still show up on the full /produkte
// page, just not here.
const LOGO_FILES: Record<string, string> = {
  wecubexx: "/logos/wecubexx.png",
  proctec: "/logos/proctec.svg",
  erfi: "/logos/erfi.svg",
  gbs: "/logos/gbs.svg",
  wetropa: "/logos/wetropa.png",
  lemming: "/logos/lemming.png",
  cnag: "/logos/cnag.svg",
  teupen: "/logos/teupen.png",
};

const LOGO_CASES = CASES.filter((c) => LOGO_FILES[c.slug]);

export function ClientLogos() {
  // Repeated enough times, with an even count, that translating by exactly
  // half the strip width always lines up seamlessly — same technique as
  // TechMarquee.
  const loop = Array.from({ length: 6 }, () => LOGO_CASES).flat();

  return (
    <section className="w-full px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-[13px] font-medium uppercase tracking-wide text-ink-faint"
        >
          Unternehmen, die uns vertrauen
        </motion.span>

        <div className="relative mt-10 w-full overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-28"
          />
          <div className="flex w-max items-center animate-marquee">
            {loop.map((c, i) => (
              <span
                key={`${c.slug}-${i}`}
                className="inline-flex shrink-0 items-center pr-14 sm:pr-20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_FILES[c.slug]}
                  alt={c.name}
                  className="h-7 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9"
                />
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <Link
            href="/produkte"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Alle Projekte ansehen
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
