import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Movie = ({ image, title, col, row }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const rect = el.getBoundingClientRect();
    }
  }, []);
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      ref={ref}
      className="movie w-full aspect-square flex items-center justify-center rounded-[10px] bg-white relative after:content-[''] after:absolute after:inset-0 after:bg-black after:bg-opacity-50"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
        backgroundPosition: "center center",
        backgroundSize: "100%",
      }}
    >
      <span className="text-3xl text-white text-center relative z-10">
        {title + " " + col + " " + row}
      </span>
    </motion.div>
  );
};

export default Movie;
