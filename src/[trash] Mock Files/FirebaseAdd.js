import React, {useEffect} from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import products from 'api/productsToFirebase.json';

const FirebaseAdd = () => {


  // 1:51 firebase 2
  // const test = {
  //   price: 123,
  //   name: "prueba",
  //   stock: 1000.
  // }

  // Comentar restrict mode de index.js para que no se ejecute dos veces y cree duplicados
  useEffect(() => {

    const db = getFirestore();
    const productCollection = collection(db, "products");
    // addDoc(productCollection, test ).then(({id}) => console.log(id) );
    products.forEach(product => {
      addDoc(productCollection, product ).then(({id}) => console.log(id) );
    });
  }, [])

  return (
    <div>FirebaseAdd</div>
  )
}

export default FirebaseAdd