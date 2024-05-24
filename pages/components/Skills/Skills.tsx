import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div
      id="skills"
      className="scroll-m-[14vh] pt-[4rem] md:pt-[4.5rem] pb-[5rem] bg-[#0b1827]"
    >
      <h1 className="heading">
        Education & <span className="text-green-400">Skill</span>
      </h1>
      <div>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <SkillsItem
            title="Seneca College 🎓"
            year="Sep 2021 - Apr 2023"
            subtitle="Ontario College Diploma, Computer Programming."
            content="Graduated with Honours "
          />
          <SkillsItem
            title="BrainStation 🎓"
            year="Jun 2023 - Sep 2023"
            subtitle="Diploma, Software Engineering"
            content="Graduated Software Engineering Diploma Bootcamp"
          />
          <SkillsItem
            title="Freelance Software Engineer"
            year="Jan 2024 - Current"
            subtitle="2 Web Projects"
            content="MDE Dashboard Project"
          />
        </div>
        <div className="w-[80%] pt-[4rem] md:pt-[rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <SkillsLanguage skill="html" level="w-[85%]" />
          <SkillsLanguage skill="css" level="w-[85%]" />
          <SkillsLanguage skill="JavaScript" level="w-[85%]" />
          <SkillsLanguage skill="React" level="w-[85%]" />
          <SkillsLanguage skill="TypeScript" level="w-[85%]" />
          <SkillsLanguage skill="Node.js" level="w-[85%]" />
          <SkillsLanguage skill="SQL" level="w-[85%]" />
          <SkillsLanguage skill="MySQL" level="w-[85%]" />
          <SkillsLanguage skill="PostgreSQL" level="w-[85%]" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
