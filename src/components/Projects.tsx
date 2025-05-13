import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      link: 'https://github.com/user/project-one',
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      link: 'https://github.com/user/project-two',
    },
    {
      title: 'Project Three',
      description: 'Description of project three.',
      link: 'https://github.com/user/project-three',
    },
  ];

  return (
    <section id="projects">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 align-items-center justify-items-center mt-8">
        <ul>
          {projectList.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
