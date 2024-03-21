"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Movie from "../filter-animate/Movie";
import gsap from "gsap";

const Page = () => {
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=b4d64cd7bb752ebb092cd3558c900c25`
      );
      const res = data.json();
      return res;
    },
  });

  useEffect(() => {
    if (data) {
      //   gsap.to(".item", {
      //     x: 0,
      //     ease: "linear",
      //     repeat: -1,
      //   });
    }
  }, [data]);

  return (
    <main className="w-screen min-h-screen p-5">
      <div className="item w-full h-full flex items-center justify-center gap-5">
        {data?.results?.slice(0, 5).map((item, index) => (
          <div key={item.id} className="!w-1/5 ">
            <Movie image={item.poster_path} title={item.title} />
          </div>
        ))}
        {data?.results?.slice(0, 5).map((item, index) => (
          <div key={item.id} className="w-1/5">
            <Movie image={item.poster_path} title={item.title} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
