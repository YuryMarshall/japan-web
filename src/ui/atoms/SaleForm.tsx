import React, { useState } from "react";
import SiteButton from "./SiteButton";
import styles from "./styles/atoms.module.css";

interface IComplete {
  completeState: boolean;
  completeHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

function SaleForm({ completeState, completeHandler }: IComplete): JSX.Element {
  const formHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name !== "" && phone !== "") {
      completeHandler(true);
    }
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedPhoneNumber: string = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${"+" + phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
        4,
      )}`;
    }
    return `${"+" + phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7,
    )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  return (
    <form className={completeState ? "hidden" : styles.sale__container} onSubmit={formHandler}>
      <div className={styles.sale__inputs__container}>
        <input
          type="text"
          placeholder="Имя"
          className={styles.sale__input}
          onChange={nameHandler}
          value={name}
        />
        <input
          type="tel"
          value={phone}
          pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          placeholder="Телефон"
          className={styles.sale__input}
          onChange={phoneHandler}
        />
      </div>
      <div className={styles.sale__check__container}>
        <input type="checkbox" className="mr-4" required={true} />
        <p className={styles.sale__check__text}>Даю согласие на обработку данных</p>
      </div>

      <SiteButton ButtonType={"submit"} text={"Оставить заявку"} />
    </form>
  );
}

export default SaleForm;
