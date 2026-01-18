import styles from "./page.module.scss";

const SingleBlogPage = () => {
  return (
    <section className={styles.single_blog_page}>
      <article className={styles.article}>
        <h1 className={styles.article__title}>Blog Post</h1>
        <p className={styles.publish__date}>Published date</p>
        <p className={styles.article__body}>Body</p>
      </article>
    </section>
  );
};

export default SingleBlogPage;
