import styles from '../../styles/information.module.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Information = (): JSX.Element => {
  return (
    <section className={styles.texto}>
      <span className={styles.spanP}>
        <h3 className={styles.rose}>About Me</h3>{' '}
        <h3 className={styles.span}>
          <Link target="_blank" href="https://github.com/matiasmjcs">
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/matias-mejias-cisternas/"
          >
            <FaLinkedin />
          </Link>
            <Link target="_blank" href="https://twitter.com/matiasmjcs">
              <FaTwitter />
            </Link>
        </h3>{' '}
      </span>
        <span className={styles.textSpan}>
        👋 Im a dedicated frontend developer with a strong focus on creating intuitive and visually appealing user interfaces. I have extensive experience in React, Next.js, and Vue.js, along with other frontend technologies. 🔮
      </span>
    </section>
  )
}

export default Information

//       experience in <span className={styles.rose}>Ethereum</span> and its
//       related technologies. I specialize in technologies such as{' '}
//       <span className={styles.blue}>TypeScript</span>/
//       <span className={styles.yellow}>JavaScript</span>,{' '}
//       <span className={styles.black}>Next.js</span>,{' '}
//       <span className={styles.sky}>React.js</span>,{' '}
//       <span className={styles.yellow}>Hardhat</span>,{' '}
//       <span className={styles.truffle}>Truffle</span>,
//       <span className={styles.blue}> Ethers.js</span>, Web3.js,{' '}
//       <span className={styles.green}>Node.js</span>, Wagmi, as well as Express
//       and <span className={styles.green2}>MongoDB</span>.
