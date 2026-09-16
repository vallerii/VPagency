import type { ReactNode } from "react";

// A "sheet" is how a block sits on the graphite page: inset a few pixels
// from the viewport edges, rounded, with a small gap to its neighbours —
// like a card laid on the page instead of a full-bleed stripe cut by hard
// horizontal lines. Every page uses the same inset and radius, so the home
// page and the inner pages read as one system.
//
//   light  — the light palette (`theme-light`, globals.css). For content
//            that is read: lists, explanations, the body of an article.
//   card   — the slightly lifted graphite of --color-card. For the dark
//            illustrated blocks whose visuals are drawn for a dark ground.
//   panel  — the solid brand blue (--color-panel). Only light text on it.
//   plain  — no background; just the frame (the child brings its own).
//
// overflow-clip rather than overflow-hidden: it rounds the corners the
// same way but does not create a scroll container, so `position: sticky`
// inside a sheet (e.g. the deep-dive headline) keeps working.
type Tone = "light" | "card" | "panel" | "plain";

const TONE: Record<Tone, string> = {
  light: "theme-light",
  card: "bg-card",
  panel: "bg-(--color-panel)",
  plain: "",
};

export const SHEET_FRAME =
  "relative mx-2 my-2 overflow-clip rounded-[28px] sm:mx-3 sm:my-3 sm:rounded-[36px] lg:mx-4 lg:my-4 lg:rounded-[48px]";

export function Sheet({
  tone = "light",
  className = "",
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return <div className={`${SHEET_FRAME} ${TONE[tone]} ${className}`}>{children}</div>;
}
