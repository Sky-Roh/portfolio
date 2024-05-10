import React from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

interface Props {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
}

const NavBar = ({ nav, openNav, closeNav }: Props) => {
  return (
    <div>
      <MobileNavBar nav={nav} closeNav={closeNav} />
      <DesktopNavBar openNav={openNav} />
    </div>
  );
};

export default NavBar;
