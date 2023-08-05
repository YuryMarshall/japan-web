import React from "react";
import type { IFutureTrips } from "../../models";
import styles from "./styles/atoms.module.css";

interface ITrips {
  month: string;
  days: IFutureTrips[];
}

function TripScheduleConstructor(props: ITrips): JSX.Element {
  return (
    <div className={styles.schedule__container}>
      <h2 className={styles.schedule__container__title}>Расписание на {props.month}:</h2>
      {props.days.map((item: IFutureTrips, index) => {
        if (props.month === item.month) {
          return (
            <div key={item.id} className={styles.schedule__day__container}>
              <p className={styles.schedule__day__date}>{item.day}</p>{" "}
              <p className={styles.schedule__day__month}>{item.city}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default TripScheduleConstructor;
