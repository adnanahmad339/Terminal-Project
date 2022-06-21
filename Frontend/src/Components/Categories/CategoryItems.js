import './CategoryItems.css'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
  return (
    <div className='maindiv' >
    
    <Link to={`/products/${item.cat}`}>
      <img className='Image' src={item.img} />
      <div className='Info'>
        <div className='Title'>{item.title}</div>
        <button className="Button">SHOP NOW</button>
        </div>
      </Link>
    


    </div>
  );
};

export default CategoryItem;