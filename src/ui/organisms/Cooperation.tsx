import React, { useEffect, useState } from "react";
import CooperationsContacts from "../atoms/CooperationsContacts";
import axios from "axios";
import type { AxiosError } from "axios";
import type { IWorker, IWorkerData } from "../../models";
import ErrorContainer from "../molecules/ErrorContainer";
import styles from "./styles/styles.module.css";

export default function Cooperation(): JSX.Element {
  const [workers, setWorkers] = useState<IWorkerData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function FetchWorkers(): Promise<void> {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IWorker>("https://reqres.in/api/users?limit=6");
      setWorkers(response.data.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;

      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    FetchWorkers();
  }, []);
  const LoadingResult = function (): JSX.Element | undefined {
    if (workers.length > 0 && !loading) {
      return (
        <div className={styles.contacts__container}>
          <CooperationsContacts title="Отдел работы с кадрами" data={workers.slice(0, 2)} />
          <CooperationsContacts title="Отдел маркетинга" data={workers.slice(2, 4)} />
          <CooperationsContacts title="Отдел креативных идей" data={workers.slice(4, 6)} />
        </div>
      );
    } else if (error !== "") {
      return <ErrorContainer text={error} />;
    } else return <div className={styles.loading}>Loading...</div>;
  };

  return (
    <section className={styles.cooperation__section}>
      <h1 className={styles.cooperation__title}>Сотрудничество</h1>
      <h2 className={styles.cooperation__subtitle}>
        Хочешь стать частью команды? <br />
        Спонсором?
        <br /> Есть креативные идеи?
        <br /> Обратись к нашей команде!
      </h2>
      <div className="flex justify-center">
        <LoadingResult />
      </div>
    </section>
  );
}
