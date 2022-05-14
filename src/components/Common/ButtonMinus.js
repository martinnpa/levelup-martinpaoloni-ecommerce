import React from "react";
import styles from "./Button.module.css";

const ButtonMinus = ({ counter, setCounter, stock }) => {
  const handleOperation = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <button
      className={styles.operation}
      onClick={() => handleOperation()}
      disabled={counter === 0}
    >
      -
    </button>
  );
};

export default ButtonMinus;
