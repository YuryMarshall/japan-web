import React from "react";
import animationDataPochita from "../../img/pochita.json";
import animationDataSun from "../../img/sun.json";
import animationDataBirds from "../../img/birds.json";
import Lottie from "lottie-react";
import styles from "./styles/molecules.module.css";

interface IError {
  text: string;
}
export default function ErrorContainer({ text }: IError): JSX.Element {
  return (
    <div className={styles.error__container}>
      <h1 className={styles.error__title}>Гаф, похоже возникла следующая ошибка:</h1>
      <h2 className={styles.error__subtitle}>{text}</h2>
      <Lottie animationData={animationDataSun} className={styles.sun__image} />
      <Lottie animationData={animationDataBirds} className={styles.birds__image} />
      <Lottie animationData={animationDataPochita} className="w-80" />
    </div>
  );
}
