"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  "Metallverarbeitung",
  "Industrieautomation",
  "Labortechnik",
  "Präzisionsmesstechnik",
  "Verpackung",
  "Bauwesen",
  "IT & Cybersicherheit",
  "Maschinenbau",
  "Fachmedien",
];

export function ProductsApproach() {
  return (
    <section className="w-full px-6 pt-28 sm:px-10 lg:px-16 lg:pt-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Wie wir anfangen
            </span>
            <h2 className="text-balance text-[8vw] font-heading font-semibold leading-[1.15] tracking-tighter text-ink sm:text-[4vw] lg:text-[2.6vw] xl:text-[50px]">
              Keiner dieser Kunden kam mit „Wir brauchen eine Website“
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink-soft sm:text-[19px] lg:text-[20px]">
              Sie kamen mit einem Geschäft, das schneller wachsen sollte, als
              die eigenen Werkzeuge es zuließen. Ein Werk in mehreren
              Ländern, das niemand außer der IT-Abteilung aktualisieren
              konnte. Ein Katalog, der sich nicht mehr auf die richtigen
              Kunden bezog. Ein Team, das jede Anfrage noch einmal von Hand
              erklärte.
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-ink-soft sm:text-[19px] lg:text-[20px]">
              Erst danach haben wir gemeinsam entschieden, was das richtige
              Werkzeug dafür ist — eine Website, ein Portal oder ein Prozess,
              der einfach automatisch läuft. Deshalb sehen die Projekte
              unten so unterschiedlich aus, obwohl der Ausgangspunkt bei
              allen derselbe war.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center rounded-[24px] border border-border bg-card p-8 sm:p-10"
          >
            <span className="mb-5 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Branchen auf dieser Seite
            </span>
            <div className="flex flex-wrap gap-2.5">
              {INDUSTRIES.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-bg px-4 py-2 text-[14px] font-medium text-ink-soft"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
