import {
  EnvelopeIcon,
  MapIcon,
  PhoneIcon,
  WifiIcon,
} from "@heroicons/react/20/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[0.1rem] pb-[6rem] border-b-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[1.5rem] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className="text-[1rem] w-[90%] text-white opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              itaque consequuntur doloribus minus quos quidem quod incidunt
              fugiat
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <PhoneIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[1.5rem] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className="text-[1rem] w-[90%] text-white opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              itaque consequuntur doloribus minus quos quidem quod incidunt
              fugiat
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[1.5rem] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className="text-[1rem] w-[90%] text-white opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              itaque consequuntur doloribus minus quos quidem quod incidunt
              fugiat
            </p>
          </div>
        </div>
      </div>
      {/* ====================================================== */}
      {/* Footer */}
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 sm:text-right">
        <p className="text-[1.1rem] mb-[2rem] md:mb-0 text-white opacity-20 flex justify-end sm:justify-end md:justify-start">
          WebDev 2023 | All Rights Reserved
        </p>
        <div className="flex items-center justify-end sm:justify-end md:justify-start lg:justify-end space-x-10">
          <p className="text-[1rem] text-white opacity-20">Terms & Condition</p>
          <p className="text-[1rem] text-white opacity-20">Privacy Policy</p>
          <p className="text-[1rem] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
