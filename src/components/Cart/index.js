import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import { generalContext } from 'context';
import { groupBy } from 'components/Common/Functions';
import { TrashIcon } from '@heroicons/react/outline';
import ItemCountByOne from 'components/Common/ItemCount/ItemCountByOne';

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
      <div className="max-w-2xl mx-auto py-6 rounded">
        <H1 className="mb-6 text-center text-primary-on">Tu pedido</H1>
        {
          grouped &&
          grouped.map((category, index)=> (
          <div key={index}>
            <div className="md:text-left text-center">
              <h2 className="text-lg inline-block border-b border-white mb-4 italic mx-auto md:mx-0" style={{paddingBottom: "2px"}}>{category[0]}</h2>
            </div>
            {
              category[1].map((product) => (
                <div key={product.id} className="relative shadow-xl shadow-primary-dark justify-between items-center px-4 py-2 mb-4 bg-primary-light rounded text-center md:text-left sm:block md:flex mx-auto max-w-sm md:max-w-none">
                  <button className="self-stretch hover:text-secundary absolute left-3 top-3 md:static"><TrashIcon className="w-4"/></button>
                  <img src={product.photo} alt={product.name} className="object-cover w-20 h-14 border-2 rounded border-secundary mx-auto md:mx-0"/>
                  <div className="md:w-64">
                    <h3>{product.name}</h3>
                    <p className="text-sm font-light">{product.description}</p>
                  </div>
                  <h4>${product.price}</h4>
                  <div className="mx-auto md:mx-0" style={{maxWidth:"120px"}}>
                    <ItemCountByOne product={product} initial={product.qty}/>
                  </div>
                  <h4 className="text-secundary">${(product.price*product.qty)}</h4>
                </div>
              ))
            }
            </div>
          ))
        }
        {subTotal &&
        <p className="text-center md:text-right mt-8">
          Total:
          <span className="border border-grey-1 p-2 rounded ml-4 bg-primary-dark" style={{borderStyle: "inset"}}>
            $ {subTotal}
          </span>
        </p>
        }
      </div>
    </>
  )
}

export default Index;