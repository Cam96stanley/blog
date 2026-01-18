"use client";

import ArticleCard from "@/app/components/article-card/ArticleCard";
import styles from "./page.module.scss";
import Link from "next/link";

const AdminPage = () => {
  return (
    <section className={styles.admin__dashboard}>
      <div className={styles.dashboard__container}>
        <h1 className={styles.dashboard__title}>Dashboard</h1>
        <Link href="/admin/create-post" className={styles.create__button}>
          Create Post
        </Link>
      </div>
      <div className={styles.articles}>
        <ArticleCard />
      </div>
    </section>
  );
};

export default AdminPage;
