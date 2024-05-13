import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div
      id="skills"
      className="scroll-m-[14vh] pt-[4rem] md:pt-[4.5rem] pb-[5rem] bg-[#09101a]"
    >
      <h1 className="heading">
        Education & <span className="text-green-400">Skill</span>
      </h1>
      <div>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <SkillsItem title="javascript" year="2022" />
          <SkillsItem title="css" year="2022" />
          <SkillsItem title="good" year="2022" />
          <SkillsItem title="python" year="2022" />
          <SkillsItem title="c++" year="2022" />
          <SkillsItem title="css" year="2022" />
        </div>
        <div className="w-[80%] pt-[4rem] md:pt-[6rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <SkillsLanguage skill="html" level="w-[85%]" />
          <SkillsLanguage skill="css" level="w-[85%]" />
          <SkillsLanguage skill="html" level="w-[85%]" />
          <SkillsLanguage skill="html" level="w-[85%]" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
