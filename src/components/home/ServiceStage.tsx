"use client";

import { useEffect } from "react";

// Drives the pinned service hero by scroll position; all motion is CSS.
//   data-settled  the headline layer steps aside, the steps row moves to
//                 the middle and grows, the "what happens" block slides in
//   data-step     1, 2, 3: the steps light up one by one while pinned
// The same approach as HeroStage on the home page.
// The sticky heading above the deck of scope cards is bounded by its own
// box, which reaches further down than the cards do, so it stayed pinned
// over the next section after the last card had already let go. This lets
// it go at the moment the deck leaves instead.
export function ServiceStage() {
  useEffect(() => {
    const pin = document.querySelector<HTMLElement>("[data-svc-pin]");
    if (!pin) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const travel = pin.offsetHeight - window.innerHeight;
      if (travel <= 0) { pin.removeAttribute("data-settled"); pin.setAttribute("data-step", "1"); return; }
      const p = Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / travel));
      if (p > 0.1) pin.setAttribute("data-settled", ""); else pin.removeAttribute("data-settled");
      pin.setAttribute("data-step", p > 0.66 ? "3" : p > 0.45 ? "2" : "1");
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
