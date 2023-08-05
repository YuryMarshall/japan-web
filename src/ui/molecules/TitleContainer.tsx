import React from "react";
import Lottie from "lottie-react";
import animationData from "../../img/mount-anim.json";
import styles from "./styles/molecules.module.css";

function TitleContainer(): JSX.Element {
  return (
    <div className={styles.title__container}>
      <p className="ml-4">ЯП</p>
      <Lottie animationData={animationData} className="h-5/6" />
      <p>НИЯ</p>
    </div>
  );
}

export default TitleContainer;
