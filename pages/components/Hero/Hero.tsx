import React from "react";
import TypeAnimationEffect from "../Animations/TypeAnimationEffect";
import ProfileImg from "../../../public/images/profile-image.jpg";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/legacy/image";

const Hero = () => {
  return (
    <>
      <div className="m-0 bg-[url('/images/hero-image.jpg')] bg-cover bg-center">
        <div className="h-[88vh] min-h-[35rem] flex items-center justify-center">
          <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
              <h1 className="text-[1.5rem] md:text-[2rem] text-white font-bold">
                Hi, I&apos;M <span className="text-green-400">SKY ROH</span>
              </h1>
              <TypeAnimationEffect />
              <p className="mt-[2rem] text-[1.2rem] text-[#fffafa]">
                I&apos;m a passionate software developer specializing in
                full-stack development. I create dynamic and interactive web
                applications that provide a seamless user experience.
              </p>
              <div className="mt-[2rem] sm:w-[14rem] w-[13rem]">
                <a
                  href="https://drive.google.com/file/d/1f2_7WeB7kMADfInwT8b6qTpCmUGbnyUz/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100%] px-[2rem] hover:bg-green-400 transition-all duration-200 py-[1rem] text-[0.9rem] sm:text-[1rem] font-bold uppercase bg-[#55e6a5] text-black flex  justify-between items-center space-x-2"
                >
                  <p className="flex-shrink-0">Download CV</p>
                  <ArrowDownTrayIcon className="w-[1.4rem] h-[1.4rem] sm:w-[1.6rem] sm:h-[1.6rem] flex-shrink-0 text-black" />
                </a>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="z-[1] w-[28rem] h-[28rem] hidden lg:flex items-center mx-auto rounded-full bg-[#55e6a5] relative"
            >
              <Image
                src={ProfileImg.src}
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
