"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Wrench, Workflow, Bot, Plus, X, type LucideIcon } from "lucide-react";
import type { ScopeItem, OutOfScopeItem } from "@/data/services";

interface SystemModulesProps {
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
}

const MODULE_ICONS: LucideIcon[] = [Users, Wrench, Workflow, Bot];

// The same "included" copy, laid out as modules snapping into a
// constructor grid rather than a plain checklist — since this service is
// itself about assembling exactly the modules a business needs.
export function SystemModules({ included, addon, outOfScope }: SystemModulesProps) {
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

        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2">
          {included.map((item, i) => {
            const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 rounded-[20px] border border-border bg-card p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg">
                  <Icon className="h-6 w-6 text-accent-hover" strokeWidth={1.7} />
                </span>
                <p className="text-[17px] leading-[1.4] text-ink sm:text-[18px]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-10 sm:grid-cols-2">
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
