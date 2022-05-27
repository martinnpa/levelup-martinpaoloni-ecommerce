import React, { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";
import CartList from "./CartList";
import { generalContext } from "context";

const Cart = () => {
  const { cart, subTotal, removeFromCart } = useContext(generalContext);

  return (
    <Popover className="relative inline-block">
      <Popover.Button>
        <ShoppingCartIcon className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute flex w-4 h-4 text-xs text-center rounded-full place-content-center -top-2 -right-3 text-primary bg-secundary">
            {cart.length}
          </span>
        )}
      </Popover.Button>
      <CartList productsCart={cart} subTotal={subTotal} removeFromCart={removeFromCart} />
    </Popover>
  );
};

export default Cart;
