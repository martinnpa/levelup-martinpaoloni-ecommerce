import React, {useEffect} from 'react';
import { getFirestore, doc, setDoc } from "firebase/firestore";

const FirebaseUpdate = () => {


  // 1:51 firebase 2
  const test = {
    stock: 10
  }

  // Comentar restrict mode de index.js para que no se ejecute dos veces y cree duplicados
  useEffect(() => {

    const db = getFirestore();
    const productDocument = doc(db, "products", "vRbzXUGH2MHqIHpBeX1d");
    setDoc(productDocument, {stock: 10}, { merge: true } ).then( (result) => {
      console.log("actualizo?");
      console.log(result);
    });
    // products.forEach(product => {
    //   addDoc(productCollection, product ).then(({id}) => console.log(id) );
    // });
  }, [])

  return (
    <div>FirebaseUpdate</div>
  )
}

export default FirebaseUpdate;