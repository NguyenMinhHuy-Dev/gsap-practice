import React from "react";
import TransitionLink from "./TransitionLink";

const Header = () => {
  return (
    <header className="fixed top-0 w-screen h-20">
      <nav className="w-full max-w-screen-xl mx-auto flex items-center gap-5 p-5">
        <div className="text-5xl text-yellow-500">
          <TransitionLink href="/transition-page-v2" label="LOGO" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-5">
          <div className="min-w-[150px] text-2xl text-black mix-blend-difference">
            <TransitionLink href="/transition-page-v2" label="About" />
          </div>
          <div className="min-w-[150px] text-2xl text-black mix-blend-difference">
            <TransitionLink
              href="/transition-page-v2/process"
              label="process"
            />
          </div>
          <div className="min-w-[150px] text-2xl text-black mix-blend-difference">
            <TransitionLink href="/transition-page-v2/review" label="review" />
          </div>

          <div className="min-w-[150px] text-2xl text-black mix-blend-difference">
            <TransitionLink
              href="/transition-page-v2/contact"
              label="contact"
            />
          </div>
        </div>
        <div className="h-full flex items-center text-2xl">Menu</div>
      </nav>
    </header>
  );
};

export default Header;
