import React from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import "../../styles/global.css";

const Nav = (): JSX.Element => {
  const clas1 = styles.text1;
  const clas2 = styles.link;

  const classes = `${clas1} ${clas2}`;
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__divLink}>
        <Link href={"/"} className={classes}>
          Home
        </Link>
        <Link href={"/resources"} className={classes}>
          resources
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
