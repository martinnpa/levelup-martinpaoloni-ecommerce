import React, {Fragment} from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';

const ItemListContainer = () => {
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
        <Popover.Panel className="absolute z-10 transform -translate-x-1/2 left-1/2 ">
        <div className="px-1 py-3 text-center bg-white w-52 text-primary text-md">
            <p>Greetings</p>
        </div>
        </Popover.Panel>
    </Transition>
  )
}

export default ItemListContainer