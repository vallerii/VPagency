"use client";

import { useEffect, useRef } from "react";
import s from "./home.module.css";

// The three steps as a section of their own, under the hero. They light up
// one after the other while the section crosses the middle of the screen:
// the same 1 · 2 · 3 motion as the pinned heroes, without pinning anything.
export function StepsBand({ title, steps, cta }: { title: string; steps: { title: string; text: string }[]; cta: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.dataset.step = "3"; return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section's top reaches the bottom of the screen, 1 when it reaches 30% from the top
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.7)));
      el.dataset.step = p > 0.85 ? "3" : p > 0.6 ? "2" : p > 0.35 ? "1" : "0";
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section ref={ref} className={`${s.ipSection} ${s.stepsBand}`} data-step="0" aria-labelledby="start-title">
      <h2 id="start-title" className={s.h2}>{title}</h2>
      <ol className={s.stepsBandList}>
        {steps.map((p, n) => (
          <li key={p.title}>
            <span className={s.stepsBandDot} aria-hidden>{n + 1}</span>
            <b>{p.title}</b>
            <p>{p.text}</p>
          </li>
        ))}
      </ol>
      <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{cta}<span className={s.arr} aria-hidden>→</span></a>
    </section>
  );
}
