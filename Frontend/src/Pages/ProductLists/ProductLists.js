import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/NewLetter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import './ProductLists.css'
import { useLocation } from "react-router";
import { useState } from "react";
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div style={{backgroundColor:"#fdf9f5"}}>
    
    <Navbar />
<div className="containerProductLists" style={{backgroundColor:"#fdf9f5", marginTop:"10px"}} >
  

  
      <div className="titleProductLists" style={{ marginTop: "60px" }}>{cat}</div>
      <div className="filterContainerProductLists">
        <div className="filterProductLists">
          <div className="filterTextProductLists">Filter Products:</div>
          <select className="selectProductLists" onChange={handleFilters} name="color" >
            <option disabled >
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Brown</option>
            
            <option>Golden</option>

          </select>
          <select className="selectProductLists" onChange={handleFilters} name="size">
            <option disabled >
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filterProductLists">
          <div className="filterTextProductLists">Sort Products:</div>
          <select className="selectProductLists" onChange={(e) => setSort(e.target.value)}>
            <option value="newset">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      

      <div >

     
      </div>
      <div  style={{marginTop:"220px"}}>
      <Products cat={cat} filters={filters} sort={sort}  />
        <Newsletter />
        <Footer />

      </div>
    </div>
    </div>
  );
};

export default ProductList;