import React from "react";
import type { ITeam } from "../../models";
import users from "../data/usersData";
import styles from "./styles/atoms.module.css";

function UsersConstructor(): JSX.Element {
  return (
    <ul className={styles.users__container}>
      {users.map((user: ITeam) => {
        if (user.id === 1 || user.id === 2) {
          return (
            <li key={user.id} className={styles.users__container__user}>
              <img
                src={user.avatar}
                alt={user.name}
                className={styles.users__container__user__image}
              />
              <div className={styles.users__container__user__info__container}>
                <p className={styles.users__container__user__info__name}>{user.name}</p>
                <p className="text-projectgray ">{user.profession}</p>
              </div>
            </li>
          );
        } else {
          return <div key={user.id}></div>;
        }
      })}
    </ul>
  );
}

export default UsersConstructor;
