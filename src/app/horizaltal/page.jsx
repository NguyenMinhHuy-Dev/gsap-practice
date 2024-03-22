"use client";

import React from "react";
import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

    let wrapper = document.querySelector(".items-wrapper");
    let items = gsap.utils.toArray(".item");

    gsap.to(wrapper, {
      x: () => -(wrapper.scrollWidth - document.documentElement.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => "+=" + wrapper.offsetWidth,
        scrub: true,
        markers: true,
      },
    });
  });
  return (
    <main className="w-screen h-fit">
      <section className="w-screen h-screen bg-white flex items-center justify-center text-6xl text-black mix-blend-difference">
        SCROLL
      </section>

      <section className="items-section w-screen h-[1100vh] bg-green-400 relative">
        <div className="w-screen overflow-x-auto sticky top-0">
          <div className="items-wrapper w-fit h-screen flex ">
            {images.map((item) => (
              <div
                className="item w-screen h-screen bg-center bg-cover"
                style={{ backgroundImage: `url(${item})` }}
                key={item}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-screen h-screen bg-white flex items-center justify-center text-6xl text-black">
        END
      </section>
    </main>
  );
};

export default Page;
