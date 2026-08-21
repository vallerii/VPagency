"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 font-semibold uppercase tracking-wider transition-colors duration-300";
const variants = {
  primary: "border-accent-2 bg-accent-2/15 text-accent-2-deep hover:bg-accent-2/30",
  secondary: "border-accent-2-hover bg-card/10 text-accent-2 hover:bg-accent-hover/25",
  outline: "border-transparent bg-accent-2 text-bg transition-all duration-300 hover:bg-card/60 hover:text-accent-2 hover:border-accent-2-hover",
};

type Variant = keyof typeof variants;

export interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props}>
        {children}
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
        {children}
      </a>
    );
  }
);
HoverLink.displayName = "HoverLink";
