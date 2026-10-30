"use client";

import { useEffect } from "react";

// Gentle appearance for [data-reveal] elements. Everything is visible without
// JavaScript; only elements still below the fold are held back and then shown
// as they scroll in. Skipped entirely under "reduce motion".
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.removeAttribute("data-pending");
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px" });
    for (const el of els) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.setAttribute("data-pending", "");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);
  return null;
}
