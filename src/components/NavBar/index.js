import React, { useState, Fragment, useContext, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import PizzasMenu from './PizzasMenu';
import CartWidget from './CartWidget';
import logo from 'assets/coderpizza2.png';
import logoTeco from 'assets/tecopizza2.png';
import { Link } from 'react-router-dom';
import { FetchCategories } from 'api';
import { generalContext } from 'context';


const Index = () => {
  const [categories, setCategories] = useState([]);

  const { tecoMode } = useContext(generalContext);


  useEffect(() => {
    FetchCategories().then( (result) => {
      setCategories(result);
    }).catch( error => console.error(error) )
  }, [])


  return (
      <Popover>
          <div className="grid items-center justify-between grid-cols-8 py-2 px-4 mx-auto max-w-7xl sm:px-6">
            <div className="col-span-4 md:col-span-2">
                <Link to={"/"}>
                <img
                  className="w-auto h-max-20"
                  src={tecoMode ? logoTeco : logo}
                  alt="logo"
                />
                </Link>
            </div>

            <nav className="z-50 hidden md:col-span-6 md:flex">
              <ul className="z-50 flex justify-center gap-10 mx-auto list-none">
                  <li>
                      <PizzasMenu categories={categories}/>
                  </li>
              </ul>
              <div className="text-center w-52">
                <CartWidget/>
              </div>
            </nav>

            <div className="flex items-center justify-end col-span-4 -my-2 -mr-2 text-right md:hidden">
              <div className="pt-2 mr-10" style={{width:"42px", height: "42px"}}><CartWidget/></div>
              <Popover.Button className="text-secundary hover:bg-secundary hover:text-primary">
                <MenuIcon className="w-8 h-8" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              >
            <Popover.Panel as="nav" focus className="absolute inset-x-0 top-0 transition origin-top-right transform md:hidden">
              <div className="flex justify-center items-center px-5 pt-5 pb-6 bg-black/80 backdrop-blur">
                  <ul>
                      <li><PizzasMenu categories={categories}/></li>
                  </ul>
              </div>
              <Popover.Button className="absolute right-4 top-4 text-secundary hover:bg-secundary hover:text-primary">
                  <XIcon className="w-8 h-8" aria-hidden="true" />
              </Popover.Button>
            </Popover.Panel >
            </Transition>
          </div>
      </Popover>
  )
}

export default Index;