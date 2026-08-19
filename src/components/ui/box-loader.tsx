"use client";

import React from "react";

/**
 * Decorative 3D construction animation — recolored to the site's sky accent.
 * Boxes fly in and stack into a small pyramid on a ground plane, then reset.
 * This animation is treated as core hero content, so globals.css explicitly
 * keeps it running even under prefers-reduced-motion (see the `.vp-loader`
 * override there) instead of collapsing its animation-duration to ~0.
 */
export function BoxLoader() {
  const loaderCss = `
    .vp-loader {
      --duration: 3.6s;
      --primary: #5BADD6;
      --primary-light: #78BCDD;
      --primary-rgba: rgba(120, 188, 221, 0);
      --mask-bg: var(--color-bg);
      width: 200px;
      height: 320px;
      position: relative;
      transform-style: preserve-3d;
    }
    @media (max-width: 480px) {
      .vp-loader {
        zoom: 0.6;
      }
    }
    .vp-loader:before, .vp-loader:after {
      --r: 20.5deg;
      content: "";
      width: 320px;
      height: 140px;
      position: absolute;
      right: 32%;
      bottom: -11px;
      background: var(--mask-bg);
      transform: translateZ(200px) rotate(var(--r));
      animation: vp-mask var(--duration) linear forwards infinite;
    }
    .vp-loader:after {
      --r: -20.5deg;
      right: auto;
      left: 32%;
    }
    .vp-loader .ground {
      position: absolute;
      left: -50px;
      bottom: -120px;
      transform-style: preserve-3d;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
    }
    .vp-loader .ground div {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
      width: 200px;
      height: 200px;
      background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
      transform-style: preserve-3d;
      animation: vp-ground var(--duration) linear forwards infinite;
    }
    .vp-loader .ground div:before, .vp-loader .ground div:after {
      --rx: 90deg;
      --ry: 0deg;
      --x: 44px;
      --y: 162px;
      --z: -50px;
      content: "";
      width: 156px;
      height: 300px;
      opacity: 0;
      background: linear-gradient(var(--primary), var(--primary-rgba));
      position: absolute;
      transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
      animation: vp-ground-shine var(--duration) linear forwards infinite;
    }
    .vp-loader .ground div:after {
      --rx: 90deg;
      --ry: 90deg;
      --x: 0;
      --y: 177px;
      --z: 150px;
    }
    .vp-loader .box {
      --x: 0;
      --y: 0;
      position: absolute;
      animation: var(--duration) linear forwards infinite;
      transform: translate(var(--x), var(--y));
    }
    .vp-loader .box div {
      background-color: var(--primary);
      width: 48px;
      height: 48px;
      position: relative;
      transform-style: preserve-3d;
      animation: var(--duration) ease forwards infinite;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
    }
    .vp-loader .box div:before, .vp-loader .box div:after {
      --rx: 90deg;
      --ry: 0deg;
      --z: 24px;
      --y: -24px;
      --x: 0;
      content: "";
      position: absolute;
      background-color: inherit;
      width: inherit;
      height: inherit;
      transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
      filter: brightness(var(--b, 1.15));
    }
    .vp-loader .box div:after {
      --rx: 0deg;
      --ry: 90deg;
      --x: 24px;
      --y: 0;
      --b: 1.3;
    }
    .vp-loader .box.box0 { --x: -220px; --y: -120px; left: 58px; top: 108px; animation-name: vp-box-move0; }
    .vp-loader .box.box0 div { animation-name: vp-box-scale0; }
    .vp-loader .box.box1 { --x: -260px; --y: 120px; left: 25px; top: 120px; animation-name: vp-box-move1; }
    .vp-loader .box.box1 div { animation-name: vp-box-scale1; }
    .vp-loader .box.box2 { --x: 120px; --y: -190px; left: 58px; top: 64px; animation-name: vp-box-move2; }
    .vp-loader .box.box2 div { animation-name: vp-box-scale2; }
    .vp-loader .box.box3 { --x: 280px; --y: -40px; left: 91px; top: 120px; animation-name: vp-box-move3; }
    .vp-loader .box.box3 div { animation-name: vp-box-scale3; }
    .vp-loader .box.box4 { --x: 60px; --y: 200px; left: 58px; top: 132px; animation-name: vp-box-move4; }
    .vp-loader .box.box4 div { animation-name: vp-box-scale4; }
    .vp-loader .box.box5 { --x: -220px; --y: -120px; left: 25px; top: 76px; animation-name: vp-box-move5; }
    .vp-loader .box.box5 div { animation-name: vp-box-scale5; }
    .vp-loader .box.box6 { --x: -260px; --y: 120px; left: 91px; top: 76px; animation-name: vp-box-move6; }
    .vp-loader .box.box6 div { animation-name: vp-box-scale6; }
    .vp-loader .box.box7 { --x: -240px; --y: 200px; left: 58px; top: 87px; animation-name: vp-box-move7; }
    .vp-loader .box.box7 div { animation-name: vp-box-scale7; }
    @keyframes vp-box-move0 { 12% { transform: translate(var(--x), var(--y)); } 25%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale0 { 6% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 14%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move1 { 16% { transform: translate(var(--x), var(--y)); } 29%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale1 { 10% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 18%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move2 { 20% { transform: translate(var(--x), var(--y)); } 33%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale2 { 14% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 22%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move3 { 24% { transform: translate(var(--x), var(--y)); } 37%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale3 { 18% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 26%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move4 { 28% { transform: translate(var(--x), var(--y)); } 41%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale4 { 22% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 30%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move5 { 32% { transform: translate(var(--x), var(--y)); } 45%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale5 { 26% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 34%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move6 { 36% { transform: translate(var(--x), var(--y)); } 49%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale6 { 30% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 38%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes vp-box-move7 { 40% { transform: translate(var(--x), var(--y)); } 53%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes vp-box-scale7 { 34% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 42%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }

    @keyframes vp-ground { 0%, 65% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } 75%, 90% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1); } 100% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } }
    @keyframes vp-ground-shine { 0%, 70% { opacity: 0; } 75%, 87% { opacity: 0.22; } 100% { opacity: 0; } }
    @keyframes vp-mask { 0%, 65% { opacity: 0; } 66%, 100% { opacity: 1; } }
  `;

  const boxes = [...Array(8).keys()];

  return (
    <>
      <style>{loaderCss}</style>
      <div className="vp-loader" role="presentation" aria-hidden="true">
        {boxes.map((i) => (
          <div key={i} className={`box box${i}`}>
            <div />
          </div>
        ))}
        <div className="ground">
          <div />
        </div>
      </div>
    </>
  );
}
