import React, { FC } from 'react';
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiSass,
  DiNodejs,
  DiGit,
  DiGithub,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiJest,
  SiTailwindcss,
  SiNextdotjs,
  SiLess,
  SiElectron,
  SiFigma,
  SiInvision,
} from 'react-icons/si';

import { IconType } from 'react-icons';

const skills: { name: string; icon: IconType }[] = [
  { name: 'React', icon: DiReact },
  { name: 'JavaScript', icon: DiJavascript1 },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML5', icon: DiHtml5 },
  { name: 'CSS3', icon: DiCss3 },
  { name: 'SASS', icon: DiSass },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Redux', icon: SiRedux },
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
  { name: 'Node.js', icon: DiNodejs },
  { name: 'GitHub', icon: DiGithub },
  { name: 'Git', icon: DiGit },
  { name: 'Jest', icon: SiJest },
  { name: 'Less', icon: SiLess },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Electron', icon: SiElectron },
  { name: 'Figma', icon: SiFigma },
  { name: 'Invision', icon: SiInvision },
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h1 className="text-4xl font-bold text-center mb-6">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 align-items-center justify-items-center mt-8">
        {skills.map((skill) => {
          const Icon = skill.icon as FC<{ size?: string | number }>;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center"
              title={skill.name}
            >
              <Icon size={30} />
              <span className="text-lg font-medium mt-2">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
