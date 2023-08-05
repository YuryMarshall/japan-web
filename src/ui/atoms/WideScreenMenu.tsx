import React from "react";
import type { IMenu } from "../../models";
import menuLinkData from "../data/MenuData";
import styles from "./styles/atoms.module.css";

export default function WideScreenMenu(): JSX.Element {
  return (
    <ul className={styles.wide__menu__container}>
      {menuLinkData.map((item: IMenu) => {
        return (
          <li key={item.id} className={styles.wide__menu__item}>
            <a href={item.link}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
