import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { SelfRecognitionWall } from "@/components/SelfRecognitionWall";
import { RationaleBlock } from "@/components/RationaleBlock";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { ProductThinking } from "@/components/ProductThinking";
import { StoryCanvas } from "@/components/story/StoryCanvas";
import { SuccessCriteria } from "@/components/SuccessCriteria";
import { PortfolioSection } from "@/components/PortfolioSection";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        {/* <SelfRecognitionWall /> */}
        <RationaleBlock />
        <WhatWeBuild />
        <TechnicalExpertise />
        <ProductThinking />
        <section className="px-6 pt-32 lg:pt-44 pb-16 sm:px-10 lg:px-16">
          <h2 className="mx-auto max-w-[1440px] text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
            So arbeiten wir
          </h2>
        </section>

        <StoryCanvas />
        <PortfolioSection />
        <About />

        {/* <SuccessCriteria /> */}
        
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
