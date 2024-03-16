"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const container = useRef();

  useGSAP(
    () => {
      const myText1 = new SplitType("#text-1");
      const tl = gsap.timeline();

      tl.to(".bar", {
        scaleY: 1,
        stagger: 0.05,
        scrollTrigger: {
          start: "top top",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
      tl.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.2,
        scrollTrigger: {
          start: "40% center",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );
  return (
    <main
      ref={container}
      className="main w-full min-h-screen overflow-hidden relative background"
    >
      <div className="w-full h-[500vh] background relative">
        <div className="bars fixed z-10 top-0 left-0 w-full h-screen flex">
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
          <div className="bar origin-bottom w-[10%] h-full scale-y-0 bg-white"></div>
        </div>
        <div className=" title-1 fixed top-0 left-0 z-10 text-white text-8xl mix-blend-difference w-full h-screen flex items-center justify-center">
          <span id="text-1" className="text-anim1">
            FUCK YOU
          </span>
        </div>
      </div>
    </main>
  );
};

export default Page;
