import React, { FC, useState } from "react";
import styles from "./Button.module.styl";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator.tsx";

interface buttonProps {
  styleProp: string;
  size: string;
  children: any;
  disabled: boolean;
}

const Button: FC<buttonProps> = ({
  styleProp,
  size,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onButtonClick = () => {
    setLoading(!loading);
  };

  return (
    <button
      {...props}
      className={`${styles.button} ${styles[size]} ${styles[styleProp]}`}
      onClick={onButtonClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loading ? (
        <>
          <div className={` ${styles.shimmer} ${styles.animation}`} />
          <ProgressIndicator />
        </>
      ) : (
        <>
          <div
            className={` ${isHovered ? styles.hovered : styles.unHovered} ${
              styles.overlay
            } ${styles.animation}`}
          />
          <span className={styles.content}>{children.props.children?.[0]}</span>
          <span className={styles.content}>{children.props.children?.[1]}</span>
        </>
      )}
    </button>
  );
};

export default Button;
