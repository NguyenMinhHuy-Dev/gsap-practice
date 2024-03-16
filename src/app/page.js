"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

export default function Home() {
  const tl = gsap.timeline();
  const containerRef = useRef();
  const router = useRouter();
  useGSAP(
    () => {
      const myText1 = new SplitType("#text-1");

      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.2,
      });

      gsap.to([".clip-top", ".clip-bottom"], {
        delay: 2,
        height: "33%",
        duration: 1,
        ease: "power4.inOut",
      });

      gsap.to([".clip-top span", ".clip-bottom span"], {
        y: 0,
        delay: 3,
        duration: 0.2,
      });
      const tweenTop = gsap
        .to(".clip-top span", {
          xPercent: -100,
          repeat: -1,
          duration: 5,
          ease: "linear",
        })
        .totalProgress(0.5);

      gsap.to(tweenTop, {
        timeScale: 1,
      });
      const tweenBottom = gsap
        .to(".clip-bottom span", {
          xPercent: 100,
          repeat: -1,
          duration: 5,
          ease: "linear",
        })
        .totalProgress(0.5);

      gsap.to(tweenBottom, {
        timeScale: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      onClick={() => router.push("/scroll")}
      ref={containerRef}
      className="w-full overflow-x-hidden relative background select-none"
    >
      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <span
          id="text-1"
          className="text-anim1 gap-10 z-10 text-white mix-blend-difference text-8xl"
        >
          <Link href="/scroll">Scroll-</Link>
          <Link href="/sticky">Sticky-</Link>
          <Link href="/bars">Bars-</Link>
          <Link href="/images-scroll">Images Scroll</Link>
        </span>

        <div className="clip-top overflow-hidden flex items-center justify-between text-9xl text-black absolute top-0 w-full h-[0vh] bg-white z-10">
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
        </div>
        <div className="clip-bottom overflow-hidden flex items-center justify-center text-9xl text-black absolute bottom-0 w-full h-[0vh] bg-white z-0">
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
          <span className="text-anim1 translate-y-[200%]">CLICK-</span>
        </div>
      </div>
    </main>
  );
}
