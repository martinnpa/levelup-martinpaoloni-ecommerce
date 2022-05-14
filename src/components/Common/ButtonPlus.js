import React from "react";
import styles from "./Button.module.css";

const ButtonPlus = ({ counter, setCounter, stock }) => {
  const handleOperation = () => {
    if (counter !== stock) {
      setCounter(counter + 1);
    }
  };
  return (
    <button
      className={styles.operation}
      onClick={() => handleOperation()}
      disabled={counter === stock}
    >
      +
    </button>
  );
};

export default ButtonPlus;
