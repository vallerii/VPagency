"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { NetworkNode } from "./NetworkNode";
import {
  NODES,
  CAPTIONS,
  computeFrame,
  computeConnections,
  computeActiveNodes,
  captionFrame,
  type NodeFrame,
} from "./story-data";

function ReducedStory() {
  const frames = computeFrame(1);
  const connections = computeConnections(1, frames);
  const active = computeActiveNodes(connections);

  return (
    <div className="w-full">
      {CAPTIONS.map((cap) => (
        <section key={cap.index} className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl">
            <span className="mb-6 flex items-center gap-2 text-[18px] font-medium text-ink-faint">
              <span className="font-semibold text-ink">{cap.index}</span>
              {cap.eyebrow}
            </span>
            <h2 className="text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
              {cap.title.join(" ")}
            </h2>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px] xl:text-[26px]">
              {cap.text}
            </p>
          </div>
        </section>
      ))}

      <div className="relative mx-auto h-[440px] w-full max-w-3xl px-6 sm:h-[520px]" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map((c, i) => (
            <path
              key={`${c.from}-${c.to}-${i}`}
              d={c.d}
              fill="none"
              stroke="var(--color-accent-hover)"
              strokeWidth={1.7}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        {NODES.map((n) => {
          const f = frames[n.id];
          return (
            <NetworkNode
              key={n.id}
              kind={f.kind}
              label={f.label}
              accent={n.hub || active.has(n.id)}
              rotate={f.rotate}
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: f.w * 0.8,
                height: f.h * 0.8,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function StoryCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  const [t, setT] = useState(0);

  useEffect(() => {
    const unsub = smooth.on("change", (v) => setT(v));
    return () => unsub();
  }, [smooth]);

  if (prefersReduced) {
    return <ReducedStory />;
  }

  const frames = computeFrame(t);
  const connections = computeConnections(t, frames);
  const active = computeActiveNodes(connections);

  return (
    <div ref={containerRef} className="relative h-[560vh] w-full">
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <div className="absolute inset-x-0 top-[44%] bottom-0 lg:inset-0 lg:left-[46%]" aria-hidden="true">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {connections.map((c, i) => (
              <path
                key={`${c.from}-${c.to}-${i}`}
                d={c.d}
                fill="none"
                stroke="var(--color-accent-hover)"
                strokeWidth={1.7}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ opacity: c.opacity }}
              />
            ))}
          </svg>

          {NODES.map((n) => {
            const f: NodeFrame = frames[n.id];
            return (
              <NetworkNode
                key={n.id}
                kind={f.kind}
                label={f.label}
                accent={n.hub || active.has(n.id)}
                rotate={f.rotate}
                style={{
                  left: `${f.x}%`,
                  top: `${f.y}%`,
                  width: f.w,
                  height: f.h,
                }}
              />
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-start px-6 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pt-[40vh] ">
          <div className="relative mx-auto w-full max-w-[1440px]">
            {CAPTIONS.map((cap, i) => {
              const { opacity, translateY } = captionFrame(t, i, CAPTIONS.length);
              return (
                <div
                  key={cap.index}
                  className="absolute left-0 top-0 w-full"
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                  }}
                >
                  <span className="mb-6 flex items-center gap-2 text-[18px] font-medium text-ink-faint">
                    <span className="font-semibold text-ink">{cap.index}</span>
                    {cap.eyebrow}
                  </span>
                  <h2 className="text-balance text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]">
                    {cap.title.map((line, li) => (
                      <span key={li} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  <p className="mt-8 max-w-[560px] text-[16px] leading-[1.5] text-ink-soft sm:text-[19px] lg:text-[22px] xl:text-[26px]">
                    {cap.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          style={{ opacity: t < 0.03 ? 1 : Math.max(0, 1 - t * 20) }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-ink-faint"
        >
          Scrollen
        </motion.div>
      </div>
    </div>
  );
}
