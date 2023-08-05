import React, { useContext } from "react";
import SiteButton from "../atoms/SiteButton";
import TripScheduleConstructor from "../atoms/TripScheduleConstructor";
import FutureTrips from "../data/tripsData";
import { ModalContext } from "../Context/ModalContext";
import styles from "./styles/molecules.module.css";

function NearestTrips(): JSX.Element {
  const { toggle } = useContext(ModalContext);
  return (
    <section className={styles.nearest__trips__container}>
      <h1 className={styles.nearest__trips__title}>Ближайшие туры</h1>
      <div className={styles.trips__container}>
        <TripScheduleConstructor month="июнь" days={FutureTrips} />
        <TripScheduleConstructor month="июль" days={FutureTrips} />
      </div>
      <SiteButton ButtonType="button" text="Забронировать" handler={toggle} />
    </section>
  );
}

export default NearestTrips;
