"use client";

import { useEffect } from "react";

// Opens the KI stage once the KI card has reached its place: the card then
// grows into the "Where AI helps" band in one smooth CSS transition (no
// half-way states tied to the scroll). Scrolling back up closes it again.
export function KiStage() {
  useEffect(() => {
    const stage = document.querySelector<HTMLElement>("[data-ki-stage]");
    if (!stage) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = stage.getBoundingClientRect().top;
      // desktop: the stage is pinned, open right after it reaches the top;
      // mobile: the card is pinned under the header; open after a short read
      const open = window.matchMedia("(min-width: 1024px)").matches ? -top > vh * 0.04 : -top > vh * 0.28;
      if (open) stage.setAttribute("data-open", "");
      else stage.removeAttribute("data-open");
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
