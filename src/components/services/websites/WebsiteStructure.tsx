"use client";

import { motion } from "framer-motion";
import { HoverLink } from "@/components/ui/hover-button";

interface WebsiteStructureProps {
  title: string[];
  lines: string[];
}

interface Block {
  id: string;
  messy: { top: string; left: string; w: string; h: string; rotate: number };
  clean: { top: string; left: string; w: string; h: string; rotate: number };
}

// Six blocks that stand in for a page's sections. In the "messy" state
// they're scattered and tilted like loose notes; whileInView they snap
// into a plain wireframe — nav bar, hero, three cards, footer — the same
// visual move as About.tsx's chip scatter, run in reverse.
const BLOCKS: Block[] = [
  { id: "nav", messy: { top: "4%", left: "38%", w: "46%", h: "9%", rotate: -6 }, clean: { top: "0%", left: "0%", w: "100%", h: "12%", rotate: 0 } },
  { id: "hero", messy: { top: "58%", left: "4%", w: "38%", h: "16%", rotate: 5 }, clean: { top: "18%", left: "0%", w: "100%", h: "22%", rotate: 0 } },
  { id: "card1", messy: { top: "20%", left: "2%", w: "26%", h: "20%", rotate: -8 }, clean: { top: "48%", left: "0%", w: "31%", h: "40%", rotate: 0 } },
  { id: "card2", messy: { top: "70%", left: "56%", w: "24%", h: "22%", rotate: 7 }, clean: { top: "48%", left: "34.5%", w: "31%", h: "40%", rotate: 0 } },
  { id: "card3", messy: { top: "6%", left: "70%", w: "22%", h: "18%", rotate: -4 }, clean: { top: "48%", left: "69%", w: "31%", h: "40%", rotate: 0 } },
  { id: "footer", messy: { top: "82%", left: "10%", w: "50%", h: "10%", rotate: 3 }, clean: { top: "92%", left: "0%", w: "100%", h: "8%", rotate: 0 } },
];

export function WebsiteStructure({ title, lines }: WebsiteStructureProps) {
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
                {line}
              </span>
            ))}
          </motion.h2>

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
            <HoverLink href="#contact" variant="primary" className="px-8 py-4 text-[18px]">
              Projekt besprechen
            </HoverLink>
          </motion.div>
        </div>

        <motion.div
          initial="messy"
          whileInView="clean"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto aspect-[4/3] w-full max-w-[480px] rounded-[20px] border border-border bg-bg p-3"
        >
          {BLOCKS.map((b) => (
            <motion.span
              key={b.id}
              variants={{
                messy: { ...b.messy, opacity: 0.7 },
                clean: { ...b.clean, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute" }}
              className="rounded-lg bg-accent-tint"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
