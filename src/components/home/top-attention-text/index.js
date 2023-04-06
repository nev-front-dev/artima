import React from 'react'
import styles from "./top.attention.text.module.scss"
import Flag from "../../../components/svg/flag"

export default function Index() {
  return (
    <div className={styles.attention}>
        <p>ВНИМАНИЕ ИНВЕСТОРАМ</p>
        <Flag/>
    </div>
  )
}
