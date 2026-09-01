"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NetworkNode } from "./story/NetworkNode";
import { NODES, computeFrame, computeConnections, computeActiveNodes } from "./story/story-data";
import { ContactQuiz } from "./ContactQuiz";
import {
  CTA_CARD,
  CTA_FOOTNOTE,
  CTA_FOOTNOTE_LINK,
  CTA_HEADING,
  CTA_HIGHLIGHT,
  CTA_LEAD,
  CTA_PANEL,
} from "@/components/ui/cta-styles";

const GOAL = { x: 50, y: 97 };
const GOAL_LINKS = ["crm", "tables"];

export function FinalCTA() {
  const [assembled, setAssembled] = useState(false);
  const prefersReduced = useReducedMotion();

  const frames = computeFrame(1);
  const connections = computeConnections(1, frames);
  const active = computeActiveNodes(connections);

  return (
    <section
      id="contact"
      className="relative flex min-h-dvh w-full items-center overflow-hidden px-6 pb-32 lg:pb-44 sm:px-10 lg:px-16"
    >
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.55] sm:opacity-70" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map((c, i) => (
            <path
              key={`${c.from}-${c.to}-${i}`}
              d={c.d}
              fill="none"
              stroke="var(--color-accent-hover)"
              strokeWidth={1.7}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className={!prefersReduced ? "pulse-line" : undefined}
            />
          ))}

          {assembled &&
            GOAL_LINKS.map((nodeId) => {
              const n = frames[nodeId];
              const mx = (n.x + GOAL.x) / 2;
              const my = (n.y + GOAL.y) / 2;
              const d = `M ${n.x} ${n.y} Q ${mx} ${my} ${GOAL.x} ${GOAL.y}`;
              return (
                <motion.path
                  key={`goal-${nodeId}`}
                  d={d}
                  fill="none"
                  stroke="var(--color-accent-hover)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}
        </svg>

        {NODES.map((n) => {
          const f = frames[n.id];
          return (
            <NetworkNode
              key={n.id}
              kind={f.kind}
              label={f.label}
              accent={n.hub || active.has(n.id)}
              rotate={f.rotate}
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: f.w,
                height: f.h,
              }}
            />
          );
        })}

        {assembled && (
          <div
            className="absolute"
            style={{
              left: `${GOAL.x}%`,
              top: `${GOAL.y}%`,
              width: 96,
              height: 96,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ opacity: 0, scale: 0.4, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.35 }}
            >
              <div className="h-full w-full">
                <div className="flex h-full w-full items-center justify-center rounded-[20px] border border-accent-hover/50 bg-accent-tint shadow-[0_1px_2px_rgba(23,23,23,0.03)]">
                  <div className="flex h-[46%] w-[46%] items-center justify-center rounded-full border border-accent-hover bg-card">
                    <div className="h-[32%] w-[32%] rounded-full bg-accent-hover" />
                  </div>
                </div>
                <span className="absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap text-[13px] font-medium text-ink-soft">
                  Вач бизнес
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </div> */}

      <motion.div
        animate={assembled ? { scale: [1, 1.012, 1] } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className={CTA_PANEL}
      >
        <div className="mb-16 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={CTA_HEADING}
          >
            Ihr Projekt beginnt mit einer
            <br /><span className={CTA_HIGHLIGHT}> Idee</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={CTA_LEAD}
          >
            Beantworten Sie ein paar kurze Fragen zu Ihrem Projekt.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={CTA_CARD}>
            <ContactQuiz onSuccess={() => setAssembled(true)} />
          </div>

          <p className={CTA_FOOTNOTE}>
            Wissen Sie bereits, was Sie brauchen?{" "}
            <a
              href="mailto:hello@vpdigital.agency"
              className={CTA_FOOTNOTE_LINK}
            >
              Schreiben Sie uns: hello@vpdigital.agency
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
