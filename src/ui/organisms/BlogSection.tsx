import React, { useState, useEffect } from "react";
import SiteButton from "../atoms/SiteButton";
import BlogContainer from "../atoms/BlogContainer";
import BlogData from "../data/BlogsData";
import type { IBlog } from "../../models";
import styles from "./styles/styles.module.css";

function BlogSection(): JSX.Element {
  const [articleNumber, setArticleNubmer] = useState(4);
  const articlesInView: IBlog[] = BlogData.slice(0, articleNumber);

  const moreArticlesHandler = (): void => {
    if (articleNumber < BlogData.length) {
      setArticleNubmer(articleNumber + 4);
    }
  };
  useEffect(() => {
    if (window.screen.width > 1279) {
      setArticleNubmer(8);
    }
  }, []);
  return (
    <section className={styles.blog__section}>
      <div>
        <h1 className={styles.blog__title}>Блог</h1>{" "}
        <h2
          className={styles.blog__subtitle}
          onClick={(): void => {
            setArticleNubmer(4);
          }}
        >
          Самые интересные и не познанные места юга и востока
        </h2>
      </div>
      <BlogContainer articles={articlesInView} />
      <div className={styles.more__button__container}>
        {articleNumber < BlogData.length && (
          <SiteButton ButtonType="button" text="Ещё статьи" handler={moreArticlesHandler} />
        )}
      </div>
    </section>
  );
}

export default BlogSection;
