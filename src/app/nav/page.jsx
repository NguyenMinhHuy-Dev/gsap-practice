"use client";

import React, { useState } from "react";

const Page = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <main className="w-screen relative min-h-screen">
      <div className="w-full flex items-center justify-between p-5 text-white text-3xl">
        <div>LOGO</div>
        <button onClick={() => setIsOpenNav((prev) => !prev)}>Menu</button>
      </div>

      <div
        style={{
          clipPath,
        }}
        className="overylay fixed top-0 left-0 w-full h-screen bg-white"
      >
        <div className="w-full flex items-center justify-between p-5 text-black text-3xl">
          <div>LOGO</div>
          <button onClick={() => setIsOpenNav((prev) => !prev)}>Close</button>
        </div>
      </div>
    </main>
  );
};

export default Page;
