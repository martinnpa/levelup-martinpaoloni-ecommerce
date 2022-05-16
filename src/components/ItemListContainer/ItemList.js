import React from 'react';
import ProductCard from 'components/ProductCard/ProductCard';

const ItemList = ({productsList}) => {
  const renderProducts = () => {
    return productsList.map((pizza) => {
      return <ProductCard key={pizza.id} pizza={pizza} initial={0} />
    })
  }
  return (
    <div className="container py-6 content">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {renderProducts()}
      </div>
    </div>
  )
}

export default ItemList