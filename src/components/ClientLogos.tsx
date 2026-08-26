"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASES } from "@/data/cases";

// Only clients we have an actual logo file for show up in the grid — the
// filenames match public/logos/<slug>.<ext> shipped alongside this
// component. We currently have 8 (CASES has a 9th, VOB, with no supplied
// logo file yet — add public/logos/vob.<ext> and a LOGO_FILES entry to
// bring it in). Those still show up on the full /produkte page either way.
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

// Checkerboard wall: each column alternates a "big" (row-span-2) cell with
// a "small" (row-span-1) one, and neighbouring columns start on the
// opposite size — big/small/big/small next to small/big/small/big — so
// the whole thing reads as a staggered brick pattern rather than a plain
// grid. Placement is fully explicit (col-start/row-start/row-span) per
// breakpoint, independently for the 2-column mobile stack and the
// 4-column desktop wall, because which cell is "big" differs between the
// two (a cell that's tall on mobile can be the short one on desktop).
const GRID_ITEMS: { slug: string; place: string; img: string }[] = [
  // ---- column 1 (mobile) / column 1 (desktop) — starts big ----
  {
    slug: "wecubexx",
    place: "col-start-1 row-start-1 row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2",
    img: "h-10 lg:h-11",
  },
  {
    slug: "proctec",
    place: "col-start-1 row-start-3 row-span-1 lg:col-start-1 lg:row-start-3 lg:row-span-1",
    img: "h-10 lg:h-12",
  },
  {
    slug: "erfi",
    place: "col-start-1 row-start-4 row-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-1",
    img: "h-10 lg:h-12",
  },
  {
    slug: "gbs",
    place: "col-start-1 row-start-6 row-span-1 lg:col-start-2 lg:row-start-2 lg:row-span-2",
    img: "h-7 lg:h-11",
  },
  // ---- column 2 (mobile) / columns 3–4 (desktop) — starts small ----
  {
    slug: "wetropa",
    place: "col-start-2 row-start-1 row-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2",
    img: "h-7 lg:h-11",
  },
  {
    slug: "lemming",
    place: "col-start-2 row-start-2 row-span-2 lg:col-start-3 lg:row-start-3 lg:row-span-1",
    img: "h-10 lg:h-8",
  },
 
  {
    slug: "cnag",
    place: "col-start-2 row-start-4 row-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-1",
    img: "h-10 lg:h-11",
  },
   {
    slug: "teupen",
    place: "col-start-2 row-start-5 row-span-2 lg:col-start-4 lg:row-start-2 lg:row-span-2",
    img: "h-30 lg:h-40",
  },
];

const CASE_BY_SLUG = new Map(CASES.map((c) => [c.slug, c]));

export function ClientLogos() {
  return (
    <section className="w-full px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-center text-[7vw] font-heading font-semibold leading-[1.25] tracking-tighter text-ink sm:text-[3.6vw] lg:text-[2vw] xl:text-[34px]"
        >
          Unternehmen aus Industrie, Bau und Logistik
          <br />
          <span className="text-[#8FAFD4]">vertrauen</span> auf VP Digital
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid w-full grid-cols-2 auto-rows-[90px] gap-3 sm:mt-14 lg:grid-cols-4 lg:auto-rows-[110px]"
        >
          {GRID_ITEMS.map(({ slug, place, img }) => {
            const c = CASE_BY_SLUG.get(slug);
            if (!c) return null;
            return (
              <div
                key={slug}
                className={`flex items-center justify-center rounded-2xl border border-border bg-card px-6 transition-colors duration-300 hover:border-accent-line/50 hover:bg-[#24252b] ${place}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_FILES[slug]}
                  alt={c.name}
                  className={`w-auto max-w-full object-contain ${img}`}
                />
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 sm:mt-12"
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
