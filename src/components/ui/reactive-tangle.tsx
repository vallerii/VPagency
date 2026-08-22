
import { useEffect, useRef } from "react";

type InteractiveLinesProps = {
  style?: React.CSSProperties;
  backgroundColor?: string;
  lineColor?: string;
  lineWidth?: number;
  minLines?: number;
  maxLines?: number;
  fade?: boolean;
  fadeIntensity?: number;
  tiltDeg?: number;
  tiltMinWidth?: number;
};

type Point = {
  x: number;
  y: number;
};

export default function InteractiveTangle({
  style,
  backgroundColor = "#17171A",
  lineColor = "#B8D0EA",
  lineWidth = 1.5,
  minLines = 10,
  maxLines = 22,
  fade = true,
  fadeIntensity = 50,
  tiltDeg = 0,
  tiltMinWidth = 1024,
}: InteractiveLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseRef = useRef({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  });

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      mouseRef.current.x = 0.5;
      mouseRef.current.y = 0.5;
      mouseRef.current.targetX = 0.5;
      mouseRef.current.targetY = 0.5;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    const lerp = (a: number, b: number, t: number) =>
      a + (b - a) * t;

    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    const drawCurve = (
      start: Point,
      end: Point,
      side: "left" | "right",
      index: number,
      total: number,
      mouseX: number,
      mouseY: number
    ) => {
      const t = index / Math.max(total - 1, 1);

      /*
       * Основная идея:
       * линии начинаются далеко за пределами экрана,
       * сходятся к центральному "узлу",
       * проходят через него и снова расходятся.
       */

      const centerX = width / 2;
      const centerY =
        height / 2 +
        (mouseY - 0.5) * height * 0.12;

      // Разброс линий по вертикали на краях
      const edgeSpread = height * 1.15;

      const edgeY =
        height / 2 +
        (t - 0.5) * edgeSpread;

      const direction = side === "left" ? 1 : -1;

      /*
       * Каждая линия получает свою глубину.
       * Центральные линии сильнее закручиваются.
       */
      const centerOffset =
        (t - 0.5) *
        height *
        (0.45 + Math.sin(t * Math.PI) * 0.25);

      const mouseInfluence =
        (mouseX - 0.5) *
        width *
        0.12;

      const twist =
        Math.sin(t * Math.PI) *
        height *
        0.22;

      ctx.beginPath();

      /*
       * Используем несколько сегментов вместо обычной bezier,
       * чтобы получить более органичный "клубок".
       */
      const segments = 70;

      for (let i = 0; i <= segments; i++) {
        const p = i / segments;

        /*
         * x:
         * от края -> центр -> другой край
         */
        let x;

        if (p < 0.5) {
          const local = p * 2;

          x =
            side === "left"
              ? lerp(-width * 0.15, centerX, local)
              : lerp(width * 1.15, centerX, local);
        } else {
          const local = (p - 0.5) * 2;

          x =
            side === "left"
              ? lerp(centerX, width * 1.15, local)
              : lerp(centerX, -width * 0.15, local);
        }

        /*
         * Базовая вертикальная позиция.
         */
        let y = lerp(edgeY, centerY, Math.sin(p * Math.PI));

        /*
         * Сильное движение вокруг центра.
         *
         * Именно эта часть создаёт ощущение
         * запутанных линий.
         */
        const centerStrength =
          Math.sin(p * Math.PI);

        const rotation =
          direction *
          Math.sin(p * Math.PI * 2) *
          twist;

        y += rotation * (0.35 + Math.sin(t * Math.PI) * 0.8);

        /*
         * Дополнительное смещение,
         * чтобы линии не выглядели одинаковыми.
         */
        y +=
          Math.sin(
            p * Math.PI * 2 +
              t * Math.PI * 3
          ) *
          height *
          0.035 *
          centerStrength;

        /*
         * Курсор немного двигает центральный клубок.
         */
        if (centerStrength > 0) {
          y +=
            (mouseY - 0.5) *
            height *
            0.08 *
            centerStrength;

          x +=
            mouseInfluence *
            centerStrength;
        }

        /*
         * Лёгкое индивидуальное смещение
         * каждой линии.
         */
        y +=
          centerOffset *
          Math.sin(p * Math.PI) *
          0.55;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    };

    const draw = () => {
      /*
       * Плавное следование за курсором.
       */
      mouseRef.current.x = lerp(
        mouseRef.current.x,
        mouseRef.current.targetX,
        0.045
      );

      mouseRef.current.y = lerp(
        mouseRef.current.y,
        mouseRef.current.targetY,
        0.045
      );

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      ctx.save();

      /*
       * Небольшой общий наклон на desktop.
       */
      if (tiltDeg && width >= tiltMinWidth) {
        ctx.translate(width / 2, height / 2);

        ctx.rotate(
          (tiltDeg * Math.PI) / 180
        );

        ctx.translate(
          -width / 2,
          -height / 2
        );
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const lineCount = Math.round(
        lerp(
          minLines,
          maxLines,
          clamp(mouseY, 0, 1)
        )
      );

      /*
       * Левая половина.
       */
      for (let i = 0; i < lineCount; i++) {
        drawCurve(
          {
            x: -width * 0.15,
            y: height / 2,
          },
          {
            x: width / 2,
            y: height / 2,
          },
          "left",
          i,
          lineCount,
          mouseX,
          mouseY
        );
      }

      /*
       * Правая половина.
       */
      for (let i = 0; i < lineCount; i++) {
        drawCurve(
          {
            x: width * 1.15,
            y: height / 2,
          },
          {
            x: width / 2,
            y: height / 2,
          },
          "right",
          i,
          lineCount,
          mouseX,
          mouseY
        );
      }

      ctx.restore();

      /*
       * Затемнение краёв.
       */
      if (fade) {
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.7
        );

        const fadeAmount = clamp(
          fadeIntensity / 50,
          0,
          1
        );

        gradient.addColorStop(
          0,
          "rgba(23,23,26,0)"
        );

        gradient.addColorStop(
          0.45,
          "rgba(23,23,26,0)"
        );

        gradient.addColorStop(
          0.75,
          `rgba(23,23,26,${0.25 * fadeAmount})`
        );

        gradient.addColorStop(
          1,
          `rgba(23,23,26,${0.9 * fadeAmount})`
        );

        ctx.fillStyle = gradient;
        ctx.fillRect(
          0,
          0,
          width,
          height
        );
      }

      animationRef.current =
        requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [
    backgroundColor,
    lineColor,
    lineWidth,
    minLines,
    maxLines,
    fade,
    fadeIntensity,
    tiltDeg,
    tiltMinWidth,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}