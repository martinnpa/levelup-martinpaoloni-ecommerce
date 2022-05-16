import React from 'react';
import { Transition, Menu } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/outline';
const PizzasMenu = ({categories}) => {

    const categoriesList = categories.map((category, index)=> {
        return <Menu.Item key={index} ><a href="/">{category}</a></Menu.Item>;
    })
  return (
    <>
        <Menu>
            <Menu.Button className="flex items-center">Pizzas <ChevronDownIcon className="w-5 h-5 mt-1 ml-2"/> </Menu.Button>
            <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items  className="absolute z-50 flex flex-col gap-5 p-5 mt-3 text-center transform -translate-x-1/2 w-72 bg-primary-light left-1/2 bg-gradient-to-t from-primary-dark to-primary">
                    {categoriesList}
                </Menu.Items>
            </Transition>
        </Menu>
    </>
  )
}

export default PizzasMenu