import type { ReactNode } from "react";
import type { Lang } from "@/content/home";
import { SiteHeader, SiteFooter } from "./Site";
import { Final } from "./Sections";
import { Reveal } from "./Reveal";
import { SmoothScroll } from "./SmoothScroll";
import s from "./home.module.css";

// Shared frame for inner pages: header, content, the request form, footer.
export function InnerShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <div className={s.root} lang={lang}>
      <SiteHeader lang={lang} />
      <main>
        {children}
        <Final lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <Reveal />
      <SmoothScroll />
    </div>
  );
}

// The site is German only; the ?lang parameter is ignored.
export const langOf = (_q?: string): Lang => "de";
