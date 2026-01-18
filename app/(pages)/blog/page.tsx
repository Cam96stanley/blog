import styles from "./page.module.scss";
import ArticlePageCard from "@/app/components/article-card/ArticlePageCard";

const Blog = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.heading}>
        <h1 className={styles.articles__title}>My Articles</h1>
        <p className={styles.articles__text}>
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </div>
      <ArticlePageCard />
    </section>
  );
};

export default Blog;
