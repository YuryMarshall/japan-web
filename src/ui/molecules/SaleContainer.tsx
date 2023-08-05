import React, { useState } from "react";
import SaleForm from "../atoms/SaleForm";
import styles from "./styles/molecules.module.css";

function SaleContainer(): JSX.Element {
  const [formComplete, setFormComplete] = useState(false);
  return (
    <div className={styles.sale__container}>
      <h1 className={styles.sale__container__title}>
        Получите скидку 10% на авторский тур до 1 июня
      </h1>
      <h2 className={styles.sale__container__subtitle}>
        Оставьте заявку и наш менеджер Вам перезвонит
      </h2>
      <SaleForm completeState={formComplete} completeHandler={setFormComplete} />
      <p className={formComplete ? styles.sale__complete__title : "hidden"}>Заявка отправлена</p>
    </div>
  );
}

export default SaleContainer;
