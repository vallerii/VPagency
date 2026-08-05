import type { CSSProperties } from "react";
import { Module, type ModuleKind } from "./Module";

interface NetworkNodeProps {
  kind: ModuleKind;
  label: string;
  accent?: boolean;
  rotate?: number;
  style: CSSProperties;
}

// Position/size come in via inline style (percentage-based, driven by
// scroll progress), while centering + responsive scale are handled by
// Tailwind classes and rotate by a separate inner element — inline
// `transform` and the Tailwind scale/translate utilities can't share the
// same element, since inline style fully overrides the class transform.
export function NetworkNode({ kind, label, accent, rotate = 0, style }: NetworkNodeProps) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 scale-[0.48] sm:scale-[0.65] lg:scale-100"
      style={style}
    >
      <div className="h-full w-full" style={{ transform: `rotate(${rotate}deg)` }}>
        <Module kind={kind} accent={accent} label={label} />
      </div>
    </div>
  );
}
