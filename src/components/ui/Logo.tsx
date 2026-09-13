import type { CSSProperties } from "react";

// VP Digital wordmark.
//
// The letters are drawn as paths rather than <text> on purpose: a logo must
// not depend on whether Raleway has finished loading, and the previous
// /logo-mini.png was visibly soft at the 340px the footer rendered it at.
//
// The underscore after the "P" is what carries the message — it reads as a
// cursor in a code editor and says "this is built here" without a single
// piece of jargon in the copy. It blinks slowly and never drops fully to 0:
// a hard-blinking cursor inside a fixed header pulls the eye off the page
// for as long as the visitor stays on it.
const MARK_RATIO = 122 / 48; // viewBox aspect ratio of the mark

type LogoProps = {
  /** Height of the letter mark in px — everything else scales from it. */
  size?: number;
  /** "mark" = VP_ only, "full" = VP_ Digital side by side, "stacked" = name below */
  variant?: "mark" | "full" | "stacked";
  /** Turn the cursor blink off (e.g. for static exports) */
  animated?: boolean;
  className?: string;
};

export function Logo({
  size = 32,
  variant = "full",
  animated = true,
  className = "",
}: LogoProps) {
  const mark = (
    <svg
      width={size * MARK_RATIO}
      height={size}
      viewBox="0 0 122 48"
      fill="none"
      role="img"
      aria-label="VP Digital"
      className="shrink-0"
    >
      {/* V */}
      <path fill="currentColor" d="M0 2 L12 2 L20 34 L28 2 L40 2 L26 46 L14 46 Z" />
      {/* P — stem plus bowl, counter cut out via evenodd */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M48 2 L72 2 C80.84 2 88 9.16 88 18 C88 26.84 80.84 34 72 34 L60 34 L60 46 L48 46 Z M60 12 L72 12 C75.31 12 78 14.69 78 18 C78 21.31 75.31 24 72 24 L60 24 Z"
      />
      {/* Cursor */}
      <rect
        x="96"
        y="37"
        width="26"
        height="9"
        rx="1"
        fill="var(--color-logo-caret)"
        className={animated ? "vp-caret" : undefined}
      />
    </svg>
  );

  if (variant === "mark") {
    return <span className={`inline-flex text-ink ${className}`}>{mark}</span>;
  }

  const wordStyle: CSSProperties =
    variant === "stacked"
      ? { fontSize: size * 0.34, letterSpacing: "0.26em" }
      : { fontSize: size * 0.46, letterSpacing: "0.22em" };

  return (
    <span
      className={`inline-flex text-ink ${
        variant === "stacked" ? "flex-col items-start gap-1.5" : "items-center"
      } ${className}`}
      style={variant === "full" ? { gap: size * 0.42 } : undefined}
    >
      {mark}
      <span
        className="font-heading font-semibold uppercase leading-none"
        style={wordStyle}
      >
        Digital
      </span>
    </span>
  );
}
