import React from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import Particle from "../Animations/Particles";

interface Props {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
}

const NavBar = ({ nav, openNav, closeNav }: Props) => {
  return (
    <>
      <Particle />
      <MobileNavBar nav={nav} closeNav={closeNav} />
      <DesktopNavBar openNav={openNav} />
    </>
  );
};

export default NavBar;
