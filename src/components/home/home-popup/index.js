import React from "react";
import styles from "./home.popup.module.scss";

export default function Index() {
  return (
    <div className={styles.overflow__popup}>
      <div className={styles.inner__popup}>
        <div className={styles.indicator__popup}>
          <span>75% ЗАВЕРШЕНО</span>
          <p></p>
        </div>
        <h2 className={styles.title__popup}>
          Куда выслать PDF оферту со <br />
          всеми деталями?
        </h2>
        <p className={styles.attention__text_popup}>
          <span>ВНИМАНИЕ:</span> минимальный первый взнос 500 000 евро
        </p>
        <p className={styles.attention__subtext_popup}>
          Если вы квалифицированный инвестор — оставьте свои данные ниже
        </p>
        <form className={styles.form__popup}>
          <svg
            width="15"
            height="18"
            className={styles.name__input}
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.37605 0.60498C4.95152 0.60498 2.979 2.57749 2.979 5.00202C2.979 7.42655 4.95152 9.39907 7.37605 9.39907C9.80058 9.39907 11.7731 7.42655 11.7731 5.00202C11.7731 2.57749 9.80058 0.60498 7.37605 0.60498ZM7.37605 8.42194C5.4903 8.42194 3.95612 6.88777 3.95612 5.00202C3.95612 3.11628 5.4903 1.5821 7.37605 1.5821C9.26179 1.5821 10.796 3.11628 10.796 5.00202C10.796 6.88777 9.26179 8.42194 7.37605 8.42194Z"
              fill="#777777"
            />
            <path
              d="M12.847 12.2714C11.6432 11.0491 10.0473 10.376 8.35338 10.376H6.39914C4.7052 10.376 3.1093 11.0491 1.90549 12.2714C0.707571 13.4877 0.0478516 15.0933 0.0478516 16.7924C0.0478516 17.0622 0.266596 17.281 0.536412 17.281H14.2161C14.4859 17.281 14.7047 17.0622 14.7047 16.7924C14.7047 15.0933 14.0449 13.4877 12.847 12.2714ZM1.04647 16.3038C1.29124 13.5325 3.59841 11.3531 6.39914 11.3531H8.35338C11.1541 11.3531 13.4613 13.5325 13.706 16.3038H1.04647Z"
              fill="#777777"
            />
          </svg>
          <input type="text" />

          <svg
            width="25"
            height="19"
            className={styles.email__input}
            viewBox="0 0 25 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6221 7.63032V2.59801C19.6221 1.49346 18.7239 0.595215 17.6193 0.595215H2.59845C1.4939 0.595215 0.595703 1.49341 0.595703 2.59801V12.6119C0.595703 13.7164 1.4939 14.6147 2.5985 14.6147H13.8273C14.4833 16.9229 16.6057 18.6202 19.1214 18.6202C20.0896 18.6202 21.0415 18.3655 21.8757 17.8829C22.1148 17.7445 22.197 17.4384 22.0581 17.1988C21.9197 16.9592 21.6131 16.8766 21.374 17.0165C20.6924 17.4106 19.9135 17.6188 19.1214 17.6188C16.6365 17.6188 14.6151 15.5975 14.6151 13.1126C14.6151 10.6277 16.6365 8.60634 19.1214 8.60634C21.6062 8.60634 23.6276 10.6277 23.6276 13.1126V13.6133C23.6276 14.1653 23.1783 14.6147 22.6262 14.6147C22.0742 14.6147 21.6249 14.1653 21.6249 13.6133V11.6105C21.6249 11.3337 21.4009 11.1098 21.1242 11.1098C20.9895 11.1098 20.8685 11.1643 20.7786 11.2506C20.336 10.8563 19.7593 10.6091 19.1214 10.6091C17.741 10.6091 16.6179 11.7322 16.6179 13.1125C16.6179 14.4929 17.741 15.616 19.1214 15.616C19.8676 15.616 20.531 15.2813 20.9901 14.7616C21.3528 15.2769 21.9496 15.616 22.6263 15.616C23.7308 15.616 24.629 14.7178 24.629 13.6133V13.1125C24.629 10.2446 22.4249 7.88445 19.6221 7.63032ZM2.5985 1.59659H17.6193C17.6402 1.59659 17.6576 1.60724 17.6782 1.60851L10.5206 7.48368C10.2659 7.64407 9.8967 7.61079 9.73095 7.50912L2.54024 1.60842C2.56057 1.6072 2.57784 1.59659 2.5985 1.59659ZM18.6207 7.63032C15.8179 7.88445 13.6137 10.2446 13.6137 13.1126C13.6137 13.2816 13.6241 13.4481 13.6391 13.6133H2.5985C2.04648 13.6133 1.59712 13.1639 1.59712 12.6119V2.59801C1.59712 2.4562 1.62843 2.32228 1.68185 2.19996L9.13984 8.31592C9.43124 8.50612 9.7662 8.60639 10.109 8.60639C10.4385 8.60639 10.7607 8.51349 11.0443 8.33747C11.0727 8.32231 11.0996 8.30423 11.125 8.28321L18.5359 2.19986C18.5894 2.32228 18.6208 2.4562 18.6208 2.59806V7.63032H18.6207ZM19.1214 14.6147C18.2931 14.6147 17.6193 13.9409 17.6193 13.1126C17.6193 12.2843 18.2931 11.6105 19.1214 11.6105C19.9497 11.6105 20.6235 12.2843 20.6235 13.1126C20.6235 13.9409 19.9497 14.6147 19.1214 14.6147Z"
              fill="#777777"
            />
          </svg>
          <input type="email" />

          <button type="submit">ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ</button>
          
        </form>
        <p className={styles.bottom__text_popup}>
          100% КОНФИДЕНЦИАЛЬНОСТЬ, БЕЗ СПАМА
        </p>
      </div>
    </div>
  );
}
