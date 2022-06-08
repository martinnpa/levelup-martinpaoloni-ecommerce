import React, { useState, Fragment, useContext, useEffect, useRef } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import PizzasMenu from './PizzasMenu';
import CartWidget from './CartWidget';
import logo from 'assets/coderpizza2.png';
import {Link} from 'react-router-dom';
import { FetchCategories } from 'api';
import Button from 'components/Common/Button';


const Index2 = () => {
  const [categories, setCategories] = useState([]);
  const navMenu = useRef(null);


  useEffect(() => {
    FetchCategories().then( (result) => {
      setCategories(result);
    }).catch( error => console.error(error) )
  }, [])

  const handleBurger = (event) =>{
    navMenu.current.classList.toggle("menu_mobile");
    event.currentTarget.classList.toggle("close");
  }

  return (
    <div className="relative z-50 bg-primary-dark">
      <style>{`
      .menu_mobile {
        display:flex !important;
        position:absolute;
        top:0;
        right:0;
        left:0;
        height: 70px;
        align-items:center;
        justify-content:center;
      }
      .close {
        // transform: rotate(40deg);
      }
      .xicon {display:none;}
      .close > .menuicon {
        display:none;
      }
      .close > .xicon { display: block}
      `}</style>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="grid items-center justify-between grid-cols-8 py-2">

          <div className="col-span-2 md:col-span-2">
              <Link to={"/"}>
              <img
                className="w-auto h-max-20"
                src={logo}
                alt="logo"
              />
              </Link>
          </div>

          <nav className="z-50 col-span-6 md:flex space-between bg-primary-dark">
            <ul className="z-50 md:flex justify-center gap-10 mx-auto list-none hidden" ref={navMenu}>
                <li>
                    <PizzasMenu categories={categories}/>
                </li>
            </ul>
            <div className="text-center w-52 ">
              <CartWidget/>
            </div>
            <Button 
            className="md:hidden items-center justify-center border border-secundary text-secundary hover:bg-secundary hover:text-primary self-center transition-all col-span-1 col-start-8 absolute z-50 right-5"
            onClick={handleBurger}
            style={{padding: "4px 8px"}}>
              <MenuIcon className="w-6 h-6 menuicon" aria-hidden="true" />
              <XIcon className="w-6 h-6 xicon" aria-hidden="true" />
            </Button>
          </nav>

          <div className="block col-span-4 -my-2 -mr-2 text-right md:hidden">

          </div>

        </div>
      </div>

    </div>
  )
}

export default Index2;