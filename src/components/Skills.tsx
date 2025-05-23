import React, { FC } from 'react';
import { SkillIcon, SkillIconProps } from 'react-skills-icons';
import { IconType } from 'react-icons';

const skills: (
  | { name: SkillIconProps['skill']; icon?: undefined }
  | { name: string; icon: IconType }
)[] = [
  { name: 'react' },
  { name: 'javascript' },
  { name: 'typescript' },
  { name: 'html' },
  { name: 'css3-full' },
  { name: 'sass' },
  { name: 'next' },
  { name: 'redux' },
  {
    name: 'playwright',
    icon: () => (
      <img
        src="/icons/playwright-logo.svg"
        alt="Playwright Logo"
        style={{ width: 30, height: 30 }}
      />
    ),
  },
  { name: 'nodejs' },
  { name: 'github' },
  { name: 'git' },
  { name: 'jest' },
  { name: 'less' },
  { name: 'tailwind' },
  { name: 'electron' },
  { name: 'figma' },
  { name: 'invision' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h1 className="text-4xl font-bold text-center mb-6">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mt-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center w-full">
            <SkillIcon
              customIcon={skill.icon}
              skill={skill.name as SkillIconProps['skill']}
              className="!flex !flex-col !items-center w-34 hover:shadow-xl/20 rounded-xl hover:scale-115 transition-transform duration-300 cursor-pointer"
              size={34}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
