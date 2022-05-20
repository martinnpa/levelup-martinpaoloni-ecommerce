import React from 'react';
import Products from 'assets/products.json';

const FetchProducts = () => {
  return new Promise ((res, rej) => {
    setTimeout(()=>{
      res(Products)
    },3000)
  });
}

const FetchProduct = (id) => {
  return new Promise((res,rej) => {
    setTimeout(()=>{
      const productFiltered = Products.find(product => product.id === id);
      res(productFiltered)
    }, 3000)
  });
}

export {FetchProducts, FetchProduct }