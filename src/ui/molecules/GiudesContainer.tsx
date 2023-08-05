import React from "react";
import SiteButton from "../atoms/SiteButton";
import UsersConstructor from "../atoms/UsersConstructor";
import BlogData from "../data/BlogsData";
import styles from "./styles/molecules.module.css";

function GuideContainer(): JSX.Element {
  return (
    <div className={styles.guides__container}>
      <h1 className={styles.guides__title}>Проводники</h1>
      <UsersConstructor />
      <p className={styles.guides__text}>{BlogData[1].text.substring(0, 182)}</p>
      <SiteButton
        ButtonType={"button"}
        text={"Читать блог"}
        link={`/japan-web/#/blog/${String(BlogData[1].id)}`}
      />
    </div>
  );
}

export default GuideContainer;
