import React from "react";
import Particle from "../Animations/Particles";
import TypeAnimationEffect from "../Animations/TypeAnimationEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
const Hero = () => {
  return (
    <>
      <div className="m-0 bg-[url('/images/hero-image.jpg')] bg-cover bg-center">
        <div className="h-[12vh] flex items-center justify-center"></div>
        <div className="h-[88vh] flex items-center justify-center">
          <Particle />
          <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
              <h1 className="text-[1.5rem] md:text-[2rem] text-white font-bold">
                Hi, I'M <span className="text-green-400">SKY ROH</span>
              </h1>
              <TypeAnimationEffect />
              <p className="mt-[2rem] text-[1.2rem] text-[#fffafa]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                sunt, dolorem laudantium natus perspiciatis molestias omnis
                minima, laborum quidem ratione id molestiae aperiam dolores
                culpa, recusandae accusantium. Quibusdam, architecto qui?
              </p>
              <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                <button className="px-[2rem] hover:bg-green-400 transition-all duration-200 py-[1rem] text-[1rem] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                  <p>Download cv</p>
                  <ArrowDownTrayIcon className="w-[1.6re,] h-[1.7rem] text-black" />
                </button>
              </div>
            </div>
            <div className="w-[30rem] h-[30rem] hidden lg:flex items-center rounded-full  bg-[#55e6a5] relative">
              <Image
                src="/images/profile-image.jpg"
                alt="user"
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
