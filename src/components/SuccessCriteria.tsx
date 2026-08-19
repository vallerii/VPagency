"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Row {
  before: string;
  after: string;
}

const ROWS: Row[] = [
  { before: "Anfragen gehen verloren", after: "Anfragen und Kunden gehen nicht mehr verloren" },
  {
    before: "Mitarbeiter wiederholen dieselben Aufgaben manuell",
    after: "Weniger manuelle, sich wiederholende Arbeit im Team",
  },
  {
    before: "Alles hängt an einer Person",
    after: "Das Geschäft hängt weniger von einer Person ab (auch von Ihnen)",
  },
  {
    before: "Unklar, was im Unternehmen wirklich passiert",
    after: "Die Geschäftsführung sieht, was im Unternehmen wirklich passiert",
  },
  {
    before: "Wachstum bringt Prozesse zum Einsturz",
    after: "Prozesse halten dem Wachstum stand, statt daran zu scheitern",
  },
  {
    before: "Ein Sammelsurium einzelner Dienstleister",
    after: "Ein klarer Partner statt vieler einzelner Dienstleister",
  },
];

export function SuccessCriteria() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl text-balance text-center text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        Das Ergebnis für Sie
      </motion.h2>

      <div className="mx-auto mt-20  w-full max-w-[1440px]">

        <div className="relative">
          <span
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border sm:block"
            aria-hidden="true"
          />

          {ROWS.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-2 gap-6 border-t border-border py-6 sm:gap-12 sm:py-7"
            >
              <p className="text-[16px] leading-[1.4] text-ink-faint line-through sm:text-right sm:text-[19px]">
                {row.before}
              </p>
              <p className="flex items-center gap-3 text-[16px] font-medium leading-[1.4] text-ink sm:text-[19px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                {row.after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
