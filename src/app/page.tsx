import type { Metadata } from "next";
import type { Lang } from "@/content/home";
import { Hero, HeroWall } from "@/components/home/Hero";
import { Services } from "@/components/home/Doors";
import { Stack, Ki, Projects, Final } from "@/components/home/Sections";
import { SiteFooter, SiteHeader, Clients } from "@/components/home/Site";
import { Reveal } from "@/components/home/Reveal";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { HeroStage } from "@/components/home/HeroStage";
import s from "@/components/home/home.module.css";
import { services } from "@/content/catalog";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema } from "@/lib/schema";

// The Russian version (?lang=ru) is for the owner's review only and is never indexed.
export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const { lang } = await searchParams;
  return { alternates: { canonical: "/" }, ...(lang === "ru" ? { robots: { index: false, follow: false } } : {}) };
}

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang: q } = await searchParams;
  const lang: Lang = q === "ru" ? "ru" : "de";
  return (
    <div className={s.root} lang={lang}>
      <SiteHeader lang={lang} floating />
      <main>
        {/* Hero and "what we do" share one stage: the moving columns stay on
            screen; the hero text holds while the steps light up, then scrolls
            away normally and "what we do" moves in over the columns. */}
        <div className={s.heroPin} data-hero-pin>
          <div className={s.wallLayer}><HeroWall lang={lang} /></div>
          <div className={s.heroCopyPin}><Hero lang={lang} /></div>
          <Services lang={lang} />
        </div>
        <HeroStage />
        <Clients lang={lang} />
        <Stack lang={lang} />
        <Ki lang={lang} />
        <Projects lang={lang} />
        <Final lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      {lang === "de" && <JsonLd data={itemListSchema(services.map((x) => ({ name: x.nav.de, path: `/leistungen/${x.id}` })), "Leistungen von VP agency")} />}
      <Reveal />
      <SmoothScroll />
    </div>
  );
}
