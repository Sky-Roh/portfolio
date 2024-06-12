import React from "react";
import Image from "next/legacy/image";
import project1Img from "../../../public/images/ClimbStation.png";
import chromeEx from "../../../public/images/chrome-ex-1.png";
import vistavid from "../../../public/images/vistavid.png";
import CarousalProject from "./CarousalProject";

const Projects = () => {
  return (
    <div
      id="projects"
      className="scroll-m-[14vh] bg-[#24262a] pt-[4rem] md:pt-[4.5rem] pb-[1rem]"
    >
      <h1 className="heading">
        Pro<span className="text-green-400">Jects</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[85%] mx-auto">
        <CarousalProject />
      </div>
    </div>
  );
};

export default Projects;
