import ItemCount from 'components/Common/ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import styles from './Item.module.css';
import empanadaIcon from 'assets/empanada-color.png';
import pizzaIcon from 'assets/pizza-color.png';
import pizzetaIcon from 'assets/pizzeta-color.png';
import dessertIcon from 'assets/postre-color.png';



const Item = ({product, initial}) => {

  const {id, name, photo, description, stock, price, category} = product;

  const icons = {
    Empanadas: empanadaIcon,
    Pizzas: pizzaIcon,
    Postres: dessertIcon,
    Pizzetas: pizzetaIcon
  }

  return (
    <div className="relative bg-primary-light hover:shadow-primary-dark hover:shadow-lg hover:text-secundary">
      {category &&
      <span className={styles.ribbon}>
        <span></span>
        ${price}
      </span>
      }
      <Link to={`/item/${id}`} key={id} className="absolute inset-0"></Link>
      <img className="object-cover w-full h-40" src={photo} alt={name}/>
      <div className="px-2 pt-1 pb-2">
        <h2 className="relative pl-8 mb-2 font-bold"><img src={icons[category]} alt={category} className="absolute left-0 object-contain h-6"/> {name}</h2>
        <p className="overflow-hidden text-sm text-ellipsis h-11 line-clamp-2">{description}</p>
        <hr className="mt-2 mb-4 border-t border-secundary opacity-10"/>
        <ItemCount product={product} initial={initial(id)} />
      </div>
    </div>
  )
}

export default Item