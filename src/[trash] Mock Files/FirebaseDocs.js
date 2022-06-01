import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const FirebaseDocs = () => {
  const [products, setProducts] = useState([]);


  const db = getFirestore();
  const productsCollection = collection(db, "products");

  useEffect(() => {
    getDocs(productsCollection)
    .then( (documents) => {
      let docs = documents.docs;
      // console.log( docs);
      docs.map((doc)=> {
        console.log(doc.id)
        // console.log(doc.data());
      })
    })
  }, [])

  return (
    <div></div>
  )
}

export default FirebaseDocs