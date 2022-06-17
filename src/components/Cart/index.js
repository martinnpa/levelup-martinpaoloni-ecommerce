import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import { generalContext } from 'context';
import { groupBy } from 'components/Common/Functions';
import { TrashIcon } from '@heroicons/react/outline';
import ItemCountByOne from 'components/Common/ItemCount/ItemCountByOne';
// import FormCheckout from './FormCheckout';
import FormCheckout from './FormCheckout2';
import { Link } from 'react-router-dom';
import Coupon from './Coupon';

const Index = () => {
  const { cart, resetCart, subTotal, removeFromCart } = useContext(generalContext);
  const [grouped, setGrouped] = useState();
  const [userDiscount, setUserDiscount] = useState({});
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (cart) {
      setGrouped(groupBy(cart, 'category'));
    }
  }, [cart])

  useEffect(() => {
    setTotal(subTotal);
    setDiscount(0);
  }, [subTotal])

  useEffect(() => {
    if (userDiscount.percent) {
      let discountNumber = subTotal * (userDiscount.percent/100 )
      setDiscount(discountNumber);
      if (discountNumber > userDiscount.max) {
        discountNumber = userDiscount.max;
        setDiscount(userDiscount.max);
      }
      setTotal(subTotal - discountNumber);
    } else {
      setDiscount(0);
      setTotal(subTotal);
    }
  }, [userDiscount])



  if (cart.length === 0) return (
    <div className="text-center py-10 px-2">
      <h2 className="text-2xl font-bold mb-2">Su carrito está vacío.</h2>
      <p><Link to="/" className="text-secundary hover:text-secundary-lilac">Ver productos.</Link></p>
    </div>
  )

  return (
    <>
    <div className="grid grid-cols-10" style={{minHeight: "calc(100vh - 103px)"}}>
      <div className="col-span-10 md:col-span-6 lg:col-span-7 bg-primary-dark px-2" style={{boxShadow: "inset 7px 8px 13px 0 rgb(0 0 0 / 85%)"}}>
        <div className="py-6 w-full max-w-2xl rounded  mx-auto">
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
                  <div key={product.id} className="relative items-center justify-between max-w-sm px-4 py-2 mx-auto mb-4 text-center rounded shadow-md shadow-black/90 bg-primary-light md:text-left sm:block md:flex md:max-w-none">
                    <button className="absolute self-stretch hover:text-secundary left-3 top-3 md:static" onClick={()=>removeFromCart(product.id)}><TrashIcon className="w-4"/></button>
                    <img src={product.photo} alt={product.name} className="object-cover w-20 mx-auto border-2 rounded h-14 border-secundary md:mx-0"/>
                    <div className="md:w-64">
                      <h3>{product.name}</h3>
                      <p className="text-sm font-light">{product.description}</p>
                    </div>
                    <h4 className="text-xs">${product.price} c/u</h4>
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
          <Coupon subTotal={subTotal} setUserDiscount={setUserDiscount}/>
          <hr className="my-6 opacity-10"/>
          {discount > 0 &&
          <p className="text-right text-sm">Descuento aplicado: <span className="pl-1">- ${discount}</span></p>
          }
          {subTotal &&
          <p className="mt-4 text-center md:text-right">
            Total:
            <span className="p-2 ml-4 border rounded border-black/20 bg-black/50" style={{borderStyle: "inset"}}>
              $ {total}
            </span>
          </p>
          }
        </div>
      </div>
      <div className="col-span-10 md:col-span-4 lg:col-span-3 px-10 pt-10 bg-primary-light shadow-xl shadow-black">
        <FormCheckout cart={cart} resetCart={resetCart} total={total} discount={discount}/>
      </div>
    </div>
    </>
  )
}

export default Index;