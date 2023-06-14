import Link from 'next/link';
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import styles from '../../styles/proyect-component.module.css'

export const ProyectComponent = ({name, route, github, description}:{name:string, route: string, github: string, description: string}) => {
  return (
    <article className={styles.article}>
      <h3 className={styles.tittle}>
        <Link target="_blank" href={route}>
          {name}
        </Link>
        <Link target="_blank" href={`https://github.com/matiasmjcs/${github}`}>
          <FaGithub />
        </Link>
      </h3>
      <p className={styles.aboutP}>{description}</p>
    </article>
  );
}
