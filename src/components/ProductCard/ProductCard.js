import React from 'react';
import ItemCount from 'components/ProductCard/ItemCount';

const ProductCard = ({pizza, initial}) => {
  return (
    <div className="bg-primary-light">
      <img src={pizza.photo} alt={pizza.name}/>
      <div className="px-2 pt-1 pb-4">
        <h2 className="font-bold">{pizza.name}</h2>
        <p className="overflow-hidden text-sm text-ellipsis h-11">{pizza.description}</p>
        <ItemCount stock={pizza.stock} initial={initial}/>
      </div>
    </div>
  )
}

export default ProductCard