"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const containerRef = useRef();
  const tl = useRef();

  const [isOpenNav, setIsOpenNav] = useState(false);

  useGSAP(
    () => {
      gsap.set(".link-text", {
        y: 120,
      });

      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".link-text", {
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (isOpenNav) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpenNav]);

  return (
    <main ref={containerRef} className="w-screen relative min-h-screen">
      <div className="w-full flex items-center justify-between p-5 text-white text-3xl">
        <div>LOGO</div>
        <button onClick={() => setIsOpenNav((prev) => !prev)}>Menu</button>
      </div>

      <div
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }}
        className="overlay fixed flex items-center justify-center flex-col top-0 left-0 w-full h-screen bg-white"
      >
        <div className="absolute top-0 left-0 w-full flex items-center justify-between p-5 text-black text-3xl">
          <div>LOGO</div>
          <button onClick={() => setIsOpenNav((prev) => !prev)}>Close</button>
        </div>
        <div className="w-full h-[128px] overflow-hidden pl-[400px] text-black text-9xl">
          <span className="inline-block link-text">About</span>
        </div>
        <div className="w-full h-[128px] overflow-hidden pl-[400px] text-black text-9xl">
          <span className="inline-block link-text">Projects</span>
        </div>
        <div className="w-full h-[128px] overflow-hidden pl-[400px] text-black text-9xl">
          <span className="inline-block link-text">Contact</span>
        </div>
        <div className="w-full h-[128px] overflow-hidden pl-[400px] text-black text-9xl">
          <span className="inline-block link-text">Docs</span>
        </div>
        <div className="w-full h-[128px] overflow-hidden pl-[400px] text-black text-9xl">
          <span className="inline-block link-text">Latest</span>
        </div>
      </div>
    </main>
  );
};

export default Page;
