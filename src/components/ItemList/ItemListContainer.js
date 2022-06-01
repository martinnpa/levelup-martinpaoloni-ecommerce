import React, { useEffect, useState } from 'react';
import Loader from 'components/Common/Loader';
import ItemList from './ItemList';
import { FetchProducts } from 'api';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let {categoryId} = useParams();

  const getProducts = (categoryId) => {
    setLoading(true);
    FetchProducts(categoryId).then(
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
    getProducts(categoryId);
  }, [categoryId])

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