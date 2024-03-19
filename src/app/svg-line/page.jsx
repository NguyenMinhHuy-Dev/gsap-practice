"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const path = document.querySelector("path");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;

    window.document.addEventListener("scroll", () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      var drawLength = pathLength * scrollPercentage;

      path.style.strokeDashoffset = pathLength - drawLength;
    });
  }, []);
  return (
    <main className="w-screen h-fit relative">
      <div className="w-full h-[400vh] relative">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
          <svg
            viewBox="0 0 1920 1080"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
            className="w-full h-full inline-block"
          >
            <g clip-path="url(#clip0_21_2)">
              <path
                d="M-2 537.218H801.835L678.901 389.142C616.682 309.101 562.391 182.235 842.98 315.104C1123.57 447.972 959.892 321.107 842.98 241.065C769.722 199.21 723.057 131.409 1122.47 195.042C1521.87 258.674 1288.89 276.25 1122.47 277.084C1084.67 280.586 1020.41 319.206 1065.77 445.671C1111.13 572.136 1050.55 571.403 1014.59 555.228C909.548 574.738 762.496 626.064 1014.59 675.29C1329.7 736.822 1106.91 794.852 1078.81 820.365L1022.61 856.383V1082"
                stroke="white"
                strokeWidth="11"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_2">
                <rect width="1920" height="1080" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="w-full h-screen sticky z-10 bg-slate-400">
        <svg
          viewBox="0 0 1509 1210"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full inline-block"
        >
          <path
            d="M835 0V316.5C593.166 354 169.8 400.1 411 284.5C652.2 168.9 356.167 220 178 260C47.9998 285.167 -134 379.2 178 554C490 728.8 452 626.833 394 554C331 473 342.8 359.6 894 554C1445.2 748.4 1239.67 599.333 1068 500.5C1011.67 473.667 990.2 436.1 1355 500.5C1719.8 564.9 1324 700.333 1080.5 760C952 742.833 723 698.7 835 659.5C947 620.3 754.333 628.5 644 637.5C595.667 653 566.2 709.5 835 811.5C1103.8 913.5 947 898.333 835 878C843.167 886.833 860.5 921.2 864.5 988C868.5 1054.8 866.167 1163.17 864.5 1209"
            stroke="#FF0000"
            strokeWidth="11"
          />
        </svg>
      </div>
    </main>
  );
};

export default Page;
