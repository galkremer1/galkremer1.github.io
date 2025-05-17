import React from 'react';
import { ReactGithubRepos } from 'react-repos-github';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      <ReactGithubRepos
        user="galkremer1"
        enableSorting={false}
        enableFiltering={false}
        itemsPerPage={6}
        excludedRepos={['karaoke']}
        sortBy="updated"
      />
    </section>
  );
};

export default Projects;
