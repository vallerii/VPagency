import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SelfRecognitionWall } from "@/components/SelfRecognitionWall";
import { RationaleBlock } from "@/components/RationaleBlock";
import { StoryCanvas } from "@/components/story/StoryCanvas";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelfRecognitionWall />
        <RationaleBlock />

        <section className="px-6 pt-32 pb-16 text-center sm:px-10 lg:px-16">
          <h2 className="mx-auto max-w-3xl text-balance text-[7.2vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[4.7vw] lg:text-[3.4vw] xl:text-[88px]">
            Как мы работаем?
          </h2>
        </section>

        <StoryCanvas />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
