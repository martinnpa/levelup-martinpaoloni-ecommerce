import React, {useState} from 'react';
import Button from 'components/Common/Button';
import ItemCount from 'components/ProductCard/ItemCount';
import { ShoppingCartIcon } from '@heroicons/react/outline'


const ProductCard = ({pizza}) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-primary-light">
      <img src={pizza.photo} alt={pizza.name}/>
      <div className="px-2 pt-1 pb-4">
        <h2 className="font-bold">{pizza.name}</h2>
        <p className="overflow-hidden text-sm text-ellipsis h-11">{pizza.description}</p>
        <p className="pt-2 mt-2 mb-3 text-center border-t border-secundary">Stock: {pizza.stock - counter}</p>
        <div className="flex content-center justify-between w-1/2 mx-auto">
          <ItemCount stock={pizza.stock}/>
        </div>
        <div className="mt-3 text-center">
          <Button disabled={counter===0} onClick={()=> alert('Aca va la función agregar')}>
            <ShoppingCartIcon className="relative w-5 mr-1" style={{top: "2px"}}/> <span>Agregar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard