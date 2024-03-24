"use client";

import React, { useEffect } from "react";
import { animatePageIn, animatePageInV2 } from "./animate";

const Template = ({ children }) => {
  useEffect(() => {
    // animatePageIn();
    animatePageInV2();
  }, []);
  return (
    <div>
      <div className="transition-wrapper grid grid-cols-10 grid-rows-5 fixed top-0 left-0 w-screen h-screen">
        {Array.from(Array(50)).map((_, index) => (
          <div
            key={index}
            className="transition-item w-full h-full bg-green-400"
          ></div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Template;
