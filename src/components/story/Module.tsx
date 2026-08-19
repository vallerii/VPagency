import type { CSSProperties } from "react";
import { Phone, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export type ModuleKind =
  | "node"
  | "lines"
  | "bars"
  | "dotgrid"
  | "wireframe"
  | "pill"
  | "flow"
  | "cornerdot"
  | "tick"
  | "stack"
  | "phone"
  | "people"
  | "chart"
  | "text";

interface ModuleProps {
  kind: ModuleKind;
  accent?: boolean;
  label?: string;
  className?: string;
}

export function Module({ kind, accent = false, label, className }: ModuleProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-[20px] border-2 bg-card transition-colors duration-500",
        "shadow-[0_1px_2px_rgba(23,23,23,0.03)]",
        accent ? "border-accent-hover/60 bg-accent-tint" : "border-border",
        className
      )}
    >
      <ModuleGlyph kind={kind} accent={accent} label={label} />
    </div>
  );
}

function ModuleGlyph({
  kind,
  accent,
  label,
}: {
  kind: ModuleKind;
  accent: boolean;
  label?: string;
}) {
  // Solid var()-referenced colors instead of Tailwind's color+opacity
  // modifier (bg-x/NN) — that combo was silently failing to paint on
  // these custom theme tokens. Plain opacity utility layered on top is
  // always safe.
  const glyphColor = accent ? "var(--color-accent-hover)" : "var(--color-glyph)";
  const glyphColorSoft = accent ? "var(--color-accent-hover)" : "var(--color-glyph-soft)";
  const ring = accent ? "border-accent-hover" : "border-[var(--glyph-color)]";
  const vars = { "--glyph-color": glyphColor } as CSSProperties;
  const varsSoft = { "--glyph-color": glyphColorSoft } as CSSProperties;

  switch (kind) {
    case "text":
      return (
        <span
          className={cn(
            "text-[15px] font-semibold tracking-tight",
            accent ? "text-accent-hover" : "text-ink-soft"
          )}
        >
          {label}
        </span>
      );

    case "node":
      return (
        <div
          className={cn(
            "flex h-[46%] w-[46%] items-center justify-center rounded-full border-2",
            ring
          )}
        >
          <div className="h-[32%] w-[32%] rounded-full bg-[var(--glyph-color)]" style={vars} />
        </div>
      );

    case "lines":
      return (
        <div className="flex w-[62%] flex-col gap-[14%]">
          <div className="h-[9%] w-full rounded-full bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[9%] w-[70%] rounded-full bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[9%] w-[45%] rounded-full opacity-65 bg-[var(--glyph-color)]" style={varsSoft} />
        </div>
      );

    case "bars":
      return (
        <div className="flex h-[52%] w-[52%] items-end gap-[14%]">
          <div className="h-[40%] w-full rounded-t-[3px] opacity-65 bg-[var(--glyph-color)]" style={varsSoft} />
          <div className="h-[70%] w-full rounded-t-[3px] bg-[var(--glyph-color)]" style={vars} />
          <div className="h-full w-full rounded-t-[3px] bg-[var(--glyph-color)]" style={vars} />
        </div>
      );

    case "dotgrid":
      return (
        <div className="grid grid-cols-3 gap-[18%]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[7px] w-[7px] rounded-full bg-[var(--glyph-color)]" style={vars} />
          ))}
        </div>
      );

    case "wireframe":
      return (
        <div className="flex w-[64%] flex-col gap-[12%]">
          <div className="h-[16%] w-full rounded-[3px] bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[9%] w-full rounded-full opacity-65 bg-[var(--glyph-color)]" style={varsSoft} />
          <div className="h-[9%] w-[60%] rounded-full opacity-65 bg-[var(--glyph-color)]" style={varsSoft} />
        </div>
      );

    case "pill":
      return (
        <div
          className={cn("h-[28%] w-[70%] rounded-full border-2", ring, accent && "bg-accent-tint")}
        />
      );

    case "flow":
      return (
        <div className="flex w-[64%] items-center justify-between">
          <div className="h-[9px] w-[9px] shrink-0 rounded-full bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[2px] flex-1 opacity-50 bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[9px] w-[9px] shrink-0 rounded-full bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[2px] flex-1 opacity-50 bg-[var(--glyph-color)]" style={vars} />
          <div className="h-[9px] w-[9px] shrink-0 rounded-full bg-[var(--glyph-color)]" style={vars} />
        </div>
      );

    case "cornerdot":
      return (
        <div className="relative h-full w-full">
          <div
            className="absolute right-[24%] top-[24%] h-[11px] w-[11px] rounded-full bg-[var(--glyph-color)]"
            style={vars}
          />
          <div
            className="absolute bottom-[28%] left-[24%] h-[2px] w-[34%] rotate-45 opacity-65 bg-[var(--glyph-color)]"
            style={varsSoft}
          />
        </div>
      );

    case "stack":
      return (
        <div className="relative h-[46%] w-[58%]">
          <div className={cn("absolute inset-x-[10%] top-0 h-[70%] rounded-[6px] border-2", ring, accent && "bg-accent-tint")} />
          <div className={cn("absolute inset-x-0 bottom-0 h-[70%] rounded-[6px] border-2 bg-card", ring)} />
        </div>
      );

    case "tick":
      return (
        <div className="relative h-[40%] w-[40%]">
          <div className="absolute bottom-0 left-0 h-full w-[2px] opacity-65 bg-[var(--glyph-color)]" style={varsSoft} />
          <div className="absolute bottom-0 left-0 h-[2px] w-full opacity-65 bg-[var(--glyph-color)]" style={varsSoft} />
          <div
            className="absolute bottom-[10%] left-[10%] h-[8px] w-[8px] rounded-full bg-[var(--glyph-color)]"
            style={vars}
          />
        </div>
      );

    case "phone":
      return (
        <Phone
          strokeWidth={2.4}
          style={{ color: glyphColor, width: "42%", height: "42%" }}
        />
      );

    case "people":
      return (
        <Users
          strokeWidth={2.2}
          style={{ color: glyphColor, width: "46%", height: "46%" }}
        />
      );

    case "chart":
      return (
        <svg viewBox="0 0 40 40" className="h-[48%] w-[48%]" fill="none">
          <polyline
            points="2,32 14,20 23,25 38,6"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={glyphColor}
          />
          <circle cx="38" cy="6" r="3.5" fill={glyphColor} />
        </svg>
      );

    default:
      return null;
  }
}
