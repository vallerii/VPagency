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
  top: number;
  left: number;
}

// top/left are chaotic desktop scatter coordinates (in %), spread across
// the full height of the block rather than a tidy grid.
const CHIPS: Chip[] = [
  { label: "CRM", icon: Layers, rotate: -6, offset: 0, top: 2, left: 8 },
  { label: "Excel", icon: Table2, rotate: 4, offset: 10, top: 0, left: 50 },
  { label: "Email", icon: Mail, rotate: -3, offset: -6, top: 18, left: 72 },
  { label: "WhatsApp", icon: MessageCircle, rotate: 5, offset: 6, top: 34, left: 2 },
  { label: "Dokument", icon: FileText, rotate: -4, offset: -8, top: 46, left: 46 },
  { label: "Anfrage", icon: Inbox, rotate: 3, offset: 8, top: 62, left: 12 },
  { label: "Kalender", icon: Calendar, rotate: -5, offset: -4, top: 56, left: 66 },
  { label: "Website", icon: Globe, rotate: 4, offset: 4, top: 82, left: 4 },
  { label: "Chat", icon: MessageSquare, rotate: -3, offset: -10, top: 84, left: 44 },
];

export function About() {
  return (
    <section className="w-full px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.8fr_1fr] lg:items-stretch lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              About
            </span>
            <h2 className="text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
              Technologie und Business
              <br />
              gehören zusammen
            </h2>
            <span className="mt-6 block h-px w-10 bg-accent-hover" aria-hidden="true" />
            <p className="mt-6  text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Jedes Projekt ist für uns ein Produkt, das sich weiterentwickelt.
              Wir denken Websites, Shops und Webanwendungen ganzheitlich — mit
              Blick auf Business, Nutzer, Design und Technologie
            </p>
            <p className="mt-4  text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Entwicklung, Design und Geschäftsverständnis sitzen bei uns in
              einem Team — deshalb müssen Sie Ihre Aufgabe nicht drei
              verschiedenen Dienstleistern erklären. So entstehen Lösungen,
              die messbaren Mehrwert schaffen und mit dem Unternehmen
              wachsen
            </p>

            <div className="mt-10">
              <HoverLink href="#contact" variant="outline" className="px-8 py-4 text-[18px]">
                Projekt besprechen
              </HoverLink>
            </div>
          </motion.div>

          {/* Mobile / tablet: simple wrapped flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:hidden">
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

          {/* Desktop: bigger chips scattered across the full height of the block */}
          <div className="relative hidden min-h-[480px] lg:block">
            {CHIPS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  top: `${c.top}%`,
                  left: `${c.left}%`,
                  transform: `rotate(${c.rotate}deg)`,
                }}
                className="absolute inline-flex items-center gap-2.5 rounded-2xl border border-border bg-card px-6 py-4 shadow-[0_4px_16px_rgba(23,23,23,0.06)]"
              >
                <c.icon className="h-6 w-6 text-accent-hover" strokeWidth={1.7} />
                <span className="whitespace-nowrap text-[17px] font-medium text-ink-soft">
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
