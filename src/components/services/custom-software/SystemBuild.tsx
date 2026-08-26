"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";
import { Users, Building2, Database, Handshake, type LucideIcon } from "lucide-react";

interface SystemBuildProps {
  title: string[];
  lines: string[];
}

interface Satellite {
  icon: LucideIcon;
  label: string;
  top: string;
  left: string;
}

const SATELLITES: Satellite[] = [
  { icon: Building2, label: "Prozesse", top: "4%", left: "50%" },
  { icon: Users, label: "Team", top: "50%", left: "80%" },
  { icon: Handshake, label: "Kunden", top: "80%", left: "50%" },
  { icon: Database, label: "Daten", top: "50%", left: "6%" },
];

// A hub-and-spoke diagram: the business's own moving parts feeding one
// central system, mirroring the "Ihr Geschäft → Ihr System" idea in the
// section's title without restating it.
export function SystemBuild({ title, lines }: SystemBuildProps) {
  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32 overflow-hidden relative">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
          >
            {title.map((line, i) => (
              <span key={i} className="block">
                {line.split(" ").map((word, j) =>
                  word.includes("provisorisch") ? (
                    <span
                      key={j}
                      className="bg-gradient-to-r from-[#8FAFD4] to-[#0E68FF] bg-clip-text text-transparent"
                    >
                      {j > 0 ? " " : ""}
                      {word}
                    </span>
                  ) : (
                    `${j > 0 ? " " : ""}${word}`
                  )
                )}
              </span>
            ))}
          </motion.h2>
          <span className="mt-6 block h-px w-10 bg-accent-hover" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex max-w-[460px] flex-col gap-3 text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]"
          >
            {lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9"
          >
            <HoverLink href="#contact" variant="outline" className="px-8 py-4 text-[18px]">
              Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>

        <div className="flex h-full w-full items-center justify-center">
          <div className="relative aspect-square w-full max-w-[440px] flex items-center justify-center" >
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              {SATELLITES.map((s, i) => (
                <motion.line
                  key={s.label}
                  x1={s.left} y1={s.top} x2="50%" y2="50%"
                  stroke="var(--color-border)"
                  strokeWidth={2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </svg>

            {SATELLITES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", top: i%2 === 0 ? s.top : 'unset', left: i%2 !== 0 ? s.left : "unset", }}
                className="flex flex-col items-center gap-2"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-bg sm:h-14 sm:w-14">
                  <s.icon className="h-5 w-5 text-accent-hover sm:h-6 sm:w-6" strokeWidth={1.7} />
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium text-ink-faint sm:text-[12px]">
                  {s.label}
                </span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", }}
              className="flex h-24 w-24 items-center justify-center rounded-3xl bg-accent-hover shadow-[0_16px_40px_-12px_rgba(143,175,212,0.6)] sm:h-28 sm:w-28"
            >
              <span className="text-[13px] font-semibold text-bg sm:text-[15px]">Ihr System</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
