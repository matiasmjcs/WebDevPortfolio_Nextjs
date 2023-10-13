import React from 'react'
import Animation from './animation/animation';
import { Project } from './projects';
import { Information } from './information';
import { repositories } from '@/resources/repositories';

/**
 * Renders the main component of the application.
 *
 * @return {JSX.Element} The main component wrapped in a <main> element with a black background.
 */
export const Main = () => {
  return (
    <main role='main' className='bg-black'>
      <Information />
      <Animation />
      <Project repositories={repositories} />
    </main>
  );
}
