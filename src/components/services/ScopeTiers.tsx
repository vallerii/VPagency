"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Plus, X, type LucideIcon } from "lucide-react";
import type { ScopeItem, OutOfScopeItem } from "@/data/services";

interface ScopeTiersProps {
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
}

function ColumnIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
      <Icon className="h-7 w-7 text-accent-hover" strokeWidth={1.6} />
    </span>
  );
}

export function ScopeTiers({ included, addon, outOfScope }: ScopeTiersProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-balance text-center text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
        >
          Was ist enthalten
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <ColumnIcon icon={Check} />
            <span className="text-[22px] font-medium leading-[1.3] tracking-tight text-ink">
              Enthalten
            </span>
            <ul className="mt-6 flex flex-col gap-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.4] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <ColumnIcon icon={Plus} />
            <span className="text-[22px] font-medium leading-[1.3] tracking-tight text-ink">
              Optional erhältlich
            </span>
            <ul className="mt-6 flex flex-col gap-4">
              {addon.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.4] text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-tint">
                    <Plus className="h-3 w-3 text-accent-hover" strokeWidth={3} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <ColumnIcon icon={X} />
            <span className="text-[22px] font-medium leading-[1.3] tracking-tight text-ink">
              Nicht enthalten
            </span>
            <ul className="mt-6 flex flex-col gap-4">
              {outOfScope.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.4] text-ink-faint">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border">
                    <X className="h-3 w-3 text-ink-faint" strokeWidth={3} />
                  </span>
                  <span>
                    {item.text}
                    <br />
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex items-center justify-center gap-6"
        >
          <span className="hidden h-px flex-1 bg-accent-hover sm:block" />
          <span className="whitespace-nowrap rounded-full bg-accent-tint px-6 py-2.5 text-center text-[15px] font-medium text-accent-hover">
            Keine Schablonen, kein Ballast — nur das, was Ihr Unternehmen wirklich braucht
          </span>
          <span className="hidden h-px flex-1 bg-accent-hover sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
