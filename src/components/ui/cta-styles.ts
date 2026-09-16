// One shared look for every "tell us about your project" block — the
// homepage quiz (FinalCTA), the service, glossary and project pages
// (ServiceCTA) and the work page (ProductsCTA).
//
// Panel colour. It used to be bg-[#0E68FF]/55 — a translucent blue that
// only turned into the intended colour on top of the graphite page, with a
// near-black headline on it that was hard to read (~2.5:1). It is now a
// solid brand-blue surface (--color-panel, #1450C0) with light type only:
//   headline      soft blue #A9C5F2 on panel = 4.1:1  (76px bold → AA large)
//   highlight     cream #F2F2EF on panel     = 6.4:1
//   lead          cream/90                   ≈ 5.6:1
//   footnote      cream/85 (14px)            ≈ 5.1:1
// Hierarchy comes from tone, not from switching to dark text: the sentence
// is soft blue, the one word that matters is cream.
//
// Layout. Every closing block is a wide sheet: it spans the viewport with
// the same small inset and radius as the other sheets (ui/Sheet.tsx) and
// fills the screen height on desktop, while its content keeps the 1440px
// limit every other section uses.
//   CTA_SECTION_WIDE      the <section>, carries the 8/12/16px inset
//   CTA_PANEL_WIDE        the blue sheet
//   CTA_PANEL_WIDE_INNER  the two-column grid, max 1440px
export const CTA_SECTION_WIDE =
  "relative w-full px-2 pb-2 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4";

export const CTA_PANEL_WIDE =
  "relative flex w-full items-center rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] bg-(--color-panel) px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[calc(100dvh-2rem)] lg:px-16 lg:py-20";

export const CTA_PANEL_WIDE_INNER =
  "mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20";

export const CTA_HEADING =
  "text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-(--color-on-panel-soft) sm:text-[6vw] lg:text-[4vw] xl:text-[76px]";

// The accented word in the headline.
export const CTA_HIGHLIGHT = "text-(--color-on-panel)";

export const CTA_LEAD =
  "mt-8 max-w-3xl text-[16px] leading-[1.5] text-(--color-on-panel)/90 sm:text-[19px] lg:text-[22px] xl:text-[26px]";

// The dark panel that holds the form / quiz itself.
export const CTA_CARD = "rounded-[28px] border border-border bg-card p-8 sm:p-12";

export const CTA_FOOTNOTE = "mt-6 text-center text-[14px] text-(--color-on-panel)/85";
export const CTA_FOOTNOTE_LINK =
  "font-medium text-(--color-on-panel) underline decoration-(--color-on-panel)/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white";
