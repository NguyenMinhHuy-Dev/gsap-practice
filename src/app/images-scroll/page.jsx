"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { Suspense } from "react";

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

    const totalSlides = images.length + 1;
    const sectionHeight =
      (document.body.scrollHeight - window.innerHeight) / totalSlides;

    const slides = window.document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      gsap.to(slide, {
        zIndex: (progress) => (progress < 0.5 ? 1 : totalSlides - index),
        scrollTrigger: {
          start: sectionHeight * index + " top",
          end: sectionHeight * (index + 1) + "top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        slide,
        {
          scale: index === 0 ? 1 : 0,
        },
        {
          scale: 1,
          scrollTrigger: {
            start: sectionHeight * index + " top",
            end: sectionHeight * (index + 1) + "top",
            scrub: 1,
          },
        }
      );

      if (index !== 0) {
        gsap.fromTo(
          slide.querySelector(".slide-img"),
          {
            scale: 2,
          },
          {
            scale: 1,
            scrollTrigger: {
              start: sectionHeight * index + " top",
              end: sectionHeight * (index + 1) + " top",
              scrub: 1,
            },
          }
        );
      }
    });
  });
  return (
    <main
      style={{
        height: `${(images.length + 2) * 100}vh`,
      }}
      className={`w-screen relative`}
    >
      {/* Header */}
      <header className="fixed z-[2] w-full p-5 flex justify-between text-xl text-white mix-blend-difference">
        <div>Edgar</div>
        <div>2024</div>
        <div>Work, &nbsp;Agency, &nbsp;Careers, &nbsp;Store</div>
        <div>Let&apos;s talk</div>
      </header>

      {/* Contents */}
      <div className="slider fixed z-[1] top-0 left-0 w-screen h-screen bg-white">
        {images.map((item, index) => (
          <div
            key={index}
            className={`slide absolute top-0 left-0 w-screen h-screen overflow-hidden ${
              index !== 0 && "origin-center z-[2]"
            }`}
            id={`slide-${index + 1}`}
          >
            <Image
              src={item}
              alt="slide"
              fill
              className="slide-img absolute top-0 left-0 z-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 z-[2] w-full p-5 flex justify-between text-xl text-white mix-blend-difference">
        <div>Forging the grid where elite web designs reside</div>
        <div>youtube chanel</div>
      </footer>
    </main>
  );
};

export default Page;
