import Image from "next/legacy/image";
import project1Img from "../../../public/images/ClimbStation.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="scroll-m-[14vh] bg-[#02050a] pt-[4rem] md:pt-[4.5rem] pb-[1rem]"
    >
      <h1 className="heading">
        Pro<span className="text-green-400">Ject</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
          <div
            data-aos="fade-up"
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[12.5rem] md:h-[18.75rem]"
          >
            <Image
              src={project1Img}
              alt="portfolio project"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[12.5rem] md:h-[18.75rem]"
          >
            <Image
              src={project1Img}
              alt="portfolio project"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[12.5rem] md:h-[18.75rem]"
          >
            <Image
              src={project1Img}
              alt="portfolio project"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
          <div
            data-aos="fade-up"
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[12.5rem] md:h-[18.75rem]"
          >
            <Image
              src={project1Img}
              alt="portfolio project"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[12.5rem] md:h-[18.75rem]"
          >
            <Image
              src={project1Img}
              alt="portfolio project"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[12.5rem] md:h-[18.75rem]"
          >
            <Image
              src={project1Img}
              alt="portfolio project"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
