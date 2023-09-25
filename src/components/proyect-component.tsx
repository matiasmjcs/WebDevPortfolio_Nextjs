import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const ProyectComponent = ({ name, route, github, description }: { name: string; route: string; github: string; description: string }) => {
  return (
    <article className="grid dark:bg-gray-900 justify-items-start rounded-lg bg-color3 p-4">
      <h3 className="flex items-center">
        <Link className="text-rose-600 text-lg font-semibold" href={route}>
          {name}
        </Link>
        <Link href={`https://github.com/matiasmjcs/${github}`} target="_blank">
          <FaGithub className="text-white ml-5" />
        </Link>
      </h3>
      <p className="text-start font-medium">{description}</p>
    </article>
  );
};

