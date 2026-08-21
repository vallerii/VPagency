"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";
import type { ScopeItem, OutOfScopeItem } from "@/data/services";

interface AutomationFlowProps {
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
}

// Same "included" copy as the other pages, but chained top-to-bottom as
// a single connected process — each step visibly feeding the next — to
// match the page's flow language instead of a checklist.
export function AutomationFlow({ included, addon, outOfScope }: AutomationFlowProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-balance text-center text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
        >
          Was ist enthalten
        </motion.h2>

        <div className="mx-auto mt-20 flex max-w-[640px] flex-col">
          {included.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex w-full items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-hover text-[14px] font-semibold text-bg">
                  {i + 1}
                </span>
                <p className="text-[17px] leading-[1.4] text-ink sm:text-[18px]">{item.text}</p>
              </motion.div>
              {i < included.length - 1 && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 28 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                  className="flex w-px flex-col items-center justify-center bg-border"
                >
                  <ArrowRight className="h-4 w-4 rotate-90 text-accent-hover" strokeWidth={2.5} />
                </motion.span>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-[900px] grid-cols-1 gap-10 sm:grid-cols-2">
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
