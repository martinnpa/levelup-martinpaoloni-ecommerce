import { Fragment } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import Dropdown from './Dropdown';
import Cart from './Cart';
import logo from 'assets/coderpizza2.png';

const index = () => {
    
const categories = ['Muzarella','Napolitana', 'Fugazzeta', '4 Quesos', 'Especial']

  return (
    <Popover className="relative bg-primary-dark">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="grid items-center justify-between grid-cols-8 py-2">
          <div className="col-span-4 md:col-span-2">
              <img
                className="w-auto h-max-20"
                src={logo}
                alt="logo"
              />
          </div>
          <nav className="hidden md:col-span-6 md:flex">
            <ul className="flex justify-center gap-10 mx-auto list-none">
                <li>
                    <Dropdown categories={categories}/>
                </li>
                <li><a href="#">Contacto</a></li>
                
            </ul>
            <div className="my-auto ml-auto">
              <Cart items={4}/>
            </div>
          </nav>
          <div className="block col-span-4 -my-2 -mr-2 text-right md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100">
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Mobile */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            >
          <Popover.Panel as="nav" focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
            <div className="px-5 pt-5 pb-6 rounded-lg shadow-lg bg-primary-light ring-1 ring-black ring-opacity-5 ">
                <div className="flex justify-between">
                    <ul>
                        <li><Dropdown categories={categories}/></li>
                    </ul>
                    <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100">
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </div>
            </div>
          </Popover.Panel >
          </Transition>
        </div>
      </div>

    </Popover>
  )
}

export default index;