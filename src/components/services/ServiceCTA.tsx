"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import {
  CTA_CARD,
  CTA_HEADING,
  CTA_HIGHLIGHT,
  CTA_LEAD,
  CTA_PANEL_WIDE,
  CTA_PANEL_WIDE_INNER,
  CTA_SECTION_WIDE,
} from "@/components/ui/cta-styles";


interface ServiceCTAProps {
  label: string;
}

export function ServiceCTA({ label }: ServiceCTAProps) {
  return (
    <section id="contact" className={CTA_SECTION_WIDE}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={CTA_PANEL_WIDE}
      >
        <div className={CTA_PANEL_WIDE_INNER}>
        <div className="mb-16">
          <h2 className={CTA_HEADING}>
            Erzählen Sie uns von Ihrer{" "}
            <span className={CTA_HIGHLIGHT}>
              Aufgabe
            </span>
          </h2>
          <p className={CTA_LEAD}>
            Bereich – „{label}“. Beschreiben Sie, was in Ihrem Unternehmen
            gerade passiert — wir helfen Ihnen herauszufinden, womit Sie am
            besten anfangen
          </p>
        </div>

        <div className={CTA_CARD}>
          <ContactForm />
        </div>
        </div>
      </motion.div>
    </section>
  );
}
