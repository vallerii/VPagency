"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 font-semibold uppercase tracking-wide transition-colors duration-300";
const variants = {
  primary: "border-accent-2 bg-accent-2/15 text-accent-2 hover:bg-accent-2/30",
  secondary: "border-accent-2-hover bg-accent-2-hover/10 text-accent-2 hover:bg-accent-2-hover/25",
  outline: "border-accent-2 bg-transparent text-accent-2 hover:bg-accent-2/10",
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
