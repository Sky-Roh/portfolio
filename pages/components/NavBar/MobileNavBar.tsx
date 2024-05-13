import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import Link from "next/link";
interface Props {
  nav: boolean;
  closeNav: () => void;
}
const MobileNavBar = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  // resizing nav bar control
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && nav) {
        closeNav();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav, closeNav]);

  return (
    <div
      className={`fixed ${navAnimation} transform inset-0 z-[1000000] bg-[#09101a] transition-all duration-200 md:hidden`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link onClick={closeNav} href="/" className="nav-link-mobile">
          Home
        </Link>
        <Link onClick={closeNav} href="#about" className="nav-link-mobile">
          About
        </Link>
        <Link onClick={closeNav} href="#skills" className="nav-link-mobile">
          Skills
        </Link>
        <Link onClick={closeNav} href="#projects" className="nav-link-mobile">
          Project
        </Link>
        <Link onClick={closeNav} href="#services" className="nav-link-mobile">
          Services
        </Link>
        <Link onClick={closeNav} href="#contact" className="nav-link-mobile">
          Contact
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-green-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNavBar;
