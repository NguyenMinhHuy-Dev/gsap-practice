import React from "react";
import Header from "./components/Header";

function TransitionV2Layout({ children }) {
  return (
    <main className="scroll-smooth w-screen min-h-screen bg-white relative">
      {/* <div className="grid grid-cols-10 grid-rows-5 fixed w-full h-screen top-0 left-0 z-10">
        {Array.from(Array(20)).map((_, index) => (
          <div key={index} className="w-full h-full bg-green-400"></div>
        ))}
      </div> */}

      <Header />
      {children}
    </main>
  );
}

export default TransitionV2Layout;
