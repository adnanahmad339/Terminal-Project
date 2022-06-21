
import { categories } from "../../data";
import CategoryItems from "./CategoryItems";
import './Categories.css';



const Categories = () => {
  return (
    <div className="container" >
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;