import React, { FC } from "react";
import styles from "./Counter.module.styl";

interface counterProps {
  styleProp: string;
  size: string;
  animation: boolean;
}

const Counter: FC<counterProps> = ({ styleProp, size, animation }) => {
  return (
    <>
      <div className={styles.live_indicator}>
        <div className={`${styles.dot} ${styles[styleProp]} ${styles[size]}`}></div>
        {animation && size === "small" && (
          <>
            <div
              className={`${styles.pulse} ${styles[styleProp]} ${styles[size]} ${styles.one}`}
            ></div>
            <div
              className={`${styles.pulse} ${styles[styleProp]} ${styles[size]} ${styles.two}`}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default Counter;
