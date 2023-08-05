import React from "react";
import logo from "../../img/logo.png";
import BurgerNav from "../atoms/BurgerNav";
import type { IHeader } from "../../models";
import WideScreenMenu from "../atoms/WideScreenMenu";
import styles from "./styles/styles.module.css";

function Header({ menuState, toggler }: IHeader): JSX.Element {
  return (
    <header className={styles.header}>
      <a href="https://github.com/YuryMarshall">
        <img src={logo} className={styles.header__logo} />
      </a>
      <WideScreenMenu />
      <button className={styles.burger} onClick={toggler}></button>
      {menuState && <BurgerNav />}
    </header>
  );
}

export default Header;
