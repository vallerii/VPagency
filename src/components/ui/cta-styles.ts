// One shared look for every "tell us about your project" block — the
// homepage quiz (FinalCTA), the service pages (ServiceCTA) and the work
// page (ProductsCTA). They used to drift apart: two panels sat on
// bg-accent/30 (a slate #3B4552 where the inner card almost vanished —
// 1.65:1 against the panel) while the third used bg-accent/60, and the
// headline/lead colours differed per file.
//
// The /60 panel wins on readability, so it is now the single shell:
//   panel  #5F7289  → inner card #202126 = 3.3:1, the card reads as its
//                     own layer instead of melting into the background
//   heading  cream on panel        = 4.4:1
//   highlight near-black on panel  = 3.6:1 (76px bold → AA large)
//   lead     cream/90 on panel     = 4.4:1 (was dark ink at 3.3:1)
// Light text beats dark text on this mid-tone, which is why the headline
// is cream with a near-black accent word rather than the other way round.
export const CTA_PANEL =
  "relative mx-auto w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 rounded-3xl border border-accent/40 bg-accent/60 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20";

export const CTA_HEADING =
  "text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]";

// The accented word in the headline — near-black against the light blue
// panel. Never the brand blue #0E68FF here: on #5F7289 it lands at
// 1.03:1 and is effectively invisible.
export const CTA_HIGHLIGHT = "text-bg";

export const CTA_LEAD =
  "mt-8 max-w-3xl text-[16px] leading-[1.5] text-ink/90 sm:text-[19px] lg:text-[22px] xl:text-[26px]";

// The dark panel that holds the form / quiz itself.
export const CTA_CARD = "rounded-[28px] border border-border bg-card p-8 sm:p-12";

// Small print under the card, on the light panel — cream, not the accent
// blue, which would sit at ~2:1 on this background.
export const CTA_FOOTNOTE = "mt-6 text-center text-[14px] text-ink/80";
export const CTA_FOOTNOTE_LINK =
  "font-medium text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white";
