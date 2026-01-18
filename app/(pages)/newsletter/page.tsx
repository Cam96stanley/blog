import styles from "./page.module.scss";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h1 className={styles.newsletter__title}>Newsletter</h1>
      <p className={styles.newsletter__para}>
        Want to updated on my latest articles, coding tutorials, and personal
        adventures? Sign up for my newsletter! It's a simple way to keep track
        of new posts and occasional coding tips I discover. Just drop your email
        in the sign-up box, and I'll send you updates whenever there's something
        new to share.
      </p>
      <p className={styles.newsletter_para_bold}>
        I'd love to have you along for the ride and also about your own journey!
      </p>
      <form className={styles.email__form}>
        <label className={styles.email__label} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles.email__input}
          name="email"
          id="email"
          type="email"
        />
        <button className={styles.submit__button}>Stay updated</button>
      </form>
      <p className={styles.form__footer_text}>
        Unsubscribe anytime. No spam, I promis
      </p>
      <p className={styles.smile__emoji}>🙂</p>
    </section>
  );
};

export default Newsletter;
