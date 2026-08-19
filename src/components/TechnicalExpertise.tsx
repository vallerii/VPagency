"use client";

import { motion } from "framer-motion";
import { SiWordpress, SiShopify, SiLaravel } from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  id: string;
  name: string;
  icon: IconType;
  color: string;
  description: string;
}

const TECHS: TechItem[] = [
  {
    id: "wordpress",
    name: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
    description:
      "Für Unternehmenswebsites und Content-Plattformen, bei denen Inhalte regelmäßig gepflegt und von internen Teams selbst verwaltet werden sollen — ohne Entwickler bei jeder Änderung.",
  },
  {
    id: "shopify",
    name: "Shopify",
    icon: SiShopify,
    color: "#95BF47",
    description:
      "Für E-Commerce-Projekte, bei denen ein stabiler Checkout-Prozess, eine einfache Verwaltung und eine gute Grundlage für weiteres Wachstum entscheidend sind.",
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
    description:
      "Wenn die Geschäftslogik nicht in eine fertige Website oder einen Shop passt: Kundenportale, Buchungssysteme, interne Tools — Lösungen, die sich erweitern statt bei jeder Änderung neu bauen lassen.",
  },
];

export function TechnicalExpertise() {
  return (
    <section className="w-full px-6 pt-24 pb-32 sm:px-10 lg:px-16 lg:pt-32 lg:pb-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.8fr_0.8fr] lg:items-start lg:gap-14">
        

          <div className="flex flex-col gap-6">
            {TECHS.map((t, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`flex flex-col overflow-hidden rounded-[20px] border border-border bg-card sm:flex-row ${
                    reverse ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className="flex min-h-[140px] items-center justify-center sm:min-h-0 sm:w-2/5"
                    style={{ backgroundColor: `${t.color}14` }}
                  >
                    <t.icon size={44} color={t.color} aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
                    <h3 className="text-[19px] font-medium leading-[1.3] tracking-tight text-ink">
                      {t.name}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.55] text-ink-soft">
                      {t.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
            <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Technical expertise
            </span>
            <h2 className="text-balance text-[8vw] font-medium leading-[1.15] tracking-tighter text-ink sm:text-[4vw] lg:text-[2.4vw] xl:text-[48px]">
              Jedes Werkzeug löst
              <br />
              eine klare Aufgabe
            </h2>
            <span className="mt-6 block h-px w-10 bg-accent-hover" aria-hidden="true" />
            <p className="mt-6 text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Wir wählen Technologie nicht nach Trends, sondern nach der
              Aufgabe — das sind die drei Werkzeuge, mit denen wir am
              häufigsten arbeiten
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
