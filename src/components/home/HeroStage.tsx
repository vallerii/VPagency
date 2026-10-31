"use client";

import { useEffect } from "react";

// Drives the pinned hero by scroll position; all motion itself is CSS.
//   data-settled  after the first scroll: text to the left, columns together
//   data-step     1, 2, 3: the steps light up one by one while the hero is pinned
// Thresholds are short on purpose: a couple of wheel turns, not a long hold.
export function HeroStage() {
  useEffect(() => {
    const pin = document.querySelector<HTMLElement>("[data-hero-pin]");
    if (!pin) return;
    let raf = 0;
    const set = (k: string, on: boolean, v = "") => (on ? pin.setAttribute(k, v) : pin.removeAttribute(k));
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const y = -pin.getBoundingClientRect().top;
      set("data-settled", y > 24);
      const step = y > vh * 0.36 ? 3 : y > vh * 0.22 ? 2 : y > vh * 0.08 ? 1 : 0;
      set("data-step", step > 0, String(step));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
