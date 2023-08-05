import React from "react";
import styles from "./styles/atoms.module.css";

interface IContactProps {
  image: string;
  link: string;
  text?: string;
}

export default function Contact({ image, link, text }: IContactProps): JSX.Element {
  return (
    <div className={styles.contact__container}>
      <img src={image} className={styles.contact__image} />
      <a href={link} type="email">
        {text}
      </a>
    </div>
  );
}
