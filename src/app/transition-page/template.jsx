"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { animatePageIn } from "./animation";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div className="banner min-h-screen bg-neutral-500 z-10 fixed top-0 left-0 w-1/5"></div>
      <div className="banner min-h-screen bg-neutral-500 z-10 fixed top-0 left-[20%] w-1/5"></div>
      <div className="banner min-h-screen bg-neutral-500 z-10 fixed top-0 left-[40%] w-1/5"></div>
      <div className="banner min-h-screen bg-neutral-500 z-10 fixed top-0 left-[60%] w-1/5"></div>
      <div className="banner min-h-screen bg-neutral-500 z-10 fixed top-0 left-[80%] w-1/5"></div>

      {children}
    </div>
  );
}
