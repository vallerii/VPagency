"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Layers, type LucideIcon } from "lucide-react";

interface Pillar {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    slug: "websites",
    icon: Globe,
    title: "Websites",
    description:
      "Unternehmenswebsites, die Ihr Angebot klar erklären und selbst zur Anfrage führen — statt einer Visitenkarte, die Sie am Telefon erst erklären müssen.",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Ein kurzer Weg von „Ich will“ zu „Ich habe gekauft“ — ohne unnötige Schritte im Checkout und ohne manuell gepflegten Katalog.",
  },
  {
    slug: "custom-software",
    icon: Layers,
    title: "Custom Solutions",
    description:
      "Wenn eine Standardlösung nicht zu Ihrem Geschäft passt: Portale, interne Tools und Automatisierung für die jeweilige Aufgabe.",
  },
];

export function WhatWeBuild() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 pt-32 lg:pt-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.8fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              What we build
            </span>
            <h2 className="text-balance text-[8vw] font-heading font-semibold leading-[1.15] tracking-tighter text-ink sm:text-[4vw] lg:text-[2.4vw] xl:text-[48px]">
              Websites, Shops
              <br />
              und individuelle Lösungen
            </h2>
            <span className="mt-6 block h-[2px] w-10 bg-accent-hover" aria-hidden="true" />
            <p className="mt-6 text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Jeder Bereich verlangt eigene Erfahrung. Wir bringen sie in
              allen dreien mit — von der ersten Idee bis zur fertigen
              Lösung
            </p>
          </motion.div>

          <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex h-full flex-col rounded-[18px] border border-border bg-[#8FAFD4]/30 p-6"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg">
                  <p.icon className="h-7 w-7 text-accent-hover" strokeWidth={1.6} />
                </span>
                <h3 className="text-[17px] font-medium leading-[1.3] tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[16px] leading-[1.55] text-ink-soft">
                  {p.description}
                </p>
                <Link
                  href={`/${p.slug}`}
                  className="mt-auto uppercase inline-flex items-center gap-1.5 pt-5 text-[13px] font-medium text-[#0E68FF] transition-colors hover:text-ink"
                >
                  Mehr erfahren →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
