import Link from "next/link";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <>
      <nav className={styles.mobile__nav_container}>
        <ul>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              Home
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              Blog
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              About
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
