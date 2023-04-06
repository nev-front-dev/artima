import Image from "next/image";
import React from "react";
import build__image from "../../../../public/static/build-bg-artima.png";
import styles from "./build.module.scss"

export default function Index() {
  return (
    <div className={styles.image__wrapper}>
      <Image 
      src={build__image} 
      priority="true" 
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      alt="Artima build" />
    </div>
  );
}
