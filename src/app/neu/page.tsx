import type { Metadata } from "next";
import type { Lang } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Doors";
import { Stack, Ki, Projects, Final } from "@/components/home/Sections";
import { SiteFooter, Clients } from "@/components/home/Site";
import { Reveal } from "@/components/home/Reveal";
import s from "@/components/home/home.module.css";

// Prototype of the new homepage. Lives on /neu until the owner approves it;
// then it replaces src/app/page.tsx.
export const metadata: Metadata = {
  title: "Neue Startseite (Entwurf)",
  robots: { index: false, follow: false },
};

export default async function NeuPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang: q } = await searchParams;
  const lang: Lang = q === "ru" ? "ru" : "de";
  return (
    <div className={s.root} lang={lang}>
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Clients lang={lang} />
        <Stack lang={lang} />
        <Ki lang={lang} />
        <Projects lang={lang} />
        <Final lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <Reveal />
    </div>
  );
}
