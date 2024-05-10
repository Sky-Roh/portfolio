import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";

const HomePage = () => {
  const [navMenu, setNavMenu] = useState(false);
  const openNavMenu = () => setNavMenu(true);
  const closeNavMenu = () => setNavMenu(false);

  return (
    <div className="overflow-x-hidden box-border">
      <div>
        {/* NavBar */}
        <NavBar nav={navMenu} openNav={openNavMenu} closeNav={closeNavMenu} />
        <Hero />
        {/* Main */}  
        <div className="relative z-[30]">
          <About />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
