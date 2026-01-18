"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./page.module.scss";

type FormData = {
  title: string;
  body: string;
};

const CreatePost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={styles.create__page}>
      <h1 className={styles.create__title}>Create Post</h1>
      <form className={styles.form}>
        <label htmlFor="title">Title</label>
        <input
          className={styles.input}
          name="title"
          id="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <div className={styles.body__container}>
          <textarea
            className={styles.input}
            name="body"
            id="body"
            value={formData.body}
            onChange={handleChange}
            rows={10}
          />

          <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {formData.body || "_Live preview will appear here_"}
            </ReactMarkdown>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
