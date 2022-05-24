import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import { groupBy } from 'components/Common/Functions';

const CartList = ({productsCart, subTotal}) => {
  const [groupedCats, setGroupedCats] = useState({});

  const renderGroupedCartList = () => {
    if (groupedCats) {
      let groupedCatsArr = Object.entries(groupedCats)
      return groupedCatsArr.map((groupedCat, index)=>{
        return (
        <div key={groupedCat[0]}>
          <h3 className="font-bold text-md">{groupedCat[0]}</h3>
          <ul>
            {
            groupedCat[1].map( (cat, index) => {
              return (
                <li key={index} className="flex justify-between">
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
    setGroupedCats(groupBy(productsCart, 'category'));
  }, [productsCart])

  useEffect(()=>{
    // localStorage.clear();
  }, [])
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
        <div className="p-4 text-left bg-white w-60 text-primary text-md">
          {renderGroupedCartList()}
          <p className="flex justify-between pt-2 mt-3 font-bold border-t border-secundary-alt">
            Subtotal: <span>${subTotal}</span>
          </p>
        </div>
        </Popover.Panel>
    </Transition>
  )
}

export default CartList