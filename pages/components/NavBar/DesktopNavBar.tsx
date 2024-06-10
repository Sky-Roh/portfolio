import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const DesktopNavBar = ({ openNav }: Props) => {
  return (
    <nav className="w-full fixed z-[1000] top-0 bg-[#141c27] h-[14vh] min-h-20 shadow-md">
      <main className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <Link
          href="/"
          className="flex-[0.6] cursor-pointer text-[1.5rem] text-white font-bold"
        >
          SKY.<span className="text-green-400">DEV</span>
        </Link>
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="#about" className="nav-link">
          About
        </Link>
        <Link href="#skills" className="nav-link">
          Skills
        </Link>
        <Link href="#projects" className="nav-link">
          Projects
        </Link>
        <Link href="#services" className="nav-link">
          Services
        </Link>
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden cursor-pointer text-green-400" />
        </div>
      </main>
    </nav>
  );
};

export default DesktopNavBar;
