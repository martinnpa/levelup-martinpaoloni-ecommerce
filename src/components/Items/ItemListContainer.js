import React, { useEffect, useState } from 'react';
import Loader from 'components/Common/Loader';
import ItemList from './ItemList';
import Pizzas from 'assets/products.json';
import { Buffer } from 'buffer';


const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const getProducts = () => {

    const fetchProducts = new Promise ((res, rej) => {
      setTimeout(()=>{
        res(Pizzas)
      },3000)
    });

    // const auth = { "Authorization" : 'Basic'+btoa("paolonimartin+sheetlabs@gmail.com:t_435076c6af12c788c973adc3ff5a850d") };
    // const auth2 = { "Authorization" : 'Basic'+Buffer.from('paolonimartin+sheetlabs@gmail.com:t_435076c6af12c788c973adc3ff5a850d').toString('base64')};
    fetch('https://sheetlabs.com/MEP/pizzas').then((res) => res.json())
    .then((result) => {
      console.log(result);
      setProductsList(result);
    }).catch((error) => {
      setError(''+error);
    }).finally(()=>{
      setLoading(false);
    })

    /* fetchProducts.then(
      (result) => {
        setProductsList(result);
      }
    ).catch(
      (error) => {
        setError(''+error);
      }
    )
    .finally(() => setLoading(false)); */

  }

  useEffect(()=>{
    getProducts();
  }, [])

  if (error) {
    return <h1>Ha ocurrido un error, intente nuevamente más tarde o pongase en contacto a itsnotabugitsafeature@coderpizza.com</h1>
  }
  return (
    <>
      {loading ? <Loader/> : <ItemList productsList={productsList}/>}
    </>
  )
}

export default ItemListContainer