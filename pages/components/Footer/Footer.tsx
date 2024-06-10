import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-b-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/Sky-Roh"
            className="lg:w-[6.5rem] lg:h-[6.5rem] md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center flex-shrink-0 rounded-full bg-[#55e6a5] hover:bg-[#fe9c9c]"
          >
            <div className="relative lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]">
              <Image
                src="/icons/github.svg"
                alt="Github"
                width={64}
                height={64}
                className="text-black"
              />
            </div>
          </Link>
          <div className="w-full">
            <h1 className="text-[1.5rem] mb-[0.2rem] font-semibold text-white">
              GitHub
            </h1>
            <Link
              href="https://github.com/Sky-Roh"
              className="text-[1rem] w-[90%] text-white opacity-60 hover:opacity-100"
            >
              github.com/Sky-Roh
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/haneul-sky-roh/"
            className="lg:w-[6.5rem] lg:h-[6.5rem] md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center flex-shrink-0 rounded-full bg-[#55e6a5] hover:bg-[#FAFF67]"
          >
            <div className="relative lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={64}
                height={64}
                className=" text-black"
              />
            </div>
          </Link>
          <div className="w-full">
            <h1 className="text-[1.5rem] mb-[0.2rem] font-semibold text-white">
              LinkedIn
            </h1>
            <Link
              href="https://www.linkedin.com/in/haneul-sky-roh/"
              className="text-[1rem] w-[90%] text-white opacity-60 hover:opacity-100"
            >
              inkedin.com/in/haneul-sky-roh
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="mailto:haneul.sky.roh@gmail.com"
            className="lg:w-[6.5rem] lg:h-[6.5rem] md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center flex-shrink-0 rounded-full bg-[#55e6a5]  hover:bg-[#67bdff]"
          >
            <div className="relative lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]">
              <Image
                src="/icons/envelope-at-fill.svg"
                alt="Email"
                width={64}
                height={64}
                className=" text-black"
              />
            </div>
          </Link>
          <div className="w-full">
            <h1 className="text-[1.5rem] mb-[0.2rem]  font-semibold text-white">
              Email
            </h1>
            <Link
              href="mailto:haneul.sky.roh@gmail.com"
              className="text-[1rem] w-[90%] text-white opacity-60 hover:opacity-100"
            >
              haneul.sky.roh@gmail.com
            </Link>
          </div>
        </div>
      </div>
      {/* ====================================================== */}
      {/* Footer */}
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 sm:text-right">
        <p className=" text-[1.1rem] mb-[2rem] md:mb-0 text-white opacity-40 flex justify-end sm:justify-end md:justify-start">
          SKY.DEV 2024 | All Rights Reserved
        </p>
        <div className="flex items-center justify-end sm:justify-end md:justify-start lg:justify-end space-x-10">
          <p className="text-[1rem] text-white opacity-40">
            Terms & Conditions
          </p>
          <p className="text-[1rem] text-white opacity-40">Privacy Policy</p>
          <p className="text-[1rem] text-white opacity-40">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
