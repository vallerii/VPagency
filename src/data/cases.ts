export interface CaseStudy {
  slug: string;
  name: string;
  category: string; // matches a ServiceDef.slug — used to surface related cases on service pages
  problem: string;
  solution: string;
  result: string;
}

// Placeholder copy — swap in the real problem/solution/result for each
// client once it's ready. Keeping the structure (not "нужен был сайт", but
// the actual business problem → what we did → what changed) so the content
// can just be dropped in later without touching layout. Category
// assignments below are provisional too — set loosely so the "related
// cases" block on each service page has something to show; reassign once
// the real case content (and its actual category) is in.
export const CASES: CaseStudy[] = [
  {
    slug: "erfi",
    name: "Erfi",
    category: "websites",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "gbs",
    name: "GBS",
    category: "ecommerce",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "proctec",
    name: "Proctec",
    category: "custom-software",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "lemming",
    name: "Lemming",
    category: "automation",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "vob",
    name: "VOB",
    category: "support",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "teupen",
    name: "Teupen",
    category: "websites",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "wecubexx",
    name: "Wecubexx",
    category: "ecommerce",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "wetropa",
    name: "Wetropa",
    category: "custom-software",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
  {
    slug: "cnag",
    name: "CNAG",
    category: "automation",
    problem: "Опишите проблему бизнеса — что мешало работать эффективно.",
    solution: "Опишите, что вы предложили и внедрили.",
    result: "Опишите, что изменилось — цифры или конкретика, если есть.",
  },
];
