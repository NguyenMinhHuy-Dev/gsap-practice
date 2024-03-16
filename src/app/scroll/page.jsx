"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Page = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-main",
          start: "-50% 50%",
          end: "50% 50%",
          scrub: 0.2,
          pin: true,
        },
      });
      tl.to(
        "#split-center",
        {
          height: "100vh",
        },
        "a"
      )
        .to(
          "#split-top",
          {
            top: "-51%",
          },
          "a"
        )
        .to(
          "#split-bottom",
          {
            bottom: "-50%",
          },
          "a"
        )
        .to(
          "#split-top h1",
          {
            top: "100%",
          },
          "a"
        )
        .to(
          "#split-bottom h1",
          {
            top: "-30%",
          },
          "a"
        );
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      id="scroll-main"
      className="w-full h-screen relative background"
    >
      <div
        id="split-top"
        className="fixed z-10 overflow-hidden top-0 w-full h-[50%] bg-white"
      >
        <h1>SCROLL </h1>
      </div>
      <div id="split-center" className="relative w-full h-0 background">
        <div id="content" className="mt-[100vh] w-full min-h-screen background">
          <div className="w-full h-screen flex items-center justify-center">
            <h2 className="text-4xl text-white">HELLO</h2>
          </div>
          <div className="w-full h-screen flex items-center justify-center">
            <h2 className="text-4xl text-white">My name is Edgar</h2>
          </div>
          <div className="w-full h-screen flex items-center justify-center">
            <h2 className="text-4xl text-white">Welcome to my space!</h2>
          </div>
        </div>
      </div>
      <div
        id="split-bottom"
        className="fixed overflow-hidden bottom-0 w-full h-[50%] bg-white"
      >
        <h1>SCROLL </h1>
      </div>
    </main>
  );
};

export default Page;
