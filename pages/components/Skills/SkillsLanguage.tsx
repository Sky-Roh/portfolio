interface Props {
  skill: string;
  level: string;
}

const SkillsLanguage = ({ skill, level }: Props) => {
  return (
    <div>
      <div className="relative mb-[2rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[1.4rem] font-bold">
          {skill}
        </h1>
        <span className={`${level} bottom-0 h-[0.6rem] absolute bg-[#55e6a5]`}>
        </span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
