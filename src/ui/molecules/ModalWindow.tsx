import React, { useState, useEffect } from "react";

import SiteButton from "../atoms/SiteButton";
import FutureTrips from "../data/tripsData";
import prices from "../data/pricesData";
import ModalWindowTripDuration from "../atoms/ModalWindowTripDuration";

import styles from "./styles/modalwindow.module.css";

interface IWindowProps {
  toggler: () => void;
}
export default function ModalWindow({ toggler }: IWindowProps): JSX.Element {
  const [month, setMonth] = useState<string>("июнь");
  const [visa, setVisa] = useState<boolean>(false);
  const [count, setCount] = useState<string>("");
  const [completeForm, setCompleteForm] = useState(false);

  const tripDays = FutureTrips.filter((item) => {
    if (item.month === month) {
      return item.day;
    } else return null;
  });
  const costFunc = (): number => {
    if (visa) {
      return (prices.hotel + prices.tickets + prices.visa + 5000) * Number(count);
    } else {
      return (prices.hotel + prices.tickets + 5000) * Number(count);
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCompleteForm(true);
    setMonth("июнь");
    setVisa(false);
    setCount("");
  };

  useEffect(() => {
    setCompleteForm(false);
  }, []);

  return (
    <div className={styles.modal__window}>
      <div className={styles.modal__window__container}>
        <div className={styles.modal__window__sticky__container}>
          <form className={styles.modal__window__form} onSubmit={submitHandler}>
            <div className={styles.close__container}>
              <button onClick={toggler} className={styles.close__button}>
                x
              </button>
            </div>
            {!completeForm ? (
              <div className={styles.inputs__container}>
                <select
                  className={styles.month__input}
                  value={month}
                  onChange={(e: React.ChangeEvent<{ value: string }>): void => {
                    setMonth(e.target.value);
                  }}
                >
                  <option>июнь</option>
                  <option>июль</option>
                </select>
                <div className={styles.people__count__container}>
                  <div>
                    <p className="mr-4">Количество человек:</p>
                    <p className="text-sm text-projectgray">(Не больше 5-ти)</p>
                  </div>
                  <input
                    placeholder="1-5"
                    required={true}
                    value={count}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setCount(e.target.value);
                    }}
                    type="number"
                    min={1}
                    max={5}
                    className={styles.people__count__input}
                  />
                </div>
                <div className="flex w-fit mb-2 items-center">
                  <p className="mr-4">Оформить визу Японии:</p>
                  <input
                    type="checkbox"
                    checked={visa}
                    className="mt-1.5"
                    onChange={() => {
                      setVisa(!visa);
                    }}
                  />
                </div>
                <p className="mb-2">Ваш email для обратной связи</p>
                <input
                  type="email"
                  required={true}
                  placeholder="yourjapan@email.jp"
                  className={styles.email__input}
                />
                <ModalWindowTripDuration days={tripDays} month={month} />
                <div className={styles.total__price__container}>
                  <p>Билеты на самолет- {prices.tickets * Number(count)} руб. </p>
                  <p>Проживание в отеле- {prices.hotel * Number(count)} руб.</p>
                  {visa && <p>Оформление визы- {prices.visa * Number(count)} руб.</p>}
                </div>
                <p className="underline">Итого с учетом наших услуг:</p>
                <p className={styles.total__price}>{costFunc()} руб. </p>
                <SiteButton ButtonType="submit" text="Бронировать" />
              </div>
            ) : (
              <div className={styles.complete__container}>
                Заявка оформлена
                <h1 className={styles.complete__title}>Мы свяжемся с Вами в ближайшее время</h1>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
