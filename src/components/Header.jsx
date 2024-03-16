import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.png";

const routes = [
  {
    name: "ABOUT",
    href: "#",
  },
  {
    name: "PROJECTS",
    href: "#",
  },
  {
    name: "EXPLORE",
    href: "#",
  },
  {
    name: "TIMELINE",
    href: "#",
  },
  {
    name: "CONTACT",
    href: "#",
  },
];

const Header = () => {
  const [itemClicked, setItemClicked] = useState(0);

  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <div className="w-full max-w-[1460px] mx-auto px-5 flex items-center h-20">
        {/* NAVS */}
        <div className="relative mx-auto h-full grid grid-cols-5">
          {routes.map((item, index) => (
            <Link
              key={index}
              role="textbox"
              aria-multiline="true"
              onClick={() => {
                if (index === 0) window.scrollTo(0, 0);
                setItemClicked(index);
              }}
              href={index === 0 ? "/" : item.href}
              className={`min-w-[150px] transition-all duration-[0.3s] mix-blend-difference after:transition-transform  after:duration-[0.3s] after:origin-right hover:after:origin-left after:ease-out after:content-[''] after:absolute after:z-[-1] after:top-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-full after:bg-white relative select-none w-full h-full flex items-center justify-center font-normal text-xl text-white hover:text-black px-2`}
            >
              {item.name}
            </Link>
          ))}

          {/* ACTIVE LINE */}
          <div
            className="transition-all duration-[0.3s] absolute bottom-0 w-1/5 h-[2px] rounded-full bg-white"
            style={{ left: `${20 * itemClicked}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
