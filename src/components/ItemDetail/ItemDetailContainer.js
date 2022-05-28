//@ts-check
import React, { useEffect, useState, useContext } from 'react';
import {useParams } from 'react-router-dom';
import Loader from 'components/Common/Loader';
import ItemDetail from './ItemDetail';
import { FetchProduct } from 'api';
import { generalContext } from 'context';

const ItemDetailContainer = () => {

  const {itemId} = useParams();
  const itemIdNumber = parseInt(itemId);

  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const {handleInitial} = useContext(generalContext);

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
      <ItemDetail product={product} initial={handleInitial(product.id)}/>
    }
    </>
  )
}

export default ItemDetailContainer