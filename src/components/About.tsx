import React from 'react';
import Image from 'next/image';
const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <div className="text-left mb-4">
        <p>
          I'm a senior frontend developer with over 10 years of experience
          crafting high-performance web applications using React, Next.js, and
          TypeScript. I specialize in building responsive, accessible, and
          maintainable interfaces with tools like Tailwind CSS, Storybook, and
          Playwright.
        </p>
        <p>
          My journey began in 1997 when I built a website about the NASA
          Pathfinder landing. By 1999, I completed my first paid project for a
          local business and launched an early online music platform that
          featured artist profiles and downloadable MP3s. After studying
          computer science in high school, I earned a BA in Economics & Business
          Management and later an MBA focused on Big Data.
        </p>
        <p>
          In the past decade, I've led and contributed to projects that
          sharpened both my technical and leadership skills. As Lead Software
          Engineer at JP Morgan, I led a team of five developers, mentored
          junior engineers, and helped deliver robust, user-centric interfaces
          that improved productivity and reduced support issues.
        </p>
        <p>
          Outside of work, I enjoy traveling with my family, running, building
          drones, and working toward my private pilot license - channeling my
          curiosity and drive into the skies.
        </p>
        <div className="flex justify-center">
          <Image
            src={'/images/gal-flying.jpg'}
            alt="Me flying an airplane"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg mt-6 center mb-6"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default About;
