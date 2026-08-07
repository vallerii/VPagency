"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

interface ServiceCTAProps {
  label: string;
}

export function ServiceCTA({ label }: ServiceCTAProps) {
  return (
    <section id="contact" className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-3xl"
      >
        <div className="mb-14 text-center">
          <h2 className="text-balance text-[8vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[3vw] xl:text-[60px]">
            Расскажите о задаче
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.5] text-ink-soft sm:text-[18px]">
            Направление — «{label}». Опишите, что происходит в бизнесе сейчас,
            и мы поможем разобраться, что делать в первую очередь.
          </p>
        </div>

        <div className="rounded-[28px] border border-border bg-card p-8 sm:p-12">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
