import React, { useEffect, useState } from 'react';
import Loader from 'components/Common/Loader';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getItem = () => {
    const fetchProduct = new Promise((res,rej) => {
      setTimeout(()=>{
        res({
          "id": 4,
          "name": "4 Formaggis",
          "photo": "https://img.pizza/499/304",
          "gallery": ["https://img.pizza/499/304", "https://img.pizza/500/300", "https://img.pizza/900/500"],
          "stock": 27,
          "description": "Salsa, Muzarella, Gorgonzola, Parmesano, Fontina, Olivas verdes.",
          "price": 1050
        })
      }, 3000)
    });

    fetchProduct.
    then( (result) => {
      setProduct(result)
    })
    .catch( (error) => {
        setError(''+error);
    })
    .finally(() => setLoading(false));

  }

  useEffect(()=>{
    getItem();
  },[])



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