/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import React from "react";
import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-wrapper-01",
        start: "top top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl1.to(".displacement", {
      attr: {
        r: 400,
      },
      duration: 2,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-wrapper-02",
        start: "top bottom",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl2.to(".displacement-02", {
      attr: {
        r: 350,
      },
      duration: 2,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-wrapper-03",
        start: "top bottom",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl3.to(".displacement-03", {
      attr: {
        r: 1250,
      },
      duration: 2,
    });
  });
  return (
    <main className="w-screen bg-black h-fit">
      <section className="section-wrapper-01 w-screen h-[300vh]">
        <div className="sticky top-0 left-0 w-full h-screen">
          <svg
            viewBox="0 0 1728 852"
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="w-full h-screen"
          >
            <defs>
              <filter id="displacementFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.01"
                  numOctaves="1"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="50"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="circleMask">
                <circle
                  cx="600"
                  cy="800"
                  r="0"
                  fill="white"
                  className="displacement"
                />
              </mask>
            </defs>
            <image
              xlinkHref="https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              height="100%"
              mask="url(#circleMask)"
              className="object-cover"
            />
          </svg>
        </div>
      </section>

      <section className="section-wrapper-02 w-screen h-[300vh] bg-black">
        <div className="sticky top-0 left-0 w-full h-screen">
          <svg
            viewBox="0 0 1728 852"
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="w-full h-screen"
          >
            <defs>
              <filter id="displacementFilter-02">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.03"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="50"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="circleMask-02">
                <circle
                  cx="600"
                  cy="800"
                  r="0"
                  fill="white"
                  className="displacement-02"
                />
              </mask>
            </defs>
            <image
              xlinkHref="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              height="100%"
              mask="url(#circleMask-02)"
              className="object-cover"
            />
          </svg>
        </div>
      </section>

      <section className="section-wrapper-03 w-screen h-[300vh] bg-black">
        <div className="sticky top-0 left-0 w-full h-screen">
          <svg
            viewBox="0 0 1728 852"
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="w-full h-screen"
          >
            <defs>
              <filter id="displacementFilter-03">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.03"
                  numOctaves="10"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="50"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="circleMask-03">
                <circle
                  cx="600"
                  cy="800"
                  r="0"
                  fill="white"
                  className="displacement-03"
                />
              </mask>
            </defs>
            <image
              xlinkHref="https://images.unsplash.com/photo-1615859131861-052f0641a60e?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              height="100%"
              mask="url(#circleMask-03)"
            />
          </svg>
        </div>
      </section>
    </main>
  );
};

export default Page;
