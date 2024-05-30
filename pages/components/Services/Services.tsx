import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="scroll-m-[14vh] h-[100%] xl:min-h-[46rem]  bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading mb-9">
        My <span className="text-green-400">Services</span>
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto justify-center gap-[3rem] mt-[4rem] items-center text-white"
      >
        <div>
          <div className="bg-red-700 hover:scale-110 transform translate-all duration-200 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />

            <h1 className="text-[1.1rem] md:text-[1.5rem] mx-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[1rem] text-[#d3d2d2]">
              I create beautiful and interactive websites that look great on any
              device. Using the latest technologies like React, I ensure your
              site is fast, responsive, and a joy to use.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-orange-700 hover:scale-110 transform translate-all duration-200 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />

            <h1 className="text-[1.1rem] md:text-[1.5rem] mx-[1.5rem]">
              Backend
            </h1>
            <p className="text-[1rem] text-[#d3d2d2]">
              I build the backbone of your web applications with reliable and
              efficient server-side solutions. Using Node.js, Express, And databases
              I handle everything from database management to API development.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform translate-all duration-200 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />

            <h1 className="text-[1.1rem] md:text-[1.5rem] mx-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-[1rem] text-[#d3d2d2]">
              Need someone who can do it all? I combine frontend and backend
              skills to create complete web applications from start to finish.
              From designing the user interface to setting up the server, I've
              got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
