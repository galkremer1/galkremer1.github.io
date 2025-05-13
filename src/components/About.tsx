import React from 'react';

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
          My journey in web development began nine years ago, and since then, I
          have worked on diverse projects that have sharpened my skills in
          frontend technologies. I thrive on collaborating with teams to bring
          ideas to life and staying current with industry trends and best
          practices. Recently, as Lead Software Engineer at JP Morgan, I
          embraced management and mentored junior and mid-level developers,
          finding great reward in fostering their growth.
        </p>
        <p>
          In my spare time, I love traveling with my family, running, and
          building drones. I'm also pursuing a private pilot license, channeling
          my passion for flying into a new adventure that fuels my curiosity and
          drive.
        </p>
      </div>
    </section>
  );
};

export default About;
