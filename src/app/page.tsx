import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="container">
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="projects">
          <Projects />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
