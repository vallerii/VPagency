"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import {
  CTA_CARD,
  CTA_HEADING,
  CTA_HIGHLIGHT,
  CTA_LEAD,
  CTA_PANEL,
} from "@/components/ui/cta-styles";


export function ProductsCTA() {
  return (
    <section
      id="contact"
      className="w-full px-6 pb-32 sm:px-10 lg:px-16 lg:pb-44"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={CTA_PANEL}
      >
        <div className="mb-16">
          <h2 className={CTA_HEADING}>
            Ihr Projekt steht
            <br />
            hier noch{" "}
            <span className={CTA_HIGHLIGHT}>
              nicht
            </span>
          </h2>
          <p className={CTA_LEAD}>
            Erzählen Sie uns, was in Ihrem Unternehmen gerade bremst — wir
            sagen Ihnen ehrlich, ob und wie wir helfen können
          </p>
        </div>

        <div className={CTA_CARD}>
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
