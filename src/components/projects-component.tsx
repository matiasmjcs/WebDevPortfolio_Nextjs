import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const ProjectsComponent = ({ name, route, github, description }: { name: string; route: string; github: string; description: string }) => {
  return (
    <article className="grid bg-gray-900 text-white justify-items-start rounded-lg bg-color3 p-4">
      <h3 className="flex items-center w-full justify-between">
        <Link className="text-rose-600 text-lg font-semibold" data-testid={route} href={route}>
          {name}
        </Link>
        <Link className='justify-self-end' data-testid={github} href={`https://github.com/matiasmjcs/${github}`} target="_blank">
          <FaGithub className="text-white ml-5" />
        </Link>
      </h3>
      <p className="text-start text-base font-medium">{description}</p>
    </article>
  );
};

