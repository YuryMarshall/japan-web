import React from "react";
import type { IFutureTrips } from "../../models";
import styles from "./styles/atoms.module.css";

interface ITripDurationProps {
  days: IFutureTrips[];
  month: string;
}

export default function ModalWindowTripDuration({ days, month }: ITripDurationProps): JSX.Element {
  const monthPrettirer = (): string => {
    if (month === "июнь") {
      return "июня";
    } else {
      return "июля";
    }
  };
  return (
    <div className={styles.trip__duration__container}>
      <p className={styles.trip__duration__text}>С:</p>
      <p className="mr-3 text-projectred">{`${days[0].day} ${monthPrettirer()}`}</p>
      <p className={styles.trip__duration__text}>По:</p>
      <p className={styles.trip__duration__color}>
        {`${days[days.length - 1].day} ${monthPrettirer()}`}{" "}
      </p>
    </div>
  );
}
