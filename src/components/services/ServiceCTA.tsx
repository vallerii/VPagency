"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

interface ServiceCTAProps {
  label: string;
}

export function ServiceCTA({ label }: ServiceCTAProps) {
  return (
    <section id="contact" className="w-full px-6 pb-32 sm:px-10 lg:px-16 lg:pb-44">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 rounded-3xl border border-accent bg-accent/30 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div className="mb-16">
          <h2 className="text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
            Erzählen Sie uns von Ihrer{" "}
            <span className="bg-gradient-to-r from-[#578CB5] to-[#0E68FF] bg-clip-text text-transparent">
              Aufgabe
            </span>
          </h2>
          <p className="mt-8 max-w-3xl text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px] xl:text-[26px]">
            Bereich – „{label}“. Beschreiben Sie, was in Ihrem Unternehmen
            gerade passiert — wir helfen Ihnen herauszufinden, womit Sie am
            besten anfangen
          </p>
        </div>

        <div className="rounded-[28px] border border-border bg-card p-8 sm:p-12">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
