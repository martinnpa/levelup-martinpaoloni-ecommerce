import React, {useContext} from 'react';
import Item from './Item';
import { generalContext } from 'context';

const ItemList = ({productsList}) => {
  const {handleInitial} = useContext(generalContext);

  const renderProducts = () => {
    return productsList.map((product) => {
      return <Item key={product.id} product={product} initial={()=>handleInitial(product.id)} />
    })
  }
  return (
    <div className="container py-6 content">
      <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {renderProducts()}
      </div>
    </div>
  )
}

export default ItemList;