import React from "react";
import type { IBlog } from "../../models";
import styles from "./styles/atoms.module.css";

interface BlogProps {
  articles: IBlog[];
}

function BlogContainer({ articles }: BlogProps): JSX.Element {
  return (
    <div className={styles.blog__container}>
      {articles.map((item: IBlog) => {
        return (
          <a
            key={item.id}
            className={styles.blog__container__item}
            href={`/japan-web/#/blog/${item.id}`}
          >
            <img src={item.picture} className="rounded-xl" />
            <h2 className={styles.blog__container__item__title}>{item.title}</h2>
            <p className={styles.blog__container__item__text}>{item.text.substring(0, 60)}...</p>
            <div className="flex">
              <img
                src={item.author.avatar}
                className={styles.blog__container__item__author__image}
              />
              <div>
                <p className="font-bold text-sm">
                  {item.author.name} {item.author.surname}
                </p>
                <p>{item.date}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default BlogContainer;
