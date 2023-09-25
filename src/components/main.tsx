import React from 'react'
import Information from './information';
import Animation from './animation/animation';
import { Project } from './projects';

export const Main = () => {
  return (
    <main>
      <Information />
      <Animation />
      <Project />
    </main>
  );
}
