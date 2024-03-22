/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
  "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
];

const Page = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slideWrapper = document.querySelector(".slide-wrapper");
    const slide = document.querySelector(".slide");

    const tl = gsap.timeline();

    tl.to(slide, {
      x: `-${slide.offsetWidth}`,
      scrollTrigger: {
        trigger: slideWrapper,
        start: "top top",
        end: `+=${slide.offsetWidth}`,
        pin: true,
        scrub: 1,
        markers: true,
      },
    });
  });

  return (
    <main className="w-screen min-h-screen overflow-x-hidden">
      <div className="w-screen h-screen bg-pink-200"></div>
      <div className="slide-wrapper h-screen relative z-[1] flex items-center">
        <div className="slide relative z-[1] h-screen ml-2 pr-2 whitespace-nowrap block">
          {images.map((item) => (
            <div
              key={item}
              className="slide-box h-screen w-screen inline-block"
            >
              <img
                src={item}
                alt="item"
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen h-screen bg-pink-200"></div>
    </main>
  );
};

export default Page;
