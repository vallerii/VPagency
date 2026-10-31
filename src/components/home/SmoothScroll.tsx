"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Soft, inertial wheel scrolling. Native scrolling stays for touch screens and
// for people who asked their system to reduce motion. Elements marked
// data-lenis-prevent (the request window) scroll on their own.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: true });
    let id = requestAnimationFrame(function raf(t) { lenis.raf(t); id = requestAnimationFrame(raf); });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return null;
}
