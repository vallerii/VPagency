"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface WebsiteJourneyProps {
  title: string;
  items: string[];
}

// The same symptom copy as everywhere else on the site, but read as a
// single path a visitor walks down — each one a point where an old
// website loses them — ending in the fork the rest of the page is about:
// leave, or find what they came for.
export function WebsiteJourney({ title, items }: WebsiteJourneyProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[900px]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[9vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[2.8vw] xl:text-[52px]"
        >
          {title}
        </motion.h2>

        <div className="relative mt-16 flex flex-col">
          <span
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]"
          />

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-5 py-4 sm:gap-6"
            >
              <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-[13px] font-medium text-ink-faint sm:h-10 sm:w-10">
                {i + 1}
              </span>
              <p className="pt-1 text-[17px] leading-[1.4] text-ink-soft sm:text-[19px]">{item}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: items.length * 0.1 }}
            className="relative flex items-start gap-5 py-4 sm:gap-6"
          >
            <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-hover sm:h-10 sm:w-10">
              <Check className="h-4 w-4 text-bg" strokeWidth={3} />
            </span>
            <p className="pt-1 text-[17px] font-medium leading-[1.4] text-ink sm:text-[19px]">
              Oder: der Besucher findet sofort, weswegen er kam, und hinterlässt eine Anfrage
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
