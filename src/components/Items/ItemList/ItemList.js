import React from 'react';
import Item from './Item';

const ItemList = ({productsList}) => {
  const renderProducts = () => {
    return productsList.map((product) => {
      return <Item key={product.id} product={product} initial={0} />
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