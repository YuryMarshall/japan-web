import React from "react";
import reviewers from "../data/reviewersData";
import scoreConstructor from "../atoms/ScoreStarsFunction";
import styles from "./styles/styles.module.css";

export default function ReviewsSection(): JSX.Element {
  return (
    <section className={styles.reviews__section}>
      <h1 className={styles.reviews__title}>Отзывы</h1>
      <div className={styles.reviews__container}>
        {reviewers.map((item) => {
          return (
            <div key={item.id} className={styles.review}>
              <img src={item.avatar} className={styles.review__image} />
              <div className="h-full  w-full font-OSans">
                <p className="font-bold mb-2">
                  {item.name} {item.surname}
                </p>
                {scoreConstructor(item.score)}
                <p>{item.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
