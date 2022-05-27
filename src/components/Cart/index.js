import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import { generalContext } from 'context';
import { groupBy } from 'components/Common/Functions';
import { TrashIcon } from '@heroicons/react/outline';
import ItemCount from 'components/Common/ItemCount/ItemCount';

const Index = () => {
  const { cart, subTotal, removeFromCart } = useContext(generalContext);
  const [grouped, setGrouped] = useState();

  useEffect(() => {
    if (cart) {
      setGrouped(groupBy(cart, 'category'));
    }
  }, [cart])

  return (
    <>
      <div className="max-w-2xl mx-auto my-6 rounded">
        <H1 className="mb-10 text-center text-primary-on">Tu pedido</H1>
        {
          grouped &&
          grouped.map((category)=> ( 
          <>
            <h2 className="text-lg">{category[0]}</h2>
            {
              category[1].map((product) => (
                <div className="flex justify-between p-4 mb-4 bg-primary-light">
                  <button><TrashIcon className="w-4"/></button>
                  <img src={product.photo} alt={product.name} className="object-cover w-20 border-2 rounded border-secundary"/>
                  <div>
                    <h3>{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                  </div>
                  <h4>${product.price}</h4>
                  <ItemCount product={product} initial={product.qty}/>
                  <h4>${(product.price*product.qty)}</h4>
                </div>
              ))
            }
          </>
          ))
        }
        <div className="flex justify-between p-4 mb-4 bg-primary-light">
            <p className="w-2">Bo</p>
            <img src="" alt="" />
            <div>
              <h3>Producto Nombre</h3>
              <p>Descripción</p>
            </div>
            <h4>$1020</h4>
            <div>
              2
            </div>
            <h4>$2040</h4>
        </div>
      </div>




    </>
  )
}

export default Index;