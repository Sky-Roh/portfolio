import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="xl:h-[88vh] h-[100%] xl:min-h-[46rem]  bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-green-400">Services</span>
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white"
      >
        <div>
          <div className="bg-red-700 hover:scale-110 transform translate-all duration-200 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />

            <h1 className="text-[1.1rem] md:text-[1.5rem] mx-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[1rem] text-[#d3d2d2]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              expedita sunt suscipit earum dolore ipsum, minus, itaque hic vel
              qui recusandae saepe, voluptas iusto natus. Quia ab optio adipisci
              mollitia.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              expedita sunt suscipit earum dolore ipsum, minus, itaque hic vel
              qui recusandae saepe, voluptas iusto natus. Quia ab optio adipisci
              mollitia.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              expedita sunt suscipit earum dolore ipsum, minus, itaque hic vel
              qui recusandae saepe, voluptas iusto natus. Quia ab optio adipisci
              mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
