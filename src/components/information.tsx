import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialMediaUrl } from '@/resources/socialMediaUrl';

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
          <a data-testid="GitHub" className="text-white" href={socialMediaUrl.gitHub} target="_blank">
            <FaGithub />
          </a>
          <a data-testid="LinkedIn" className="text-white" href={socialMediaUrl.linkedIn} target="_blank">
            <FaLinkedin />
          </a>
          <a data-testid="Twitter" className="text-white" href={socialMediaUrl.twitter} target="_blank">
            <FaTwitter />
          </a>
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

