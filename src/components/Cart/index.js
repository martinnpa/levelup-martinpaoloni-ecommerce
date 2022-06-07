import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import { generalContext } from 'context';
import { groupBy } from 'components/Common/Functions';
import { TrashIcon } from '@heroicons/react/outline';
import ItemCountByOne from 'components/Common/ItemCount/ItemCountByOne';
import FormCheckout from './FormCheckout';
import FormCheckout3 from './FormCheckout2';

const Index = () => {
  const { cart, resetCart, subTotal } = useContext(generalContext);
  const [grouped, setGrouped] = useState();

  useEffect(() => {
    if (cart) {
      setGrouped(groupBy(cart, 'category'));
    }
  }, [cart])

  return (
    <>
    <div className="grid grid-cols-10">
      <div className="w-full max-w-2xl col-span-7 mx-auto">
        <div className="py-6 rounded">
          <H1 className="mb-6 text-center text-primary-on">Tu pedido</H1>
          {
            grouped &&
            grouped.map((category, index)=> (
            <div key={index}>
              <div className="text-center md:text-left">
                <h2 className="inline-block mx-auto mb-4 text-lg italic border-b border-white md:mx-0" style={{paddingBottom: "2px"}}>{category[0]}</h2>
              </div>
              {
                category[1].map((product) => (
                  <div key={product.id} className="relative items-center justify-between max-w-sm px-4 py-2 mx-auto mb-4 text-center rounded shadow-xl shadow-primary-dark bg-primary-light md:text-left sm:block md:flex md:max-w-none">
                    <button className="absolute self-stretch hover:text-secundary left-3 top-3 md:static"><TrashIcon className="w-4"/></button>
                    <img src={product.photo} alt={product.name} className="object-cover w-20 mx-auto border-2 rounded h-14 border-secundary md:mx-0"/>
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
          <p className="mt-8 text-center md:text-right">
            Total:
            <span className="p-2 ml-4 border rounded border-grey-1 bg-primary-dark" style={{borderStyle: "inset"}}>
              $ {subTotal}
            </span>
          </p>
          }
        </div>
      </div>
      <div className="sticky flex items-center justify-center flex-col col-span-3 px-10 py-6 bg-primary-dark" style={{boxShadow: "inset 7px 8px 13px 0 rgb(0 0 0 / 85%)"}}>
        <FormCheckout3 cart={cart} resetCart={resetCart} total={subTotal}/>
      </div>
    </div>
    </>
  )
}

export default Index;