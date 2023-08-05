import React from "react";
import CompanyData from "../data/CompanyData";
import ContactsContainer from "../molecules/ContactsContainer";
import styles from "./styles/styles.module.css";

export default function ContactsSection(): JSX.Element {
  return (
    <section className={styles.contacts__section}>
      <h1 className={styles.contacts__about__title}>О нас</h1>
      <p className="mb-10 lg:w-1/2">{CompanyData.about}</p>
      <h1 className={styles.contacts__location__title}>Офис</h1>
      <div className={styles.conacts__location__container}>
        <div className="mb-10 ">
          <h2 className="font-bold mb-2">Адрес:</h2>
          <p className="mb-3">
            {CompanyData.adress.city}, ул.{CompanyData.adress.street} д.{CompanyData.adress.house},
            офис {CompanyData.adress.office}
          </p>
          <p className="w-72 mb-10">{CompanyData.adress.way}</p>
          <h2 className="font-bold mb-2">Часы работы офиса:</h2>
          <p>ПН-ПТ - с 11:00 до 19:00</p>
          <p>СБ-ВС - выходные</p>
        </div>
        <div className={styles.map__container}>
          <iframe className="w-full h-full" src={CompanyData.googlemap} loading="lazy"></iframe>
        </div>
      </div>
      <h1 className={styles.contacts__title}>Контакты:</h1>
      <ContactsContainer />
    </section>
  );
}
