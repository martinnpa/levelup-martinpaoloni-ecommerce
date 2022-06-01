//@ts-check
import React, {useEffect} from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
// import { doc, getDoc, getFirestore } from 'firebase/firestore';

const FirebaseDoc = () => {
  const db = getFirestore();
  const productsDocument = doc(db, "products", "RramWll5lFDJY9Zt58xG");
  getDoc(productsDocument).then((result) => console.log(result));

  useEffect(() => {
    getDoc(productsDocument)
    .then((result) => console.log( result.data()) )
  }, [])


  return (
    <div className="container py-5 text-center">
      Firebase
    </div>
  )
}

export default FirebaseDoc