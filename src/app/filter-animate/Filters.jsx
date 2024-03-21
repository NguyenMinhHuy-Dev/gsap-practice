import Link from "next/link";

const Filters = () => {
  return (
    <div className="w-full h-[56px] p-2 flex items-center justify-center gap-5">
      <Link
        href="?type=popular"
        className="filter flex items-center justify-center w-[200px] h-full text-2xl text-white border-2 rounded-[20px] hover:bg-white hover:text-black"
      >
        Popular
      </Link>
      <Link
        href="?type=top_rated"
        className="filter flex items-center justify-center w-[200px] h-full text-xl text-white border-2 rounded-[20px] hover:bg-white hover:text-black"
      >
        Top Rated
      </Link>
      <Link
        href="?type=upcoming"
        className="filter flex items-center justify-center w-[200px] h-full text-xl text-white border-2 rounded-[20px] hover:bg-white hover:text-black"
      >
        Upcoming
      </Link>
    </div>
  );
};

export default Filters;
