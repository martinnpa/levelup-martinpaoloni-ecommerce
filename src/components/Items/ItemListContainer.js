import React, { useEffect, useState } from 'react';
import Loader from 'components/Common/Loader';
import ItemList from './ItemList';
import Products from 'assets/products.json';

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const getProducts = () => {

    const fetchProducts = new Promise ((res, rej) => {
      setTimeout(()=>{
        res(Products)
      },3000)
    });

    fetchProducts.then(
      (result) => {
        setProductsList(result);
      }
    ).catch(
      (error) => {
        setError(''+error);
      }
    )
    .finally(() => setLoading(false));

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