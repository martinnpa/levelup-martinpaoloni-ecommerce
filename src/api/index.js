import React from 'react';
import Products from './products.json';

const FetchProducts = (id = '') => {
  return new Promise ((res, rej) => {
    setTimeout(()=>{
      if (!id) {
        res(Products)
      } else {
        const product = Products.filter(product => product.category === id);
        res(product);
      }
    },3000)
  });
}

const FetchProduct = (id) => {
  return new Promise((res,rej) => {
    setTimeout(()=>{
      const product = Products.find(product => product.id === id);
      res(product)
    }, 3000)
  });
}

/* const FetchProductsByCategory = (id) => {
  return new Promise((res,rej) => {
    setTimeout(()=>{
      const productsFiltered = Products.filter(product => product.category === id);
      res(productsFiltered)
    }, 3000)
  });
} */


const FetchCategories = () => {
  return new Promise ((res, rej) => {
    setTimeout(()=>{
      let categories = [...new Set(Products.map(product => product.category))];
      res(categories)
    },3000)
  });
}

export {FetchProducts, FetchProduct, FetchCategories }