import React from "react";

interface Props {
  title: string;
  year: string;
  content: string;
  subtitle: string;
}

const SkillsItem = ({ title, year, subtitle, content }: Props) => {
  return (
    <div className="mb-[2rem] flex flex-col items-center justify-center">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[1.1rem] border-[0.1rem] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold text-white mb-[1rem] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]">
        {title}
      </h1>
      <p className="text-center text-[#ececec] font-normal w-[80%] text-[1rem] opacity-80">
        {subtitle}
      </p>
      <p className="text-center text-[#aaaaaa] font-normal w-[80%] text-[1rem] opacity-80">
        {content}
      </p>
    </div>
  );
};

export default SkillsItem;
