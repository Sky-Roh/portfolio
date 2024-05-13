import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
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
              src="/images/ClimbStation.png"
              alt="portfolio project"
              layout="fill"
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
              src="/images/ClimbStation.png"
              alt="portfolio project"
              layout="fill"
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
              src="/images/ClimbStation.png"
              alt="portfolio project"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
