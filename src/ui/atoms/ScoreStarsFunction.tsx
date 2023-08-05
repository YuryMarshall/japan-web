import React from "react";
import styles from "./styles/atoms.module.css";

const scoreConstructor = function (score: number): JSX.Element {
  switch (score) {
    case 1:
      return (
        <div className={styles.score__container}>
          <div className={styles.score__star}></div>
          {score}.0
        </div>
      );
    case 2:
      return (
        <div className={styles.score__container}>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          {score}.0
        </div>
      );
    case 3:
      return (
        <div className={styles.score__container}>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          {score}.0
        </div>
      );
    case 4:
      return (
        <div className={styles.score__container}>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          {score}.0
        </div>
      );
    case 5:
      return (
        <div className={styles.score__container}>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          <div className={styles.score__star}></div>
          {score}.0
        </div>
      );
    default:
      return <div></div>;
  }
};

export default scoreConstructor;
