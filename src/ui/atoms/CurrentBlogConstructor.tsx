import React from "react";
import styles from "./styles/atoms.module.css";

import type { IBlog } from "../../models";

interface ICurrentBlogProps {
  blogData: IBlog;
}
export default function CurrentBlogConstructor({ blogData }: ICurrentBlogProps): JSX.Element {
  const author: string = blogData.author.name + " " + blogData.author.surname + " " + blogData.date;
  return (
    <section className={styles.blog__section}>
      <div className={styles.blog__section__image__container}>
        <img src={blogData.picture} className={styles.blog__section__image} />
      </div>

      <h1 className={styles.blog__section__title}>{blogData.title}</h1>
      <h2 className={styles.blog__section__author}>{author}</h2>
      <p className={styles.blog__section__text}>{blogData.text}</p>
      <div className={styles.blog__section__author__container}>
        <h3>ПРО АВТОРА</h3>
        <div className={styles.blog__section__author__image__container}>
          <img src={blogData.author.avatar} className={styles.blog__section__author__image} />
          <div className="lg:w-1/6">
            <p>{blogData.author.name + " " + blogData.author.surname}</p>
            <p className="text-sm text-projectpowder">{blogData.author.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
