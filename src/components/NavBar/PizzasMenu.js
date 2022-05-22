import React, {useEffect, useState} from 'react';
import { Transition, Menu } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/outline';
import Loader from 'components/Common/Loader';
import { Link } from 'react-router-dom';

const PizzasMenu = ({categories}) => {
    const [loading, setLoading] = useState(true);

    const categoriesList = categories.map((category, index)=> {
        return <Menu.Item key={index} ><Link to={`/category/${category}`}>{category}</Link></Menu.Item>;
    });

    useEffect(()=>{
        if (categoriesList.length > 0) {
            setLoading(false);
        }
    }, [categoriesList])

  return (
    <>
        <Menu>
            <Menu.Button className="flex items-center">Nuestras comidas <ChevronDownIcon className="w-5 h-5 mt-1 ml-2"/> </Menu.Button>
            <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items  className="absolute z-50 flex flex-col gap-5 p-5 mt-3 text-center transform -translate-x-1/2 w-72 bg-primary-light left-1/2 bg-gradient-to-t from-primary-dark to-primary">
                    {loading && <div className="absolute left-0"><Loader/></div>}
                    {categoriesList}
                </Menu.Items>
            </Transition>
        </Menu>
    </>
  )
}

export default PizzasMenu