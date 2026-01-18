import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>Learning, building, repeating 🔁</p>
      </div>
    </footer>
  );
};

export default Footer;
