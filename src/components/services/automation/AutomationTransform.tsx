"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";
import { Mail, FileSpreadsheet, Phone, Users, type LucideIcon } from "lucide-react";

interface AutomationTransformProps {
  title: string[];
  lines: string[];
}

interface Step {
  icon: LucideIcon;
  label: string;
  scattered: { top: string; left: string; rotate: number };
  flow: { top: string; left: string; rotate: number };
}

// Four loose, disconnected manual steps that — on scroll — line up into
// one connected, automatic flow: the visual argument for the section's
// text, not a repeat of it.
const STEPS: Step[] = [
  { icon: Mail, label: "E-Mail", scattered: { top: "8%", left: "6%", rotate: -8 }, flow: { top: "50%", left: "8%", rotate: 0 } },
  { icon: FileSpreadsheet, label: "Excel", scattered: { top: "62%", left: "0%", rotate: 6 }, flow: { top: "50%", left: "36%", rotate: 0 } },
  { icon: Phone, label: "Anruf", scattered: { top: "4%", left: "70%", rotate: 5 }, flow: { top: "50%", left: "64%", rotate: 0 } },
  { icon: Users, label: "Team", scattered: { top: "70%", left: "68%", rotate: -5 }, flow: { top: "50%", left: "92%", rotate: 0 } },
];

export function AutomationTransform({ title, lines }: AutomationTransformProps) {
  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32 overflow-hidden">
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
                  word === "Kostenposition" ? (
                    <span
                      key={j}
                      className="text-[#0E68FF]"
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

        <motion.div
          initial="scattered"
          whileInView="flow"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto aspect-[4/3] w-full max-w-[480px]"
        >
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <motion.line
              x1="8%" y1="50%" x2="92%" y2="50%"
              stroke="var(--color-accent-hover)"
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={{
                scattered: { top: s.scattered.top, left: s.scattered.left, rotate: s.scattered.rotate, x: "-50%", y: "-50%" },
                flow: { top: s.flow.top, left: s.flow.left, rotate: 0, x: "-50%", y: "-50%" },
              }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg shadow-[0_4px_16px_-6px_rgba(0,0,0,0.3)] sm:h-16 sm:w-16">
                <s.icon className="h-6 w-6 text-accent-hover sm:h-7 sm:w-7" strokeWidth={1.7} />
              </span>
              <span className="whitespace-nowrap text-[12px] font-medium text-ink-faint sm:text-[13px]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
