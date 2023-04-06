import React from 'react'
import styles from "./button.module.scss"

export default function Index() {
  return (
    <button className={styles.button}>
        <span>
           ОТПРАВЬТЕ МНЕ НА ПОЧТУ<br/> ПРЕДЛОЖЕНИЕ
            
        </span>
        <span>
            Объект планируется к перепродаже через 5-10 лет
            <br/> с 500 000 EUR прибылью для каждого инвестора
        </span>
    </button>
  )
}
