import React, { useEffect, useState } from 'react';
import Loader from 'components/Common/Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const getProducts = () => {

    const fetchProducts = new Promise ((res, rej) => {
      setTimeout(()=>{
        res([
          {
            id: 1,
            name: "Muzarella",
            photo: 'https://img.pizza/500/300',
            stock: 20,
            description: 'Salsa, Muzarella, Olivas verdes.',
            price: 700
          },
          {
            id: 2,
            name: "Napolitana",
            photo: 'https://img.pizza/500/301',
            stock: 5,
            description: 'Salsa, Muzarella, Tomate, Olivas verdes.',
            price: 850
          },
          {
            id: 3,
            name: "Fugazzetta",
            photo: 'https://img.pizza/499/301',
            stock: 55,
            description: 'Salsa, Muzarella, Cebolla, Mucha cebolla.',
            price: 850
          },
          {
            id: 4,
            name: "4 Formaggis",
            photo: 'https://img.pizza/499/304',
            stock: 27,
            description: 'Salsa, Muzarella, Gorgonzola, Parmesano, Fontina, Olivas verdes.',
            price: 1050
          },
        ])
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