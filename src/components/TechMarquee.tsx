const SERVICES = [
  "Websites",
  "E-Commerce",
  "Custom Solutions",
  "Automation",
  "Support",
];

const TECH = ["Shopify", "WooCommerce", "Laravel", "PHP", "AI"];

interface MarqueeRowProps {
  items: string[];
  repeat: number;
  reverse?: boolean;
  muted?: boolean;
}

function MarqueeRow({ items, repeat, reverse, muted }: MarqueeRowProps) {
  // Repeated enough times (and always an even count) that translating the
  // strip by exactly half its total width always lines up with an
  // identical copy — so the loop has no seam, and there's enough total
  // width that the tail end never runs out and exposes empty space, even
  // on wide desktop screens, regardless of how short the item list is.
  const loop = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="relative w-full overflow-hidden py-5">
      <div
        className={`flex w-max items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 pr-8 whitespace-nowrap sm:gap-12 sm:pr-12"
          >
            <span
              className={
                muted
                  ? "text-[13px] font-medium tracking-tight text-ink-faint sm:text-[15px]"
                  : "text-[15px] font-medium tracking-tight text-ink-soft sm:text-[17px]"
              }
            >
              {item}
            </span>
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${muted ? "bg-ink-faint" : "bg-accent"}`}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="w-full divide-y divide-border border-y border-border">
      <MarqueeRow items={SERVICES} repeat={6} />
      <MarqueeRow items={TECH} repeat={8} reverse  />
    </div>
  );
}
