import React from "react";
import type { IMenu } from "../../models";
import menuLinkData from "../data/MenuData";
import styles from "./styles/atoms.module.css";

function BurgerNav(): JSX.Element {
  return (
    <nav className={styles.navigation__container}>
      {menuLinkData.map((item: IMenu) => {
        return (
          <a href={item.link} key={item.id} className={styles.navigation__link}>
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}

export default BurgerNav;
