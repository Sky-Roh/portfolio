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
        Education & <span className="text-green-400">Skills</span>
      </h1>
      <div>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <SkillsItem
            title="Seneca College 🎓"
            year="Sep 2021 - Apr 2023"
            subtitle="Ontario College Diploma, Computer Programming."
            content="Graduated with Honours."
          />
          <SkillsItem
            title="BrainStation 🎓"
            year="Jun 2023 - Sep 2023"
            subtitle="Diploma, Software Engineering"
            content="Graduated Software Engineering Diploma Bootcamp."
          />
          <SkillsItem
            title="Freelance Software Engineer"
            year="Jan 2024 - Current"
            subtitle="2 Web Projects"
            content="MDE Dashboard Project."
          />
        </div>
        {/* Languages */}
        <div className="w-[80%] pt-[4rem] md:pt-[rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <SkillsLanguage
            skill="html"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            level="w-[95%]"
          />
          <SkillsLanguage
            skill="css"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            level="w-[95%]"
          />
          <SkillsLanguage
            skill="sass"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            level="w-[85%]"
          />
          <SkillsLanguage
            skill="JavaScript"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            level="w-[99%]"
          />
          <SkillsLanguage
            skill="React"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            level="w-[95%]"
          />
          <SkillsLanguage
            skill="TypeScript"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            level="w-[75%]"
          />
          <SkillsLanguage
            skill="Node.js"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            level="w-[95%]"
          />
          <SkillsLanguage
            skill="MySQL"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            level="w-[75%]"
          />
          <SkillsLanguage
            skill="PostgreSQL"
            techIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
            level="w-[95%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
