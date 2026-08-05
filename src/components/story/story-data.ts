import type { ModuleKind } from "./Module";

export interface StoryNodeDef {
  id: string;
  label: string;
  kind: ModuleKind;
  hub?: boolean;
  size: number;
  final: { x: number; y: number };
  chaos: { x: number; y: number; rotate: number };
}

export interface Connection {
  from: string;
  to: string;
  step: number; // 1..STEPS — which beat this connection appears on
  curve: number;
}

export const BEAT_STOPS = [0, 0.2, 0.4, 0.6, 0.8, 1];

export const NODES: StoryNodeDef[] = [
  { id: "crm", label: "CRM", kind: "text", hub: true, size: 100, final: { x: 50, y: 16 }, chaos: { x: 50, y: 48, rotate: -4 } },

  { id: "site", label: "Сайт", kind: "wireframe", size: 84, final: { x: 36, y: 40 }, chaos: { x: 66, y: 12, rotate: -9 } },
  { id: "clients", label: "Клиенты", kind: "node", size: 84, final: { x: 64, y: 40 }, chaos: { x: 12, y: 30, rotate: 7 } },

  { id: "email", label: "Почта", kind: "lines", size: 70, final: { x: 14, y: 34 }, chaos: { x: 88, y: 32, rotate: 12 } },
  { id: "phone", label: "Телефон", kind: "phone", size: 70, final: { x: 86, y: 34 }, chaos: { x: 8, y: 66, rotate: -11 } },

  { id: "chat", label: "Чат", kind: "pill", size: 70, final: { x: 78, y: 58 }, chaos: { x: 90, y: 82, rotate: 9 } },
  { id: "sales", label: "Продажи", kind: "chart", size: 84, final: { x: 50, y: 60 }, chaos: { x: 46, y: 8, rotate: -7 } },
  { id: "people", label: "Люди", kind: "people", size: 70, final: { x: 22, y: 58 }, chaos: { x: 10, y: 90, rotate: 13 } },

  { id: "documents", label: "Документы", kind: "stack", size: 70, final: { x: 30, y: 82 }, chaos: { x: 70, y: 88, rotate: -13 } },
  { id: "tables", label: "Таблицы", kind: "bars", size: 70, final: { x: 50, y: 84 }, chaos: { x: 30, y: 10, rotate: 8 } },
  { id: "excel", label: "Excel", kind: "text", size: 70, final: { x: 70, y: 82 }, chaos: { x: 92, y: 58, rotate: -6 } },
];

export const CONNECTIONS: Connection[] = [
  { from: "site", to: "clients", step: 1, curve: -2 },

  { from: "crm", to: "site", step: 2, curve: 4 },
  { from: "crm", to: "clients", step: 2, curve: -4 },

  { from: "crm", to: "email", step: 3, curve: 3 },
  { from: "crm", to: "phone", step: 3, curve: -3 },
  { from: "crm", to: "people", step: 3, curve: 2 },

  { from: "clients", to: "chat", step: 4, curve: 3 },
  { from: "crm", to: "sales", step: 4, curve: 0 },
  { from: "sales", to: "clients", step: 4, curve: -2 },

  { from: "crm", to: "documents", step: 5, curve: -6 },
  { from: "documents", to: "tables", step: 5, curve: 2 },
  { from: "tables", to: "excel", step: 5, curve: -2 },
];

export interface Caption {
  index: string;
  eyebrow: string;
  title: string[];
  text: string;
}

export const CAPTIONS: Caption[] = [
  {
    index: "00",
    eyebrow: "VP Digital",
    title: ["От хаоса —", "к системе"],
    text: "Мы наводим порядок в бизнесе прежде, чем выбирать технологии.",
  },
  {
    index: "01",
    eyebrow: "Понимание",
    title: ["Каждый бизнес", "устроен иначе"],
    text: "Мы не начинаем с готовых решений. Сначала разбираемся, как работает именно ваш бизнес.",
  },
  {
    index: "02",
    eyebrow: "Анализ",
    title: ["Смотрим на бизнес,", "а не на технологии"],
    text: "Изучаем процессы и команду, чтобы увидеть, где теряются время, деньги и клиенты.",
  },
  {
    index: "03",
    eyebrow: "Решение",
    title: ["Собираем то,", "что имеет смысл"],
    text: "Каждая связь появляется не случайно — только там, где она действительно нужна бизнесу.",
  },
  {
    index: "04",
    eyebrow: "Реализация",
    title: ["Всё начинает", "работать вместе"],
    text: "Сайт, заявки, документы и команда становятся частью одной понятной системы.",
  },
  {
    index: "05",
    eyebrow: "Рост",
    title: ["Система растёт", "вместе с вами"],
    text: "Мы остаёмся рядом, наблюдаем и развиваем то, что уже приносит результат.",
  },
];

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp(t);
}

export interface NodeFrame {
  id: string;
  label: string;
  kind: ModuleKind;
  hub?: boolean;
  w: number;
  h: number;
  x: number;
  y: number;
  rotate: number;
}

// Each node moves into place only during the window leading up to the
// first connection it takes part in — not all at once at the start.
// e.g. "site"/"clients" (step 1) slide in during [0, 0.2]; "crm" (its
// earliest link is step 2) stays put in chaos until [0.2, 0.4]; etc.
function firstStepFor(id: string): number {
  let min = Infinity;
  for (const c of CONNECTIONS) {
    if (c.from === id || c.to === id) min = Math.min(min, c.step);
  }
  return Number.isFinite(min) ? min : 1;
}

const NODE_MOVE_STEP: Record<string, number> = Object.fromEntries(
  NODES.map((n) => [n.id, firstStepFor(n.id)])
);

export function computeFrame(t: number): Record<string, NodeFrame> {
  const result: Record<string, NodeFrame> = {};

  for (const node of NODES) {
    const step = NODE_MOVE_STEP[node.id];
    const stop = BEAT_STOPS[step] ?? 1;
    const prevStop = BEAT_STOPS[step - 1] ?? 0;
    const progress = clamp((t - prevStop) / (stop - prevStop));

    const x = lerp(node.chaos.x, node.final.x, progress);
    const y = lerp(node.chaos.y, node.final.y, progress);
    const rotate = lerp(node.chaos.rotate, 0, progress);

    result[node.id] = {
      id: node.id,
      label: node.label,
      kind: node.kind,
      hub: node.hub,
      w: node.size,
      h: node.size,
      x,
      y,
      rotate,
    };
  }

  return result;
}

export interface ConnectionState extends Connection {
  d: string;
  opacity: number;
}

export function computeConnections(t: number, frames: Record<string, NodeFrame>): ConnectionState[] {
  return CONNECTIONS.map((c) => {
    const a = frames[c.from];
    const b = frames[c.to];
    const mx = (a.x + b.x) / 2 + c.curve;
    const my = (a.y + b.y) / 2 - c.curve;
    const d = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;

    const stop = BEAT_STOPS[c.step] ?? 1;
    const prevStop = BEAT_STOPS[c.step - 1] ?? 0;
    const revealStart = prevStop + (stop - prevStop) * 0.15;
    const revealEnd = stop;
    const opacity = clamp((t - revealStart) / (revealEnd - revealStart));

    return { ...c, d, opacity };
  });
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const u = clamp((x - edge0) / (edge1 - edge0));
  return u * u * (3 - 2 * u);
}

export interface CaptionFrame {
  opacity: number;
  translateY: number;
}

// Captions no longer fade in place on a shared timeline (that produced a
// narrow spike where each one was only legible for an instant). Instead
// each caption owns an equal slice of the scroll range and slides through
// like a vertical carousel on the same pinned screen: slide in, hold
// still for most of its slot (long enough to actually read), slide out —
// and the next one's "slide in" starts exactly where this one's "slide
// out" ends, so there's no dead gap between captions.
export function captionFrame(t: number, index: number, count: number): CaptionFrame {
  const slot = 1 / count;
  const start = index * slot;
  const u = clamp((t - start) / slot);

  const enter = 0.22;
  const exit = 0.78;
  const distance = 64; // px — a real, visible slide rather than a subtle nudge

  if (u < enter) {
    const p = smoothstep(0, enter, u);
    return { opacity: p, translateY: distance * (1 - p) };
  }
  if (u > exit) {
    const p = smoothstep(exit, 1, u);
    return { opacity: 1 - p, translateY: -distance * p };
  }
  return { opacity: 1, translateY: 0 };
}

export function computeActiveNodes(connections: ConnectionState[]): Set<string> {
  const active = new Set<string>();
  for (const c of connections) {
    if (c.opacity > 0.5) {
      active.add(c.from);
      active.add(c.to);
    }
  }
  return active;
}
