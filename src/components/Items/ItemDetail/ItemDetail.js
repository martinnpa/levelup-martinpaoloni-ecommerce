//@ts-check
import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount';
import { ExclamationIcon, BellIcon, CheckCircleIcon, BanIcon } from '@heroicons/react/outline';
import styles from './itemDetail.module.css';


const ItemDetail = ({product}) => {
  const {stock, name, description, price, photo} = product;
  const [stockLabel, setStockLabel] = useState("");


  const styleStock = {
    'Bajo': {className: 'bg-alert', icon: <ExclamationIcon/>},
    "Medio": {className: 'bg-warning', icon: <BellIcon/>},
    'Alto': {className:'bg-success', icon: <CheckCircleIcon/>},
    'No hay stock': {className: 'bg-gray', icon: <BanIcon/>}
  }

  useEffect(()=>{
    if (stock) {
      let label = 'No hay stock';
      if (stock > 0 && stock < 15) label = "Bajo";
      if (stock >= 15 && stock < 50) label = "Medio";
      if (stock >= 50) label = "Alto";
      if (stock === 0) label = "No hay stock";
      setStockLabel(label);
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

            {stockLabel &&
              <span className={`${styleStock[stockLabel].className} ${styles.stockLabel} py-2 px-3`}>
                Stock: {stockLabel} {styleStock[stockLabel].icon}
              </span>
            }
          </div>
          <div>
            <img src={photo} alt={name} />
          </div>
        </div>
      </div>
      <div className="container relative z-10 p-4 mx-auto text-center text-white rounded-lg -mt-14 bg-primary-dark">
        {stock &&
          <div className="max-w-full mx-auto w-72">
            <ItemCount product={product} initial={0} />
          </div>
        }
      </div>
    </>
  )
}

export default ItemDetail