"use client";

import React from "react";
import About from "./components/About";
import Process from "./process/page";
import Review from "./review/page";
import Contact from "./contact/page";

const Page = () => {
  return (
    <div>
      <About />
      <section className="w-screen h-screen bg-pink-500 text-3xl text-white flex items-center justify-center">
        ANOTHER SECTION
      </section>
      <section className="w-screen h-screen bg-yellow-400 text-3xl text-white flex items-center justify-center">
        ANOTHER SECTION
      </section>
    </div>
  );
};

export default Page;
