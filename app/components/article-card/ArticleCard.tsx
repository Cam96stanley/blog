import styles from "./ArticleCard.module.scss";

const ArticleCard = () => {
  return (
    <article className={styles.article__card}>
      <h3 className={styles.article__title}>Title</h3>
      <p className={styles.article__Date}>Date</p>
    </article>
  );
};

export default ArticleCard;
