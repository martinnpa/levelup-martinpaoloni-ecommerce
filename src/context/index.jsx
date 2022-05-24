import React, {useState, createContext, useEffect} from 'react';

export const generalContext = createContext();

const Context = ({children}) => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState();

  const addToCart = (item) => {
    /* Consultamos si el item ya se encuentra en el carrito para no agregar elementos repetidos y asi poder sobreescribir */
    if (cart.length > 0) {
      let newCart = [...cart];
      const index = newCart.map(product => product.id).indexOf(item.id);
      if (index >= 0 ) {
        newCart[index] = item;
      } else {
        newCart.push(item);
      }
      setCart([...newCart]);
      localStorage.cart = JSON.stringify([...newCart]);
    } else {
      setCart([...cart, item]);
      localStorage.cart = JSON.stringify([...cart, item]);
    }
  }

  useEffect(()=>{
    if (localStorage.cart) {
      let localCart = JSON.parse(localStorage.cart);
      setCart(localCart);
    }
  },[])

  useEffect(()=>{
    if (cart) {
      const operation = cart.reduce((total, item) => (item.qty*item.price) + total, 0);
      setSubTotal(operation);
    }
  },[cart])
  return (
    <generalContext.Provider value={{cart, addToCart, subTotal}}>
      {children}
    </generalContext.Provider>
  )
}

export default Context