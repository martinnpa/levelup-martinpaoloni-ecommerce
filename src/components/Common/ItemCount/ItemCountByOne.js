//@ts-check
import React, {useContext, useState, useEffect} from 'react';
import { generalContext } from 'context';

const ItemCountByOne = ({product, initial}) => {
  const {addToCart, removeFromCart} = useContext(generalContext);

  const {stock, id} = product;

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

  useEffect(() => {
    if (counter > 0) {
      addToCart({...product, qty: counter })
    } else {
      removeFromCart(id);
    }
  }, [counter])
  
  return (
    <div className="relative z-30">
      <p className="mb-3 text-xs text-center text-primary-on">Stock: {stock - counter}</p>
      <div className="flex justify-between mx-auto items-center">
        <button
          className="w-5 h-5 flex items-center justify-center border border-white border-opacity-20 hover:border-secundary-alt"
          onClick={() => handleOperationMinus()}
          disabled={counter === 0}
        >
          -
        </button>

        <span className="text-primary-on px-2">{counter}</span>

        <button
          className="w-5 h-5 flex items-center justify-center border border-white border-opacity-20 hover:border-secundary-alt"
          onClick={() => handleOperationSum()}
          disabled={counter === stock}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCountByOne;