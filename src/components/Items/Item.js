import React from 'react';
import ItemCount from './ItemCount';

const Item = ({pizza, initial}) => {
  return (
    <div className="bg-primary-light">
      <img src={pizza.photo} alt={pizza.name}/>
      <div className="px-2 pt-1 pb-4">
        <h2 className="font-bold">{pizza.name}</h2>
        <p className="overflow-hidden text-sm text-ellipsis h-11">{pizza.description}</p>
        <hr className="mt-1 mb-4 border-t border-secundary"/>
        <ItemCount stock={pizza.stock} initial={initial}/>
      </div>
    </div>
  )
}

export default Item