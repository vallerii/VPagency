"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// The accent fill sweep: a solid-accent layer clipped to a zero-radius
// circle anchored at the same point the resting-state gradient blooms
// from, expanding to fully cover the button on hover — a slow flood
// rather than an instant color swap.
function AccentFillSweep() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 bg-accent/20 [clip-path:circle(0%_at_18%_15%)] transition-[clip-path] duration-700 ease-out group-hover:[clip-path:circle(150%_at_18%_15%)]"
    />
  );
}

const base =
  "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-colors duration-300";
const variants = {
  primary:
    "border border-accent text-ink [background:radial-gradient(130%_150%_at_18%_15%,color-mix(in_srgb,var(--color-accent)_100%,var(--color-bg)_62%)_0%,var(--color-bg)_70%)] shadow-[0_0_0_1px_rgba(108,207,255,0.35)] delay-150 ",
  secondary:
    "border border-accent-hover text-ink shadow-[0_0_18px_-6px_rgba(69,194,255,0.6)] hover:border-accent hover:shadow-[0_0_26px_-4px_rgba(69,194,255,0.8)]",
};

type Variant = keyof typeof variants;

export interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props}>
        {variant === "primary" && <AccentFillSweep />}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
HoverButton.displayName = "HoverButton";

export interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export const HoverLink = React.forwardRef<HTMLAnchorElement, HoverLinkProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <a ref={ref} className={cn(base, variants[variant], className)} {...props}>
        {variant === "primary" && <AccentFillSweep />}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }
);
HoverLink.displayName = "HoverLink";
