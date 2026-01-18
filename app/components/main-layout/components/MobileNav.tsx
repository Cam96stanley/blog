import Link from "next/link";
import styles from "./MobileNav.module.scss";

type MobileNavProps = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <>
      <nav className={styles.mobile__nav_container}>
        <ul>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="/blog" onClick={onClose}>
              Blog
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="/newsletter" onClick={onClose}>
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
