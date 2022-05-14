import React, {useState} from 'react';
import styles from "./Button.module.css";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Button from 'components/Common/Button';

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
      <p className="pt-2 mt-2 mb-3 text-center border-t border-secundary">Stock: {stock - counter}</p>
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
        <Button disabled={counter===0} onClick={()=> alert('Aca va la función agregar')}>
          <ShoppingCartIcon className="relative w-5 mr-1" style={{top: "2px"}}/> <span>Agregar</span>
        </Button>
      </div>
    </>
  )
}

export default ItemCount