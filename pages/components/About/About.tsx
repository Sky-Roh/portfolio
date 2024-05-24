import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import aboutImg from "../../../public/images/about-image-main.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="scroll-m-[14vh] h-[88vh] lg:min-h-[38rem] md:min-h-[36rem] min-h-[40rem] bg-[#26282d] pb-[3rem] pt-[4rem] md:pt-[8rem] flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-[auto] gap-[3rem] items-center">
        <div>
          <h1 className="text-[1.25rem] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[1.6rem] lg:text-[2.5rem] md:leading-[3rem] leading-[2rem] font-bold mb-[3rem] text-white">
            Transforming <span className="text-green-500">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[1.2rem] text-slate-300 w-[80%]">
              I'm a full stack developer passionate about web development,
              transforming ideas into user-friendly solutions. With experience
              in front-end and back-end, I've created intuitive dashboards. I
              thrive on tackling challenges and continuously learning new
              technologies. Let's connect and bring your vision to life.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="relative lg:w-[30rem] lg:h-[30rem] sm:flex lg-mt-0 mx-auto md:mx-0 md:w-[18.2rem] md:h-[18.2rem] sm:w-[14rem] sm:h-[14rem] w-[10rem] h-[10rem] hidden"
        >
          <img
            src={aboutImg.src}
            className="relative z-[20] w-full h-full object-cover" // Tailwind CSS utilities
            alt="user"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] md:top-[-2rem] md:right-[-2rem] top-[-1rem] right-[-1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
