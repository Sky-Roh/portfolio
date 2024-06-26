import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
// Animation AOS
// https://github.com/michalsnik/aos

const HomePage = () => {
  const [navMenu, setNavMenu] = useState(false);
  const openNavMenu = () => setNavMenu(true);
  const closeNavMenu = () => setNavMenu(false);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <Head>
        <title>SKYDEV PORTFOLIO</title>
      </Head>

      <main className="box-border">
        <section>
          {/* NavBar */}
          <NavBar nav={navMenu} openNav={openNavMenu} closeNav={closeNavMenu} />
          {/* Components */}
          <div className="relative top-[14vh] overflow-x-hidden">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
