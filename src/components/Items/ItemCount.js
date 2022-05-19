import React, {useState} from 'react';
import styles from "./Button.module.css";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Button from 'components/Common/Button';

const ItemCount = ({stock, initial}) => {
  const [counter, setCounter] = useState(initial);

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

  const onAdd = () => alert('Aca va la función agregar');

  return (
    <>
      <p className="mb-3 text-center">Stock: {stock - counter}</p>
      <div className="flex content-center justify-between w-1/2 mx-auto">
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
      </div>
      <div className="mt-3 text-center">
        <Button disabled={counter===0} onClick={()=> onAdd()}>
          <ShoppingCartIcon className="relative w-5 mr-1" style={{top: "2px"}}/> <span>Agregar</span>
        </Button>
      </div>
    </>
  )
}

export default ItemCount