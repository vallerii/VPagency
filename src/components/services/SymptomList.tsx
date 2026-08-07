"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SymptomListProps {
  title: string;
  items: string[];
}

// A lighter cousin of the homepage's pinned "Вам знакомо?" wall — same
// varied-size/opacity "sticky note" feel, but a plain whileInView reveal
// instead of a scroll-scrubbed canvas, since rebuilding that per service
// page would be a lot of weight for a supporting section.
const SIZES = ["text-[19px] sm:text-[22px]", "text-[24px] sm:text-[28px]", "text-[17px] sm:text-[19px]", "text-[21px] sm:text-[24px]"];

function SymptomLine({
  item,
  size,
  index,
}: {
  item: string;
  size: string;
  index: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.4"],
  });
  const color = useTransform(scrollYProgress, [0, 1], ["#A6A6A6", "#171717"]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ color }}
      className={`font-medium leading-[1.35] tracking-tight ${size}`}
    >
      {item}
    </motion.p>
  );
}

export function SymptomList({ title, items }: SymptomListProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[7.2vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[4.7vw] lg:text-[3.4vw] xl:text-[88px] lg:sticky lg:top-[50%] lg:self-start lg:pt-8"
        >
          {title}
        </motion.h2>

        <div className="mt-12 flex flex-col gap-10 pl-6 sm:pl-16 lg:pl-24">
          {items.map((item, i) => (
            <SymptomLine key={i} item={item} size={SIZES[i % SIZES.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
