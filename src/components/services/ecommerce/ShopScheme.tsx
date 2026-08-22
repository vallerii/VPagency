"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Store, CreditCard, Boxes, BarChart3, Plus, X, type LucideIcon } from "lucide-react";
import type { ScopeItem, OutOfScopeItem } from "@/data/services";

interface ShopSchemeProps {
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
}

const SCHEME_ICONS: LucideIcon[] = [Store, CreditCard, Boxes, BarChart3];

// The same "included" copy as a small connected scheme — store, payment,
// inventory, catalog all wired to each other — instead of a flat list,
// since the point of the section is that these parts talk to each other.
export function ShopScheme({ included, addon, outOfScope }: ShopSchemeProps) {
  return (
    <section className="w-full px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
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

        <div className="mx-auto mt-16 grid  grid-cols-1 gap-4 md:grid-cols-[1fr_1fr]">
          <div className="relative mx-auto mt-16 grid max-w-[640px] grid-cols-2 gap-4">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-accent-hover sm:h-10 sm:w-10"
            />
            {included.map((item, i) => {
              const Icon = SCHEME_ICONS[i % SCHEME_ICONS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-3 rounded-[18px] border border-border bg-card p-5 sm:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg">
                    <Icon className="h-5 w-5 text-accent-hover" strokeWidth={1.7} />
                  </span>
                  <p className="text-[14px] leading-[1.4] text-ink sm:text-[15px]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-10 ">
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
      </div>
    </section>
  );
}
