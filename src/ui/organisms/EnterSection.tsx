import React from "react";
import TitleContainer from "../molecules/TitleContainer";
import SaleContainer from "../molecules/SaleContainer";
import GuideContainer from "../molecules/GiudesContainer";
import NearestTrips from "../molecules/NearestTrips";
import styles from "./styles/styles.module.css";

function EnterSection(): JSX.Element {
  return (
    <section className={styles.enter__section}>
      <TitleContainer />
      <SaleContainer />
      <GuideContainer />
      <NearestTrips />
    </section>
  );
}

export default EnterSection;
