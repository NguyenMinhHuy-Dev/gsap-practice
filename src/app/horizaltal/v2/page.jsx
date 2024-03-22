"use client";

import React, { Suspense } from "react";
import "../style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const images = [
  "/assets/img-1.jpg",
  "/assets/img-2.jpg",
  "/assets/img-3.jpg",
  "/assets/img-4.jpg",
  "/assets/img-5.jpg",
];

const Page = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelector(".items");
    const tween = gsap.to(items, {
      x: -(items.scrollWidth - window.innerWidth),
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".items-wrapper",
      start: "top top",
      end: () => "+=" + items.scrollWidth - window.innerWidth,
      animation: tween,
      pin: true,
      invalidateOnRefresh: true,
      scrub: 1,
    });
  });
  return (
    <Suspense fallback={null}>
      <main className="w-screen h-fit">
        <section className="w-screen h-screen bg-white flex items-center justify-center text-6xl text-black mix-blend-difference">
          SCROLL
        </section>

        <section className="items-wrapper w-screen bg-green-400 relative">
          <div className="items w-fit flex overflow-x-hidden">
            {images.map((item) => (
              <div
                key={item}
                style={{ backgroundImage: `url(${item})` }}
                className="item w-screen h-screen bg-cover bg-center"
              ></div>
            ))}
          </div>
        </section>

        <section className="w-screen h-screen bg-white flex items-center justify-center text-6xl text-black">
          END
        </section>
      </main>
    </Suspense>
  );
};

export default Page;
