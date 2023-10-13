import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

/**
 * Renders an information section as a JSX element.
 *
 * @return {JSX.Element} The rendered information section.
 */
export const Information = (): JSX.Element => {
  return (
    <section data-testid="information-component" className="min-h-[150px] max-h-[650px] mx-[16px] grid bg-gray-900 font-bold text-justify p-[20px]  text-white rounded-lg mb-[80px]">
      <span className="grid grid-cols-2">
        <h3 className="text-rose">About Me</h3>
        <h3 className="flex gap-2 justify-self-end">
          <Link data-testid="GitHub" className="text-white" href="https://github.com/matiasmjcs" target="_blank">
            <FaGithub />
          </Link>
          <Link data-testid="LinkedIn" className="text-white" href="https://www.linkedin.com/in/matias-mejias-cisternas/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link data-testid="Twitter" className="text-white" href="https://twitter.com/matiasmjcs" target="_blank">
            <FaTwitter />
          </Link>
        </h3>
      </span>
      <span data-testid="description" className="text-start">
        👋 I&apos;m a self-taught software developer with experience 
        in a wide range of technologies. My focus spans both front-end and 
        back-end development along with other technologies. 🔮
      </span>
    </section>
  );
}

