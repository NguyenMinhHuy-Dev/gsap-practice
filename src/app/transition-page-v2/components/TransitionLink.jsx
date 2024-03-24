"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { animatePageOut, animatePageOutV2 } from "../animate";

const TransitionLink = ({ href, label, className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      // animatePageOut({ href, router });
      animatePageOutV2({ href, router });
    }
  };
  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
