import React from 'react';
import Image from 'next/image';
const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <div className="text-center mb-4">
        <p>
          I am a senior frontend developer with a passion for creating dynamic
          and responsive web applications. With a strong background in
          JavaScript, React, and Next.js, I strive to deliver high-quality user
          experiences.
        </p>
        <p>
          My journey in web development began in 1997 when I built a website
          about the NASA Pathfinder landing. By 1999, I had landed my first paid
          project building a site for a local business. Around the same time, I
          also managed a small online music platform that featured artist
          profiles and downloadable MP3s - a formative experience in building
          and maintaining content-rich websites. I studied computer science in
          high school, learning Pascal and C++, before pursuing a BA in
          Economics & Business Management and later an MBA, focusing on Big
          Data. <br />
          About ten years ago, I returned to my roots in web development and
          began my professional career, combining technical expertise with
          business insight.
        </p>
        <p>
          Since then, I have worked on diverse projects that have sharpened my
          frontend expertise. Most recently, as Lead Software Engineer at JP
          Morgan, I led a team of developers, mentored junior and mid-level
          engineers, and helped deliver performant, user-friendly interfaces
          that enhanced productivity and user satisfaction.
        </p>
        <p>
          In my spare time, I love traveling with my family, running, and
          building drones. I'm also pursuing a private pilot license, channeling
          my passion for flying into a new adventure that fuels my curiosity and
          drive.
        </p>
        <div className="flex justify-center">
          <Image
            src={'/images/Gal_Flying.jpg'}
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
