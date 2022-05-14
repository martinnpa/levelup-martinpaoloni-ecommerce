import React from 'react'
import {
    ShoppingCartIcon
  } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';
import ItemListContainer from './ItemListContainer';

const Cart = ({items}) => {
  return (
    <Popover className="relative inline-block">
        <Popover.Button>
            <ShoppingCartIcon className="w-6 h-6"/>
            <span className="absolute flex w-4 h-4 text-xs text-center rounded-full place-content-center -top-2 -right-3 text-primary bg-secundary">
                {items}
            </span>
        </Popover.Button>
        <ItemListContainer />
    </Popover>
  )
}

export default Cart