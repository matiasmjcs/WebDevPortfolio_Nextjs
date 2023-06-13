import React from 'react'
import styles from '../../styles/Proyect.module.css'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
const Project = () => {
  return (
    <section className={styles.sectionP}>
      <h3 className={styles.rose}>Projects</h3>
      <div className={styles.section}>
        <article className={styles.article}>
          <h3 className={styles.tittle}>
            <Link target="_blank" href="/">
              Portfolio
            </Link>
            <Link target="_blank" href="https://github.com/matiasmjcs/Porfolio">
              <FaGithub />
            </Link>
          </h3>
          <p className={styles.aboutP}>
            Professional website to showcase my projects, contact networks, and
            receive messages to my smart contract.
          </p>
        </article>

        <article className={styles.article}>
          <h3 className={styles.tittle}>
            <Link target="_blank" href="https://medicalcenter-app.netlify.app/">
              Medical Center
            </Link>
            <Link
              target="_blank"
              href="https://github.com/matiasmjcs/Hackathon_MoralisWeb3_GoogleCloud"
            >
              <FaGithub />
            </Link>
          </h3>
          <p className={styles.aboutP}>
            Decentralized application built on the Goerli network for the
            Moralis Web3 and Google Cloud hackathon in 2022.
          </p>
        </article>

        <article className={styles.article}>
          <h3 className={styles.tittle}>
            <Link target="_blank" href="https://jobsweb3.netlify.app/">
              Jobs Web3
            </Link>
            <Link
              target="_blank"
              href="https://github.com/matiasmjcs/Chainlink_Hackathon2022"
            >
              <FaGithub />
            </Link>
          </h3>
          <p className={styles.aboutP}>
            Decentralized application built on the Polygon network for the
            Chainlink hackathon in 2022.
          </p>
        </article>

        <article className={styles.article}>
          <h3 className={styles.tittle}>
            <Link target="_blank" href="https://registervehicle.netlify.app/">
              Vehicle Registration
            </Link>
            <Link
              target="_blank"
              href="https://github.com/matiasmjcs/Hackathon_MoralisWeb3_GoogleCloud_secondProject"
            >
              <FaGithub />
            </Link>
          </h3>

          <p className={styles.aboutP}>
            Decentralized application built on the Bsc network for the Moralis
            Web3 and Google Cloud hackathon in 2022.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Project
