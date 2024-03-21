"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useMemo, useRef } from "react";
import Filters from "./Filters";
import Movie from "./Movie";

const Page = () => {
  const mainRef = useRef();

  const searchParams = useSearchParams();

  const type = useMemo(
    () => searchParams.get("type") || "popular",
    [searchParams]
  );

  const { data } = useQuery({
    queryKey: ["movies", type],
    queryFn: async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=b4d64cd7bb752ebb092cd3558c900c25`
      );
      return data.json();
    },
    enabled: !!type,
  });

  return (
    <main ref={mainRef} className="w-screen min-h-screen p-5">
      <Filters />
      <motion.div layout id="movies" className="grid grid-cols-5 mt-5 gap-5">
        {data?.results?.map((item, index) => (
          <Movie key={item.id} image={item.poster_path} title={item.title} />
        ))}
      </motion.div>
    </main>
  );
};

export default Page;
