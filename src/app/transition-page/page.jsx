"use client";

import Link from "next/link";
import React from "react";
import AnimateLink from "./components/AnimateLink";

const Page = () => {
  return (
    <main className="w-screen min-h-screen relative">
      <header className="sticky top-0 w-full h-20">
        <nav className="w-full max-w-screen-2xl h-full mx-auto flex items-center justify-between">
          <div className="text-5xl text-white">LOGO</div>
          <div className="flex-1 h-full flex items-center justify-center text-2xl text-white">
            <AnimateLink href="/transition-page/about" label="about" />
            <AnimateLink href="/transition-page/projects" label="projects" />
            <AnimateLink href="/transition-page/docs" label="docs" />
            <AnimateLink href="/transition-page/contact" label="contact" />
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Page;
