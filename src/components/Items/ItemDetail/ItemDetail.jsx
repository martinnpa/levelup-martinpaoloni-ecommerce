import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
  const {stock, name, description, price, photo} = product;
  const [stockLabel, setStockLabel] = useState("");

  const styleStock = {
    'Bajo': 'bg-red',
    "Medio": 'bg-yellow',
    'Alto': 'bg-green',
    'No hay stock': 'bg-gray'
  }

  useEffect(()=>{
    if (stock) {
      if (stock > 0 && stock < 15) setStockLabel("Bajo");
      if (stock >= 15 && stock < 50) setStockLabel("Medio");
      if (stock >= 50) setStockLabel("Alto");
      if (stock === 0) setStockLabel("No hay stock");
    }
  },[stock])


  return (
    <>
    <div className="pb-8 bg-secundary-alt text-primary">
      <div className="container grid grid-cols-2 gap-5 p-10">
        <div>
          <h1 className="text-3xl font-black">{name}</h1>
          <p className="pt-8 text-xl">
            {description}
          </p>
          <p className="py-4 mt-4 text-lg font-bold">
            Precio: ${price}
          </p>
          {stockLabel && <span className={`${styleStock.stockLabel} p-4`}>Stock: {styleStock.stockLabel} {stockLabel} ----- {styleStock.Medio}</span>}
        </div>
        <div>
          <img src={photo} alt={name} />
        </div>
      </div>
    </div>
    <div className="container relative z-10 p-4 mx-auto text-center text-white rounded-lg -mt-14 bg-primary-dark">
      {stock &&
        <div className="max-w-full mx-auto w-72">
          <ItemCount stock={stock} initial={0} />
        </div>
      }
    </div>
    </>
  )
}

export default ItemDetail