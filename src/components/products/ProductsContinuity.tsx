"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Verstehen",
    text: "Wir schauen uns an, wo im Geschäft gerade Zeit oder Kunden verloren gehen — bevor über eine Lösung gesprochen wird.",
  },
  {
    n: "02",
    title: "Bauen",
    text: "Design, Entwicklung und Geschäftsverständnis sitzen im selben Team, also entsteht das passende Werkzeug für genau diese Aufgabe.",
  },
  {
    n: "03",
    title: "Weiterentwickeln",
    text: "Nach dem Launch zeigt sich erst, was Nutzer wirklich brauchen. Wir bleiben dabei und entwickeln mit dem Geschäft weiter.",
  },
];

export function ProductsContinuity() {
  return (
    <section className="w-full px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Nach dem Launch
          </span>
          <h2 className="text-balance text-[8vw] font-heading font-semibold leading-[1.15] tracking-tighter text-ink sm:text-[4vw] lg:text-[2.6vw] xl:text-[50px]">
            Für keinen dieser Kunden war der Launch das Ende
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col rounded-[18px] border border-border bg-card p-6"
            >
              <span className="text-[15px] font-medium text-accent-hover">{s.n}</span>
              <h3 className="mt-3 text-[17px] font-medium leading-[1.3] tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.55] text-ink-soft">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
