import React from 'react'
import styles from '../../styles/Proyect.module.css'
import { repositories } from '@/resources/repositories'
import { ProyectComponent } from '../proyect-component/proyect-component'
const Project = () => {
  return (
    <section className={styles.sectionP}>
      <h3 className={styles.rose}>Projects</h3>
      <div className={styles.section}>
      {repositories.map((repo) => (
        <ProyectComponent name={repo.name} route={repo.route} github={repo.github} description={repo.description} key={repo.name} />
      ))}
      </div>
    </section>
  )
}

export default Project
