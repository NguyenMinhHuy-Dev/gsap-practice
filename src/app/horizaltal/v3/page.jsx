/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Suspense } from "react";
import "../style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

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
    const slider = document.querySelector(".slider");
    const slideWrapper = document.querySelector(".slide-wrapper");
    const slides = document.querySelectorAll(".slide");

    let target = 0;
    let current = 0;
    let ease = 0.075;
    let maxScroll = slideWrapper.offsetWidth - window.innerWidth;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateScaleAndPosition = () =>
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const centerPosition = (rect.left + rect.right) / 2;
        const distanceFromCenter = centerPosition - window.innerWidth / 2;

        let scale, offsetX;

        if (distanceFromCenter > 0) {
          scale = Math.min(1.75, 1 + distanceFromCenter / window.innerHeight);
          offsetX = (scale - 1) * 300;
        } else {
          scale = Math.max(
            0.5,
            1 - Math.abs(distanceFromCenter) / window.innerWidth
          );
          offsetX = 0;
        }

        gsap.set(slide, {
          scale: scale,
          x: offsetX,
        });
      });

    const update = () => {
      current = lerp(current, target, ease);

      gsap.set(".slide-wrapper", {
        x: -current,
      });

      updateScaleAndPosition();

      requestAnimationFrame(update);
    };

    window.addEventListener("resize", () => {
      maxScroll = slideWrapper.offsetWidth - window.innerWidth;
    });

    window.addEventListener("wheel", (e) => {
      target += e.deltaY;
      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
    });

    update();
  });
  return (
    <Suspense fallback={null}>
      <main className="w-screen h-screen overflow-hidden">
        <section className="slider w-full h-full overflow-hidden">
          <div className="slide-wrapper absolute top-0 w-[8000px] px-[600px] h-full flex items-center gap-[100px]">
            {images.map((item, index) => (
              <div className="slide !w-[400px] h-[500px] bg-white" key={index}>
                <img
                  src={item}
                  alt="item"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default Page;
