import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import InteractiveLines from "@/components/ui/reactive-lines";
import { SelfRecognitionWall } from "@/components/SelfRecognitionWall";
import { RationaleBlock } from "@/components/RationaleBlock";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { ProductThinking } from "@/components/ProductThinking";
import { StoryCanvas } from "@/components/story/StoryCanvas";
import { SuccessCriteria } from "@/components/SuccessCriteria";
import { ClientLogos } from "@/components/ClientLogos";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { HOMEPAGE_FAQ } from "@/data/faq";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + the marquee share one stacking context so the Reactive
        Lines background can run behind both: it starts below the hero
        button (nothing is rendered above that point) and extends down
        through the marquee, which gets its own background in
        TechMarquee.tsx so the running text stays readable on top of it. */}
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[54%] bottom-0 z-0 sm:top-[50%] lg:top-[10%]"
          >
            <InteractiveLines
              backgroundColor="#17171A"
              lineColor="#8FAFD4"
              lineWidth={1}
              minLines={7}
              maxLines={16}
              fadeIntensity={35}
              tiltDeg={10}
              tiltMinWidth={1024}
            />
          </div>
          <Hero />
          <TechMarquee />
        </div>
        {/* <SelfRecognitionWall /> */}
        {/* <RationaleBlock /> */}
        <WhatWeBuild />
        <TechnicalExpertise />
        <ProductThinking />
        <section className="px-6 pt-32 lg:pt-44 pb-16 sm:px-10 lg:px-16">
          <h2 className="mx-auto max-w-[1440px] text-balance text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
            So arbeiten wir
          </h2>
        </section>

        <StoryCanvas />
        <ClientLogos />
        {/* <About /> */}
        <FAQ items={HOMEPAGE_FAQ} />

        {/* <SuccessCriteria /> */}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
