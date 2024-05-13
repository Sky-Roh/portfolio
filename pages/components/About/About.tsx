import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-[88vh] md:min-h-[36rem] min-h-[40rem] bg-[#26282d] pb-[3rem] pt-[4rem] md:pt-[8rem] flex items-center justify-center">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium iure tempora aut. Porro corporis rerum molestiae,
              animi eos quisquam ipsam itaque quod at rem possimus est libero
              ducimus ullam aperiam.
            </p>
          </div>
          <button className="px-[2rem] hover:bg-green-400 transition-all duration-200 py-[1rem] text-[1rem] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download cv</p>
            <ArrowDownTrayIcon className="w-[1.6re,] h-[1.7rem] text-black" />
          </button>
        </div>
        <div data-aos="fade-left" className="relative lg:w-[30rem] sm:flex lg:h-[30rem] lg-mt-0 mx-auto md:mx-0 md:w-[18.2rem] md:h-[18.2rem] sm:w-[15rem] sm:h-[15rem] w-[10rem] h-[10rem] hidden ">
          <Image
            src="/images/about-image-main.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain "
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] md:top-[-2rem] md:right-[-2rem]  top-[-1rem] right-[-1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
