"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { ScopeItem, OutOfScopeItem } from "@/data/services";

interface WebsiteStagesProps {
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
}

// The exact same "included" copy, read as stages of building a site
// instead of a checklist — a horizontally scrolling row of numbered
// cards connected by a line, like a build timeline.
export function WebsiteStages({ included, addon, outOfScope }: WebsiteStagesProps) {
  return (
    <section className="w-full py-32 sm:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
        >
          Was ist enthalten
        </motion.h2>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1440px] overflow-x-auto pb-4 pl-6 sm:pl-10 lg:pl-16 [scrollbar-width:thin]">
        <div className="relative flex w-max gap-6 pr-6 sm:pr-10 lg:pr-16">
          <span
            aria-hidden="true"
            className="absolute left-6 right-6 top-9 h-px bg-border"
          />
          {included.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex w-[260px] shrink-0 flex-col rounded-[18px] border border-border bg-card p-6 sm:w-[300px]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-hover text-[14px] font-semibold text-bg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-[17px] leading-[1.4] text-ink">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Optional erhältlich
            </span>
            <div className="flex flex-wrap gap-2.5">
              {addon.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[14px] font-medium text-ink-soft"
                >
                  <Plus className="h-3.5 w-3.5 text-accent-hover" strokeWidth={3} />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Nicht enthalten
            </span>
            <ul className="flex flex-col gap-3">
              {outOfScope.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-ink-faint">
                  <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                  <span>
                    {item.text}{" "}
                    <Link
                      href={`/${item.linkSlug}`}
                      className="font-medium text-accent-hover transition-colors hover:text-ink"
                    >
                      {item.linkLabel} →
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
