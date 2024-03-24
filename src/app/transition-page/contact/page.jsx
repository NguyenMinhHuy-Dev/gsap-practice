"use client";
import React from "react";
import AnimateLink from "../components/AnimateLink";

const page = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <AnimateLink href="/transition-page" label="HOME" />
    </main>
  );
};

export default page;
