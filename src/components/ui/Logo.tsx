// VP Digital mark: "VP_" — two letters and the cursor, nothing else.
//
// The letters are the actual V and P outlines of Raleway SemiBold (600),
// the same cut the site's headlines use, converted to paths. They stay
// paths rather than <text> on purpose: a logo must not depend on whether
// the web font has finished loading. The earlier heavy geometric letters
// (stems at 25 % of the letter height) read as a different typeface next
// to the headlines; Raleway's stems sit at ~16 %.
//
// The underscore after the "P" is what carries the message — it reads as a
// cursor in a code editor and says "this is built here" without a single
// piece of jargon in the copy. Its height equals the letter stem, so it
// belongs to the same weight. It blinks slowly and never drops fully to 0:
// a hard-blinking cursor inside a fixed header pulls the eye off the page
// for as long as the visitor stays on it.
//
// public/logo.svg, logo-mark.svg, icon.svg, logo.png and the favicons are
// exported from exactly these paths — regenerate them when this changes.
const VIEW_W = 120.3;
const VIEW_H = 48;

const V_PATH = "M8.05 0 22.51 38.74 36.91 0H44.96L26.1 48H18.93L0 0Z";
const P_PATH =
  "M52.64 48V0H72.78Q76.03 0 78.73 1.35Q81.44 2.7 83.47 4.94Q85.49 7.17 86.58 9.94Q87.66 12.71 87.66 15.62Q87.66 19.61 85.87 23.22Q84.07 26.84 80.8 29.07Q77.52 31.3 73.19 31.3H60.21V48ZM60.21 24.61H72.72Q74.88 24.61 76.5 23.43Q78.13 22.24 79.04 20.21Q79.95 18.19 79.95 15.62Q79.95 12.98 78.87 10.95Q77.79 8.92 76.06 7.81Q74.34 6.69 72.31 6.69H60.21Z";

type LogoProps = {
  /** Height of the letters in px — the width follows from it. */
  size?: number;
  /** Turn the cursor blink off (e.g. for static exports) */
  animated?: boolean;
  className?: string;
};

export function Logo({ size = 32, animated = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex text-ink ${className}`}>
      <svg
        width={(size * VIEW_W) / VIEW_H}
        height={size}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        fill="none"
        role="img"
        aria-label="VP Digital"
        className="shrink-0"
      >
        <path fill="currentColor" d={V_PATH} />
        <path fill="currentColor" d={P_PATH} />
        {/* Cursor */}
        <rect
          x="94.38"
          y="40.43"
          width="25.92"
          height="7.57"
          rx="0.6"
          fill="var(--color-logo-caret)"
          className={animated ? "vp-caret" : undefined}
        />
      </svg>
    </span>
  );
}
