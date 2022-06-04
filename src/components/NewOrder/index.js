import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchOrder } from 'api';

const NewOrder = () => {

  const {orderId} = useParams();
  const [order, setOrder] = useState();

  const getOrder = (id) => {
    FetchOrder(id).then((result)=>{
      setOrder(result);
    }).catch((error)=>{
      console.error(error);
    })
  }
  useEffect(()=> {
    getOrder(orderId);
    console.log(orderId);
  }, [])

  useEffect(()=> {
    if (order) {

    }
  }, [order])

  return (
    <div className="text-center px-2 py-10">
      <style>{`
        .ticket:before, .ticket:after {
          content:"";
          position: absolute;
          height: 6px;
          left: 6px;
          right: 6px;
        }
        .ticket:before {
          top: -5px;
          background: radial-gradient(circle, transparent, transparent 50%, #FBFBFB 50%, #FBFBFB 100%) -7px -8px/16px 16px repeat-x;
        }
        .ticket:after {
          bottom: -5px;
          background: radial-gradient(circle, transparent, transparent 50%, #FBFBFB 50%, #FBFBFB 100%) -7px -2px/16px 16px repeat-x;
        }
      `}</style>
      {order ? 
      <>
        <h2 className="text-xl">Su orden fue recibida correctamente.</h2>
        <p className="text-xl my-1 text-secundary">¡Gracias por confiar en nosotros!</p>
        <br/>
        <div className="relative max-w-sm mx-auto bg-white p-4 mt-10 shadow-lg shadow-black font-mono text-primary-dark">
            <p className="text-left text-sm">{order.buyer.name} ({order.buyer.phone}) </p>
            <p className="text-left text-sm">{order.buyer.email}</p>
            <ul className="ticket border-2 mt-3 px-3 py-2 divide-y border-black/30 divide-black/50">
            {order.products.map((product)=>{
              return <li className="flex justify-between">{product.name} x{product.qty} <span>{product.qty * product.price}</span></li>
            })}
            </ul>
            <hr/>
            <p className="text-right pr-2 mt-1">Total: ${order.total}</p>
          </div>
      </>
      :
      <h2 className="text-lg">Numero de orden inexistente </h2>
    }
    </div>
  )
}

export default NewOrder;