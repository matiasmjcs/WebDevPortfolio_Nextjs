import React from 'react'
import Animation from './animation/animation';
import { Project } from './projects';
import { Information } from './information';

export const Main = () => {
  return (
    <main className='bg-black'>
      <Information />
      <Animation />
      <Project />
    </main>
  );
}
