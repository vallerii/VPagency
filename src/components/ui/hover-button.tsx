"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Circle {
  id: number;
  x: number;
  y: number;
  fadeState: "in" | "out" | null;
}

/** Shared cursor-trail state: small glow blobs that follow the pointer and fade out. */
function useHoverTrail() {
  const [isListening, setIsListening] = React.useState(false);
  const [circles, setCircles] = React.useState<Circle[]>([]);
  const lastAddedRef = React.useRef(0);

  const createCircle = React.useCallback((x: number, y: number) => {
    setCircles((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), x, y, fadeState: null },
    ]);
  }, []);

  const onPointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!isListening) return;
      const now = Date.now();
      if (now - lastAddedRef.current > 90) {
        lastAddedRef.current = now;
        const rect = event.currentTarget.getBoundingClientRect();
        createCircle(event.clientX - rect.left, event.clientY - rect.top);
      }
    },
    [isListening, createCircle]
  );

  const onPointerEnter = React.useCallback(() => setIsListening(true), []);
  const onPointerLeave = React.useCallback(() => setIsListening(false), []);

  React.useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    circles.forEach((circle) => {
      if (circle.fadeState) return;
      timers.push(
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) => (c.id === circle.id ? { ...c, fadeState: "in" } : c))
          );
        }, 0)
      );
      timers.push(
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) => (c.id === circle.id ? { ...c, fadeState: "out" } : c))
          );
        }, 650)
      );
      timers.push(
        setTimeout(() => {
          setCircles((prev) => prev.filter((c) => c.id !== circle.id));
        }, 1400)
      );
    });
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [circles.length]);

  return { circles, onPointerMove, onPointerEnter, onPointerLeave };
}

function GlowTrail({ circles, variant }: { circles: Circle[]; variant: "primary" | "secondary" }) {
  return (
    <>
      {circles.map(({ id, x, y, fadeState }) => (
        <span
          key={id}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-opacity duration-300",
            variant === "primary" ? "bg-white/60" : "bg-accent/50",
            fadeState === "in" && "opacity-90",
            fadeState === "out" && "opacity-0 duration-[900ms]",
            !fadeState && "opacity-0"
          )}
          style={{ left: x, top: y }}
        />
      ))}
    </>
  );
}

const base =
  "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-colors";
const variants = {
  primary:
    "bg-accent text-ink shadow-[0_0_0_1px_rgba(108,207,255,0.55),0_0_28px_-4px_rgba(132,216,255,0.65)] hover:bg-accent-hover hover:shadow-[0_0_0_1px_rgba(108,207,255,0.75),0_0_36px_-2px_rgba(132,216,255,0.8)]",
  secondary:
    "border border-accent-hover text-ink shadow-[0_0_18px_-6px_rgba(69,194,255,0.6)] hover:border-accent hover:shadow-[0_0_26px_-4px_rgba(69,194,255,0.8)]",
};

type Variant = keyof typeof variants;

export interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    const { circles, onPointerMove, onPointerEnter, onPointerLeave } = useHoverTrail();
    return (
      <button
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        <GlowTrail circles={circles} variant={variant} />
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
    const { circles, onPointerMove, onPointerEnter, onPointerLeave } = useHoverTrail();
    return (
      <a
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        <GlowTrail circles={circles} variant={variant} />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }
);
HoverLink.displayName = "HoverLink";
