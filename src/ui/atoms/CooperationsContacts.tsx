import React from "react";
import type { IWorkerData } from "../../models";
import styles from "./styles/atoms.module.css";

interface IContactProps {
  title: string;
  data: IWorkerData[];
}
export default function CooperationsContacts({ title, data }: IContactProps): JSX.Element {
  return (
    <div className={styles.cooperation__contacts__container}>
      <h3 className={styles.cooperation__contacts__title}>{title}</h3>
      {data.map((item: IWorkerData) => {
        return (
          <div key={item.id} className={styles.cooperation__contacts__item__container}>
            <img
              src={item.avatar}
              className={styles.cooperation__contacts__item__image}
              alt={item.first_name + " avatar"}
            />
            <div className="">
              <p>{item.first_name + " " + item.last_name}</p>
              <a href={"mailto:" + item.email} type="email" className="text-projectred">
                {item.email}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
