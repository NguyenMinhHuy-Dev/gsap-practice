"use client";

import React, { Suspense } from "react";
import "../style.css";
import { useGSAP } from "@gsap/react";
import gsap, { wrap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
];

const Page = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelector(".items");
    const wrapper = document.querySelector(".items-wrapper");

    console.log(wrapper.offsetWidth);

    const tween = gsap.to(items, {
      x: -(wrapper.offsetWidth * 4),
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: () => "+=" + wrapper.offsetWidth,
      animation: tween,
      pin: true,
      invalidateOnRefresh: true,
      scrub: 0.5,
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
