import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Header.module.css'
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div>
        <h2 className={`${styles.header__tittle} text-2xl font-bolt`}>
          Hi! I am Matías
        </h2>
        <h2 className={`${styles.header__tittle} text-2xl font-bold`}>
          a <span className={styles.rose}>Front-end</span> Developer
        </h2>
      </div>
      <div className={styles.header__divImg}>
        <Image
          className={styles.header__img}
          src="/imgcubo.png"
          width={300}
          height={300}
          alt="img cubo"
        />
      </div>
    </header>
  );
}

export default Header
