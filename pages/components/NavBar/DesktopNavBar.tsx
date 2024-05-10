import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const DesktopNavBar = ({ openNav }: Props) => {
  return (
    <nav className="w-full fixed z-[10000] top-0 bg-[#141c27] h-[14vh] shadow-md">
      <main className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[1.5rem] text-white font-bold">
          WEB<span className="text-green-400">DEV</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Services</div>
        <div className="nav-link">Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden cursor-pointer text-green-400" />
        </div>
      </main>
    </nav>
  );
};

export default DesktopNavBar;
