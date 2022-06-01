import React from 'react';
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore';

const FetchProducts = (categoryId = '') => {
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
          return {...document.data(), id:document.id}
        })
        res(arrayProducts);
      } else {
        rej("Error al intentar cargar el producto de la base de datos");
      }
    } )
  });
}

const FetchProduct = (productId) => {
   return new Promise((res,rej) => {
    const db = getFirestore();
    const productDocument = doc(db, "products", productId);

    getDoc(productDocument).then( (document) => {
      if (document) {
        let product = {...document.data(), id: document.id}
        res(product);
      } else {
        rej("Error intentar cargar los productos.");
      }
    })
  });
}

const FetchProduct2 = async (productId) => {
   const db = getFirestore();
   const productDocument = doc(db, "products", productId);
   return getDoc(productDocument)
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
    } )
  });
}


export {FetchProduct, FetchProduct2, FetchProducts, FetchCategories}