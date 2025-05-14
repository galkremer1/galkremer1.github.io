import React, { FC } from 'react';

import { SkillIcon } from 'react-skills-icons';

import { IconType } from 'react-icons';

const skills: { name: string; icon?: IconType }[] = [
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'SASS' },
  { name: 'Next.js' },
  { name: 'Redux' },
  {
    name: 'Playwright',
    icon: () => (
      <img
        src="/icons/playwright-logo.svg"
        alt="Playwright Logo"
        style={{ width: 30, height: 30 }}
      />
    ),
  },
  { name: 'Nodejs' },
  { name: 'GitHub' },
  { name: 'Git' },
  { name: 'Jest' },
  { name: 'Less' },
  { name: 'TailwindCSS' },
  { name: 'Electron' },
  { name: 'Figma' },
  { name: 'Invision' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h1 className="text-4xl font-bold text-center mb-6">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 align-items-center justify-items-center mt-8">
        {skills.map((skill) => (
          <SkillIcon
            key={skill.name}
            customIcon={skill.icon}
            skill={skill.name}
            size={32}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
