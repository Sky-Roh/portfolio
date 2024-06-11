import Image from "next/legacy/image";
import React from "react";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  title: string;
  description: string;
  techIcons: string[];
  githubLink: string;
  webLink?: string;
}

const ProjectItems = ({
  image,
  name,
  title,
  description,
  techIcons = [],
  githubLink,
  webLink,
}: Props) => {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <div className="relative group w-full h-full">
        <Image
          src={image}
          alt={name}
          width={895} // Adjust width
          height={300} // Adjust height
          objectFit="contain"
          className="mx-auto mb-[2rem] rounded-md transition-opacity duration-300 group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-     justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            {githubLink && (
              <Link href={githubLink}>
                <div className="w-[3rem] h-[3rem] flex items-center justify-center bg-zinc-200 rounded-full hover:bg-opacity-75">
                  <Image
                    src="/icons/github.svg"
                    alt="Github"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
            )}
            {webLink && (
              <Link href={webLink}>
                <div className="w-[3rem] h-[3rem] flex items-center justify-center bg-zinc-200 rounded-full hover:bg-opacity-75">
                  <Image
                    src="/icons/link-45deg.svg"
                    alt="Link"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[1.5rem] text-white mt-[1rem]">{title}</h1>
        <p className="text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 w-[80%] justify-center">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="relative w-[2.8rem] h-[2.8rem] flex items-center justify-center bg-white rounded-full"
          >
            <Image
              src={icon}
              alt={`Tech Icon ${index}`}
              width={30}
              height={30}
              className="text-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItems;
