import Link from "next/link";
import styles from "./ArticlePageCard.module.scss";

const ArticlePageCard = () => {
  return (
    <Link className={styles.blog__link} href="/blog/123">
      <article className={styles.article__card}>
        <h2 className={styles.article__title}>Blog Title</h2>
        <p className={styles.article__date}>Article Date</p>
        <p className={styles.article__body}>Article Body</p>
      </article>
    </Link>
  );
};

export default ArticlePageCard;
