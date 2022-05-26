import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import { groupBy } from 'components/Common/Functions';
import Button from 'components/Common/Button';

const CartList = ({productsCart, subTotal}) => {
  const [groupedCats, setGroupedCats] = useState([]);

  const renderGroupedCartList = () => {
    if (groupedCats) {
      return groupedCats.map((groupedCat, index)=>{
        return (
        <div key={groupedCat[0]}>
          <h3 className="font-bold leading-8 text-md">{groupedCat[0]}</h3>
          <ul>
            {
            groupedCat[1].map( (cat, index) => {
              return (
                <li key={index} className="flex justify-between pb-2 leading-none">
                  <span>{cat.name} <small>x{cat.qty}</small></span>
                  <span>${cat.price*cat.qty}</span>
                </li>
              )
            })
            }
          </ul>
        </div>
        )
      })
    }
  }

  useEffect(()=>{
    const grouped = groupBy(productsCart, 'category');
    const groupedToArray = Object.entries(grouped);
    setGroupedCats(groupedToArray);
  }, [productsCart])

  useEffect(()=>{
    console.log(groupedCats);
  }, [groupedCats])

  return (
    <Transition
    as={Fragment}
    enter="transition ease-out duration-200"
    enterFrom="opacity-0 translate-y-1"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 translate-y-1"
    >
        <Popover.Panel className="absolute z-10 transform -translate-x-1/2 left-1/2">
          <div className="w-64 p-4 text-left shadow-sm text-primary text-md bg-gradient-to-t from-white to-white shadow-secundary-alt">
            {groupedCats.length ? 
            <>
              {renderGroupedCartList()}
              <p className="flex justify-between pt-2 mt-3 font-bold border-t border-secundary-alt">
                Subtotal: <span>${subTotal}</span>
              </p>
              <Button className="w-full mt-3" color="primary" filled>Realizar compra</Button>
            </>
            :
            <p className="text-center">Todavia no agregaste ningun producto.</p>
            }
          </div>
        </Popover.Panel>
    </Transition>
  )
}

export default CartList