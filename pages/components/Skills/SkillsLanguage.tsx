import Image from "next/legacy/image";

interface Props {
  skill: string;
  level: string;
  techIcon: string;
}

const SkillsLanguage = ({ skill, techIcon, level }: Props) => {
  return (
    <div>
      <div className="relative mb-[2rem]">
        <div className="flex p-5 w-[100%] uppercase bg-gray-700 rounded-sm text-white text-[1.4rem] font-bold">
          {techIcon && (
            <div className="px-3 flex items-center justify-center">
              <Image
                src={techIcon}
                alt={`Tech Icon`}
                width={30}
                height={30}
                className="text-black"
              />
            </div>
          )}
          <h1 className="w-[100%] uppercase text-white text-[1.4rem] font-bold">
            {skill}
          </h1>
        </div>

        <span
          className={`${level} bottom-0 h-[0.6rem] absolute bg-[#55e6a5]`}
        ></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
