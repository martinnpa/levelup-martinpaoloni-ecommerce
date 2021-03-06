import React, {useState, createContext, useEffect} from 'react';

export const generalContext = createContext();

const Context = ({children}) => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState();
  const [tecoMode, setTecoMode] = useState(false);

  const handleInitial = (id) => {
    let index = cart.map(product => product.id).indexOf(id);
    return (index !== -1) ? cart[index].qty : 0;
  }

  const addToCart = (item) => {
    /* si el item ya se encuentra en el carrito para no agregar elementos repetidos y asi poder sobreescribir */
    if (cart.length > 0) {
      let newCart = [...cart];
      const index = newCart.map(product => product.id).indexOf(item.id);
      if (index >= 0 ) {
        newCart[index] = item;
      } else {
        newCart.push(item);
      }
      setCart([...newCart]);
    } else {
      setCart([...cart, item]);
    }
  }

  const removeFromCart = (productId) => {
    let auxCart = [...cart];
    let productRemove = auxCart.findIndex( (product) => productId === product.id);
    auxCart.splice(productRemove,1);
    setCart(auxCart);
    localStorage.cart = JSON.stringify(auxCart);
  }

  const resetCart = () => {
    setCart([]);
    localStorage.cart = '';
  }

  const isInCart = (productId) => {
    let index = cart.findIndex(element => element.id === productId)
    return (index !== -1) ? true : false;
  }

  const handleTecoMode = () => {
    setTecoMode(!tecoMode);
  }

  useEffect(()=>{
    if (localStorage.cart) {
      let localCart = JSON.parse(localStorage.cart);
      setCart(localCart);
    }
  },[])

  useEffect(()=>{
    if (cart.length > 0) {
      const operation = cart.reduce((total, item) => (item.qty*item.price) + total, 0);
      setSubTotal(operation);
      localStorage.cart = JSON.stringify([...cart]);
    }
  },[cart])

  return (
    <generalContext.Provider value={{ cart, subTotal, addToCart, removeFromCart, handleInitial, resetCart, isInCart, tecoMode, handleTecoMode}}>
      {children}
    </generalContext.Provider>
  )
}

export default Context