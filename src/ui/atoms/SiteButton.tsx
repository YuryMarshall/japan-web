import React from "react";
import styles from "./styles/atoms.module.css";

interface IButtonProps {
  ButtonType: "submit" | "reset" | "button";
  text: string;
  handler?: () => void;
  link?: string;
}

function SiteButton(props: IButtonProps): JSX.Element {
  if (props.link !== undefined) {
    return (
      <button type={props.ButtonType} className={styles.site__button}>
        <a href={props.link}>{props.text}</a>
      </button>
    );
  } else {
    return (
      <button type={props.ButtonType} className={styles.site__button} onClick={props.handler}>
        {props.text}
      </button>
    );
  }
}

export default SiteButton;
