import React from 'react';
import {collection, doc, getDoc, getDocs, getFirestore, query, where, addDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

/* const FetchProducts1 = (categoryId = '') => {
  return new Promise ((res, rej) => {
    const db = getFirestore();

    let productCollection;
    if (!categoryId) {
      productCollection = collection(db, "products");
    } else {
      productCollection = query(collection(db, "products"), where("category", "==", categoryId));
    }

    getDocs(productCollection).then( (result) => {
      if (result) {
        let documents = result.docs;
        const arrayProducts = documents.map((document) => {
          return {...document.data(), id:document.id};
        })
        res(arrayProducts);
      } else {
        rej("Error al intentar cargar el producto de la base de datos");
      }
    } )
  });
} */

const FetchProducts = (categoryId = '') => {
    const db = getFirestore();
    let productCollection;
    if (!categoryId) {
      productCollection = collection(db, "products");
    } else {
      productCollection = query(collection(db, "products"), where("category", "==", categoryId));
    }

    return getDocs(productCollection);
}

const FetchProduct = (productId) => {
   return new Promise((res,rej) => {
    const db = getFirestore();
    const productDocument = doc(db, "products", productId);

    getDoc(productDocument).then( (document) => {
      if (document.data()) {
        let product = {...document.data(), id: document.id}
        res(product);
      } else {
        rej("Error al intentar cargar el producto / producto inexistente.");
      }
    })
  });
}

const FetchProduct2 = async (productId) => {
   const db = getFirestore();
   const productDocument = doc(db, "products", productId);
   return getDoc(productDocument);
}

const FetchOrder = (orderId) => {
  return new Promise((res,rej) => {
   const db = getFirestore();
   const orderDocument = doc(db, "orders", orderId);

   getDoc(orderDocument).then( (document) => {
     if (document.data()) {
       res(document.data());
     } else {
       rej("Error al intentar cargar la orden.");
     }
   }).catch(error => rej(error));
 });
}

const FetchCategories = () => {
  return new Promise ((res, rej) => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection).then( (result) => {
      if (result) {
        let documents = result.docs;
        const arrayCategories = documents.map((document) => {
          return {...document.data(), id:document.id}
        })
        res(arrayCategories);
      } else {
        rej("Error al intentar cargar el producto de la base de datos");
      }
    } ).catch(error => rej(error));
  });
}

const NewOrder = (order) => {
  return new Promise ((res, rej) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order ).then( ({id}) => {
      if (id) {
        res(id)
      } else {
        rej("Error al intentar guardar la orden");
      }
    }).catch(error => rej(error))
  });
}

const UpdateDocument = (collection, documentId, objectUpdated) => {
  return new Promise ((res, rej) => {
    const db = getFirestore();
    const productDocument = doc(db, collection, documentId);

    setDoc(productDocument, objectUpdated, { merge: true } ).then( (result) => {
      if (result) {
        console.log(result);
        res(result);
      } else {
        rej("Error al intentar actualizar");
      }
    });
  });
}

const UpdateStock = (documentId, qty) => {
  return new Promise ((res, rej) => {
    const db = getFirestore();
    const productDocument = doc(db, "products", documentId);

    return updateDoc(productDocument, {stock: increment(-qty)} )
    .then( (result) => {
      res(result);
    }).catch(error=> rej("Error al intentar actualizar stock"));
  });
}

const FetchCoupon = (couponId) => {
  return new Promise((res,rej) => {
   const db = getFirestore();
   const orderDocument = doc(db, "coupons", couponId);

   getDoc(orderDocument).then( (document) => {
     if (document.data()) {
       res(document.data());
     } else {
       rej("No existe el cupón");
     }
   })
 });
}


export {FetchProduct, FetchProduct2, FetchProducts, FetchCategories, FetchOrder, NewOrder, UpdateDocument, UpdateStock, FetchCoupon}