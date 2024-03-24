import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../animation";

const AnimateLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut({ href, router });
    }
  };
  return (
    <button
      className="min-w-[200px] h-full relative flex items-center justify-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 transition-all after:origin-left"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default AnimateLink;
