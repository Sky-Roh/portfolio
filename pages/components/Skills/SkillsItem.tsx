import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[2rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[1.1rem] border-[0.1rem] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold text-white mb-[1rem] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[1rem] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a
        aliquid rem odio eveniet natus? Ut at dolores quaerat. Quia incidunt
        esse iste similique suscipit alias omnis hic aut! Vel!
      </p>
    </div>
  );
};

export default SkillsItem;
