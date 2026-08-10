"use client";

import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-button";
import {
  Layers,
  Table2,
  Mail,
  MessageCircle,
  FileText,
  Inbox,
  Calendar,
  Globe,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

interface Chip {
  label: string;
  icon: LucideIcon;
  rotate: number;
  offset: number;
}

const CHIPS: Chip[] = [
  { label: "CRM", icon: Layers, rotate: -4, offset: 0 },
  { label: "Excel", icon: Table2, rotate: 3, offset: 10 },
  { label: "Email", icon: Mail, rotate: -2, offset: -6 },
  { label: "WhatsApp", icon: MessageCircle, rotate: 4, offset: 6 },
  { label: "Документ", icon: FileText, rotate: -3, offset: -8 },
  { label: "Заявка", icon: Inbox, rotate: 2, offset: 8 },
  { label: "Календарь", icon: Calendar, rotate: -2, offset: -4 },
  { label: "Сайт", icon: Globe, rotate: 3, offset: 4 },
  { label: "Чат", icon: MessageSquare, rotate: -3, offset: -10 },
];

export function About() {
  return (
    <section className="w-full px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.8fr_1fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
              Технологии и бизнес
              <br />
              не должны жить отдельно
            </h2>
            <span className="mt-6 block h-px w-10 bg-accent-hover" aria-hidden="true" />
            <p className="mt-6  text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Каждый проект для нас — продукт, который продолжает жить и
              после запуска. Мы смотрим на сайты, магазины и сервисы целиком:
              бизнес, пользователи, дизайн и технологии — вместе, а не по
              очереди.
            </p>
            <p className="mt-4  text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Разработка, дизайн и понимание бизнеса живут в одной команде —
              поэтому не приходится объяснять задачу трижды разным
              подрядчикам. Так рождаются решения, которые не просто хорошо
              выглядят и работают технически, а приносят измеримую пользу и
              растут вместе с бизнесом.
            </p>

            <div className="mt-10">
              <HoverLink href="#contact" variant="primary" className="px-8 py-4 text-[18px]">
                Рассказать о задаче
              </HoverLink>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
            {CHIPS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ transform: `rotate(${c.rotate}deg) translateY(${c.offset}px)` }}
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-[0_1px_2px_rgba(23,23,23,0.03)]"
              >
                <c.icon className="h-4 w-4 text-accent-hover" strokeWidth={1.8} />
                <span className="whitespace-nowrap text-[13px] font-medium text-ink-soft sm:text-[14px]">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
