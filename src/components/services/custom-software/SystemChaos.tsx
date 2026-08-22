"use client";

import InteractiveTangle from "@/components/ui/reactive-tangle";
import { motion } from "framer-motion";
import { Table2, Mail, MessageCircle, Globe, type LucideIcon } from "lucide-react";

interface SystemChaosProps {
  title: string;
  items: string[];
}

interface Tool {
  icon: LucideIcon;
  scattered: { top: string; left: string; rotate: number };
}

// A handful of separate tools converge into one labeled hub — the visual
// short version of what the symptom list below spells out in full.
const TOOLS: Tool[] = [
  { icon: Table2, scattered: { top: "10%", left: "8%", rotate: -8 } },
  { icon: Mail, scattered: { top: "60%", left: "4%", rotate: 6 } },
  { icon: MessageCircle, scattered: { top: "8%", left: "82%", rotate: 5 } },
  { icon: Globe, scattered: { top: "58%", left: "86%", rotate: -6 } },
];

export function SystemChaos({ title, items }: SystemChaosProps) {
  return (
    <section className="w-full relative px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <InteractiveTangle
        backgroundColor="#17171A"
        lineColor="#8FAFD4"
        lineWidth={1.2}
        minLines={12}
        maxLines={12}
        fade
        fadeIntensity={45}
        tiltDeg={3}
        style={{ marginTop: "20%" }}
      />
      <div className="mx-auto w-full relative max-w-[1440px] flex flex-col md:flex-row items-end">
        
        <div className="mx-auto  flex flex-col max-w-3xl  ">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className=" mt-12 max-w-3xl text-balance  text-[9vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[2.8vw] xl:text-[52px]"
          >
            {title}
          </motion.h2>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 ">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[16px] border border-border bg-card px-6 py-5 text-[16px] leading-[1.45] text-ink sm:text-[17px]"
              >
                {item}
              </motion.div>
            ))}
          </div>
          </div>
      </div>
    </section>
  );
}
