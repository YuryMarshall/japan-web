import React, { useContext } from "react";
import FutureTrips from "../data/tripsData";
import type { IFutureTrips } from "../../models";
import SiteButton from "../atoms/SiteButton";
import { ModalContext } from "../Context/ModalContext";
import styles from "./styles/styles.module.css";

export default function ScheduleSection(): JSX.Element {
  const defineMonthes = function (data: IFutureTrips[]): string[] {
    const monthes: string[] = [];
    data.forEach((item: IFutureTrips) => {
      if (!monthes.includes(item.month)) {
        monthes.push(item.month);
      }
    });
    return monthes;
  };
  const { toggle } = useContext(ModalContext);
  return (
    <div className={styles.schedule}>
      <h1 className={styles.schedule__title}>Расписание туров</h1>
      <div className={styles.schedules__container}>
        {defineMonthes(FutureTrips).map((item, index) => {
          return (
            <div key={index} className={styles.schedule__month}>
              <h2 className={styles.schedule__month__tittle}>{item.toUpperCase()}</h2>
              <div className={styles.days__container}>
                <p className="mr-10">День</p> <p>Город</p>
              </div>
              {FutureTrips.map((data) => {
                if (item === data.month) {
                  return (
                    <div key={data.id} className={styles.city__container}>
                      <p className={styles.day__number}>{data.day}</p> <p>{data.city}</p>
                    </div>
                  );
                } else return null;
              })}
              <p className={styles.schedule__info}>
                Тур занимает весь месяц {item}, в стоимость тура входит: билеты, проживание в отеле,
                завтраки, а так же при необходимости оформление визы.
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <SiteButton ButtonType="button" text="Присоединится к туру" handler={toggle} />
      </div>
    </div>
  );
}
