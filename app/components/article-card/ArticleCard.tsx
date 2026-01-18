import Link from "next/link";
import styles from "./ArticleCard.module.scss";

const ArticleCard = () => {
  return (
    <Link className={styles.blog__link} href="/blog/123">
      <article className={styles.article__card}>
        <h3 className={styles.article__title}>Title</h3>
        <p className={styles.article__Date}>Date</p>
      </article>
    </Link>
  );
};

export default ArticleCard;
