//@ts-check
import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Loader from 'components/Common/Loader';
import ItemDetail from './ItemDetail';
import { FetchProduct } from 'api';

const ItemDetailContainer = () => {

  let {itemId} = useParams();
  let itemIdNumber = parseInt(itemId);

  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getItem = (id) => {

    FetchProduct(id).then( (result) => {
      setProduct(result);
    })
    .catch( (error) => {
        setError(''+error);
    })
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    getItem(itemIdNumber);
  },[itemIdNumber])

  return (
    <>
    {loading && <Loader/>}
    {
    error ? <h2>Error, {error}</h2> :
      <ItemDetail product={product}/>
    }
    </>
  )
}

export default ItemDetailContainer