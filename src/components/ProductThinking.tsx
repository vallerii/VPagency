"use client";

import { motion } from "framer-motion";

const QUESTIONS = [
  "Für wen bauen wir?",
  "Welches Problem lösen wir?",
  "Welchen Mehrwert schafft die Lösung für das Unternehmen?",
  "Woran erkennen wir, ob sie funktioniert?",
];

export function ProductThinking() {
  return (
    <section className="w-full bg-accent-tint px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-soft"
        >
          Product thinking
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
        >
          Wir denken nicht in Projekten.
          <br />
          Wir denken in Produkten
        </motion.h2>

        {/* <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-14 inline-flex flex-col items-start gap-4 text-left"
        >
          {QUESTIONS.map((q) => (
            <li
              key={q}
              className="flex items-center gap-3 text-[16px] leading-[1.5] text-ink sm:text-[19px]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {q}
            </li>
          ))}
        </motion.ul> */}
      </div>
    </section>
  );
}
