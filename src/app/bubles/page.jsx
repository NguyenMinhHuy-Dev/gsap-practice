"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page = () => {
  useGSAP(() => {
    document.addEventListener("mousemove", (e) => {
      let normX = e.clientX / window.innerWidth - 0.5;
      let normY = e.clientY / window.innerHeight - 0.5;

      let moveX = normX * 100;
      let moveY = normY * 50;

      let rotateZ = normX * 25;

      gsap.to(".buble", {
        x: -moveX,
        y: -moveY,
        // rotateZ: rotateZ,
        ease: "power2.out",
        duration: "1.5",
      });
    });
  });
  return (
    <main className="w-screen h-screen relative">
      <div
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NQIFrqGranVtUywkpgu4K7JaRlEpg3BlSA&usqp=CAU)",
        }}
        className="buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-1/2 aspect-square border-2 shadow-inner"
      ></div>
    </main>
  );
};

export default Page;
