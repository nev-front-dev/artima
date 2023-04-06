import React from "react";
import styles from "./logos.module.scss";
import United from "../../svg/united";
import Artima from "../../svg/artima"
import ReadyParthers from "../../svg/ready-partners"

export default function Index() {
  return (
    <div className={styles.logos__wrapper}>
      <United />
      <Artima/>
      <ReadyParthers/>
    </div>
  );
}
