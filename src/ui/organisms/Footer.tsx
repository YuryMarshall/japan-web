import React from "react";
import CompanyData from "../data/CompanyData";
import styles from "./styles/styles.module.css";

function Footer(): JSX.Element {
  const telephoneFromData: string = CompanyData.telephone;
  const telephoneLink: string = "tel: " + telephoneFromData;
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__contacts__container}>
          <h2 className={styles.footer__contacts__title}>Контакты</h2>
          <p className="mb-2">
            Адрес: {CompanyData.adress.city} ул.{CompanyData.adress.street} д.
            {CompanyData.adress.house}, офис {CompanyData.adress.office}
          </p>
          <h3>Тел:</h3>
          <a href={telephoneLink} className={styles.footer__tel__link}>
            {CompanyData.telephone}
          </a>
        </div>
        <div className={styles.footer__about__container}>
          <h2 className={styles.about__title}>О нас</h2>
          <ul className={styles.about__list}>
            <li className={styles.about__list__item}>
              <a href="/japan-web/#/contacts">Контакты</a>
            </li>
            <li className={styles.about__list__item}>
              <a href="/japan-web/#/reviews">Отзывы</a>
            </li>
            <li className={styles.about__list__item}>
              <a href="/japan-web/#/joinus">Сотрудничество</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
