"use client";

import { useEffect } from "react";

// For pages whose hero starts at the very top of the window, under the
// header: while the page is at the top, the header is marked data-over and
// CSS makes it transparent; once the page scrolls, the mark goes and the
// header is solid white again, as on every other page.
export function HeaderOverHero() {
  useEffect(() => {
    const h = document.querySelector<HTMLElement>("header");
    if (!h) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.scrollY < 24) h.setAttribute("data-over", "");
      else h.removeAttribute("data-over");
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); h.removeAttribute("data-over"); };
  }, []);
  return null;
}
