//@ts-check
import React, {useContext, useState, useEffect} from 'react';
import styles from "./Button.module.css";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Button from 'components/Common/Button';
import { generalContext } from 'context';

const ItemCount = ({product, initial}) => {
  const {addToCart, cart, handleInitial, removeFromCart, isInCart} = useContext(generalContext);

  const {stock} = product;

  const [counter, setCounter] = useState(handleInitial(product.id));

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
    if (counter > 0)  {
      addToCart({...product, qty: counter })
    } else {
      removeFromCart(product.id);
    }
  };

  const dynamicLabel = () => {
    if (counter === initial && counter !== 0) return "En el carrito";
    if (counter < initial)  return `Quitar (${initial - counter})`;
    return "Agregar";
  }


  // Verificar si se puede optimizar, cuando cambia un producto del carrito vuelve a renderizar todos (es para cuando eliminas un producto el contador vuelva a 0)
  // tal vez creando otro estado de elemento eliminado en el evento de eliminar para hacerle el setcounter a ese solo
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
        {((counter > 0) || (counter === 0 && isInCart(product.id) )) &&
        <Button className="mx-auto" disabled={counter === initial} onClick={onAdd}>
          <ShoppingCartIcon className="relative w-5 mr-1" style={{top: "2px"}}/>
          <span> {dynamicLabel()} </span>
        </Button>
        }
      </div>
    </div>
  )
}

export default ItemCount;