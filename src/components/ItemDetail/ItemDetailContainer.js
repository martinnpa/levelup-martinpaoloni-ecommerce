//@ts-check
import React, { useEffect, useState, useContext } from 'react';
import {useParams } from 'react-router-dom';
import Loader from 'components/Common/Loader';
import ItemDetail from './ItemDetail';
import { FetchProduct } from 'api';
// import { FetchProduct2 } from 'api';
import { generalContext } from 'context';

const ItemDetailContainer = () => {

  const {itemId} = useParams();
  // const itemIdNumber = parseInt(itemId);

  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const {handleInitial} = useContext(generalContext);

  const getItem = (id) => {
    FetchProduct(id).then( (result) => {
      setProduct(result);
    })
    .catch( (error) => {
        console.error(error);
        setError(''+error);
    })
    .finally(() => setLoading(false));
  }

  /* const getItem2 = (id) => {
    const fetch = async () => {
      return await FetchProduct2(id);
    }
    fetch().then(result => {
      if (result)
      setProduct({...result.data(), id:result.id});
    })
    .catch( error => {
      console.error(error);
      setError(''+error);
    })
    .finally(() => setLoading(false));
  } */

  useEffect(()=>{
    getItem(itemId);
    // getItem2(itemId);
  },[itemId])

  return (
    <>
    {loading && <Loader/>}
    {
    error ? <h2 className="text-center py-10 px-10 text-alert">Error, {error}</h2> :
      <ItemDetail product={product} initial={handleInitial(product.id)}/>
    }
    </>
  )
}

export default ItemDetailContainer