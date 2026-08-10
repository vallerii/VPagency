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
    title: "Веб-сайты",
    description:
      "Сайт, который объясняет ваше предложение и сам приводит к заявке, вместо визитки, которую приходится пересказывать голосом.",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "Интернет-магазины",
    description:
      "Короткий путь от «хочу» до «купил», без лишних шагов в оформлении заказа и без ручного обновления каталога.",
  },
  {
    slug: "custom-software",
    icon: Layers,
    title: "Индивидуальные решения",
    description:
      "Когда типовой сайт или магазин не покрывает то, как реально устроен ваш бизнес: порталы, внутренние инструменты и автоматизация под конкретную задачу.",
  },
];

export function WhatWeBuild() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.8fr] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance text-[8vw] font-medium leading-[1.15] tracking-tighter text-ink sm:text-[4vw] lg:text-[2.4vw] xl:text-[48px]">
              Три способа
              <br />
              навести порядок
            </h2>
            <span className="mt-6 block h-px w-10 bg-accent-hover" aria-hidden="true" />
            <p className="mt-6 text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Мы не начинаем с технологии — сначала разбираемся, что должно
              измениться в бизнесе. Дальше выбираем инструмент.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col rounded-[18px] border border-border bg-card p-6"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                  <p.icon className="h-5 w-5 text-accent-hover" strokeWidth={1.6} />
                </span>
                <h3 className="text-[17px] font-medium leading-[1.3] tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.55] text-ink-soft">
                  {p.description}
                </p>
                <Link
                  href={`/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-hover transition-colors hover:text-ink"
                >
                  Подробнее →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
