"use client";

import { motion } from "framer-motion";

const QUESTIONS = [
  "Für wen bauen wir?",
  "Welches Problem lösen wir?",
  "Welchen Mehrwert schafft die Lösung für das Unternehmen?",
  "Woran erkennen wir, ob sie funktioniert?",
];

const RING_SIZES = ["140vw", "108vw", "78vw", "50vw", "26vw"];

export function ProductThinking() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E68FF]/60 px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        {RING_SIZES.map((size, i) => (
          <span
            key={size}
            className="target-ring absolute left-1/2 top-1/2 rounded-full border-2 border-accent/60"
            style={{
              width: size,
              height: size,
              opacity: 0.28 + i * 0.14,
              animationDuration: `${4 + i * 0.6}s`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-bg/60"
        >
          Product thinking
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
        >
          <span className="block text-bg">Wir denken nicht in Projekten.</span>
          <span className="mt-3 block sm:mt-20 text-bg">
            Wir denken in <span className="text-ink">Produkten</span>
          </span>
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
