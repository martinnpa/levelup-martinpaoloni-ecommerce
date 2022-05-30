//@ts-check
import React, {useContext, useState, useEffect} from 'react';
import styles from "./Button.module.css";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Button from 'components/Common/Button';
import { generalContext } from 'context';

const ItemCount = ({product, initial}) => {
  const {addToCart, cart, handleInitial} = useContext(generalContext);

  const {stock} = product;

  const [counter, setCounter] = useState(handleInitial(product.id));
  const [labelButton, setLabelButton] = useState("Agregar");

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

  useEffect(() => {
    if (counter < initial) {
      let diff = (initial - counter);
      setLabelButton(`Quitar (${diff})`)
    } else {
      if (labelButton !== "Agregar") {
        setLabelButton("Agregar");
      }
    }
  }, [counter]);


  // Verificar si se puede optimizar, cuando cambia un producto del carrito vuelve a renderizar todos (es para cuando eliminas un producto el contador vuelva a 0)
  useEffect(() => {
      setCounter(handleInitial(product.id))
  }, [cart])


  return (
    <div className="relative z-30">
      <p className="mb-3 text-xs text-center text-primary-on">Stock: {stock - counter}</p>
      <div className="flex justify-between w-1/2 mx-auto">
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
        {counter > 0 && initial !== counter &&
        <Button className="mx-auto" disabled={counter===0} onClick={onAdd}>
          <ShoppingCartIcon className="relative w-5 mr-1" style={{top: "2px"}}/>
          <span>{labelButton}</span>
        </Button>
        }
      </div>
    </div>
  )
}

export default ItemCount;