import React from 'react';
import { repositories } from '@/resources/repositories';
import { ProjectsComponent } from './projects-component'; 

export const Project = () => {
  return (
    <section className="mb-32 mt-32 flex flex-col justify-center p-4 bg-black">
      <h3 className="text-white text-xl mb-6 self-start font-bold">Explore Some of My Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {repositories.map((repo) => (
          <ProjectsComponent
            name={repo.name}
            route={repo.route}
            github={repo.github}
            description={repo.description}
            key={repo.name}
          />
        ))}
      </div>
    </section>
  );
};

