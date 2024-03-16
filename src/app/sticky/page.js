"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  const stickL = useRef();
  const stickR = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stickL.current, {
      scaleX: 0,
      scrollTrigger: {
        trigger: stickL.current,
        start: "center center",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
    tl.to(stickR.current, {
      scaleX: 0,
      scrollTrigger: {
        trigger: stickR.current,
        start: "center center",
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
        start: "center center",
        toggleActions: "play none none reverse",
      },
    });
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="w-full cursor-none">
      <div className="w-full h-dvh background"></div>
      <div className="w-full h-[200dvh] relative">
        <div className="cursor" id="cursor"></div>
        <div className="sticky top-0 h-dvh background flex items-center justify-center overflow-hidden">
          <div
            ref={stickL}
            className="absolute z-10 top-0 left-0 w-1/2 origin-left scale-x-100 h-full bg-white"
          ></div>
          <div
            ref={stickR}
            className="absolute z-10 top-0 right-0 w-1/2 origin-right scale-x-100 h-full bg-white"
          ></div>
          <span
            id="text-1"
            className="text-anim1 text-9xl text-white mix-blend-difference"
          >
            FUCK YOU
          </span>
        </div>
      </div>

      <div className="w-full h-dvh background"></div>
    </main>
  );
};

export default Page;
