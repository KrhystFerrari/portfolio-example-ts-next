import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09010a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="React Developer" year="2018 - 2024" />
          <SkillsItem title="JavaScript Developer" year="2017 - 2024" />
          <SkillsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[85%]"
          />
        </div>
        <div>
          <SkillsItem title="Next.Js Developer" year="2019 - 2024" />
          <SkillsItem title="Node.Js Developer" year="2020 - 2024" />
          <SkillsLanguage
            skill1="React.Js"
            skill2="Next.Js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[65%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
