/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import { Lenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

import "./style.css";

const slides = [
  {
    img: "/assets/pic1.png",
    title: "SuperSquid",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    labore velit eveniet? Minima possimus cumque provident, veniam
    modi et ducimus suscipit molestias velit error odio assumenda
    at`,
  },
  {
    img: "/assets/pic2.png",
    title: "Crazied Cartus",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    labore velit eveniet? Minima possimus cumque provident, veniam
    modi et ducimus suscipit molestias velit error odio assumenda
    at`,
  },
  {
    img: "/assets/pic3.png",
    title: "Wierd houuse",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    labore velit eveniet? Minima possimus cumque provident, veniam
    modi et ducimus suscipit molestias velit error odio assumenda
    at`,
  },
];

const Page = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = document.querySelector(".slider");
    const sections = gsap.utils.toArray(".slider section");

    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 2,
        end: () => "+=" + slider.offsetWidth,
      },
    });

    tl.to(slider, {
      xPercent: -66,
    });

    sections.forEach((stop, index) => {
      tl.from(stop.querySelector(".content"), {
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: stop.querySelector(".content"),
          start: "left center",
          end: "center center",
          containerAnimation: tl,
          scrub: true,
          markers: true,
        },
      }).from(
        stop.querySelector("img"),
        {
          xPercent: 40,
          yPercent: -100,
          ease: "elastic.out(1,1)",
          scrollTrigger: {
            trigger: stop.querySelector("img"),
            scrub: 2,
            containerAnimation: tl,
          },
        },
        "<"
      );
    });
  });

  return (
    <main className="w-screen h-screen">
      <div
        style={{
          backgroundImage: `url(https://jmd.im/wp-content/uploads/2022/11/BLACK_2_preview.jpg)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-screen h-screen fixed z-[-1]"
      ></div>
      <div className="outer overflow-x-hidden">
        <div className="slider flex w-[300vw]">
          {slides.map((item) => (
            <section key={item} className="h-screen w-full p-[50px]">
              <div className="inner relative flex h-[calc(100%)] items-end text-4xl text-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute z-0 w-[35%] right-[20%]"
                />
                <div className="content justify-self-end">
                  <h1>{item.title}</h1>
                  <p className="w-1/2 leading-[1.5] text-xl">{item.desc}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
