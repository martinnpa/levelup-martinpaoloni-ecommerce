//@ts-check
import React, {useContext, useState} from 'react';
import styles from "./Button.module.css";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Button from 'components/Common/Button';
import { generalContext } from 'context';

const ItemCount = ({product, initial}) => {
  const {addToCart} = useContext(generalContext);

  const {stock} = product;

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

  const onAdd = () => {
    addToCart({...product, qty: counter })
  };

  return (
    <div className="relative z-30">
      <p className="mb-3 text-xs text-center text-primary-on">Stock: {stock - counter}</p>
      <div className="flex content-center justify-between w-1/2 mx-auto">
        <button
          className={styles.operation}
          onClick={() => handleOperationMinus()}
          disabled={counter === 0}
        >
          -
        </button>

        <span className="text-primary-on">{counter}</span>

        <button
          className={styles.operation}
          onClick={() => handleOperationSum()}
          disabled={counter === stock}
        >
          +
        </button>
      </div>
      <div className="mt-3">
        <Button className="mx-auto" disabled={counter===0} onClick={onAdd}>
          <ShoppingCartIcon className="relative w-5 mr-1" style={{top: "2px"}}/> <span>Agregar</span>
        </Button>
      </div>
    </div>
  )
}

export default ItemCount;