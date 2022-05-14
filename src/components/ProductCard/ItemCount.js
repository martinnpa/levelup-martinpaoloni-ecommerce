import React, {useState} from 'react'
import styles from "./Button.module.css";

const ItemCount = ({stock}) => {
  const [counter, setCounter] = useState(0);

  const handleOperationSum = () => {
    if (counter !== stock) {
      setCounter(counter + 1);
    }
  };

  const handleOperationMinus = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
    <button
      className={styles.operation}
      onClick={() => handleOperationMinus()}
      disabled={counter === 0}
    >
      -
    </button>

    {counter}

    <button
      className={styles.operation}
      onClick={() => handleOperationSum()}
      disabled={counter === stock}
    >
      +
    </button>
    </>
  )
}

export default ItemCount