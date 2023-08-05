import React from "react";
import type { IMenu } from "../../models";
import menuLinkData from "../data/MenuData";
import styles from "./styles/atoms.module.css";
interface IBurgerProps {
  toggler: (e: any) => void;
}
function BurgerNav({ toggler }: IBurgerProps): JSX.Element {
  return (
    <nav className={styles.navigation__container}>
      {menuLinkData.map((item: IMenu) => {
        return (
          <a href={item.link} key={item.id} className={styles.navigation__link} onClick={toggler}>
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}

export default BurgerNav;
