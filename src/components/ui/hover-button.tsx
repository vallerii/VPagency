"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border font-medium transition-colors duration-300";
const variants = {
  primary: "border-accent bg-accent/20 text-ink hover:bg-accent/40",
  secondary: "border-accent-hover bg-accent-hover/10 text-ink hover:bg-accent-hover/25",
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
