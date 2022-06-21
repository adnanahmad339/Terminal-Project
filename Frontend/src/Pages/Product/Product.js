import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/NewLetter/Newsletter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../Service/api";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch} from "react-redux";
import './Product.css'

const FilterSizeOption = styled.option``;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;




const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (

    <div >
    <div style={{backgroundColor:"#fdf9f5",height:"200vh"}} >
  
      < Navbar />
      <div className='wrapperProductPage'>
      <div className="imageContainerProductPage">
          <img  src={product.img} alt="" className='imageProductPage'/>
        </div>
       
        < div className="infoContainerProductPage">
        <div className='titleProductPage'>{product.title}</div>
          <div className="descProductPage">{product.desc}</div>
          <div className="priceProductPage">$ {product.price}</div>
        
          <div className="filterContainerProductPage">
          <div className="filterProductPage">
          <div className="filtertTitleProductPage">Color</div>
              {product.color?.map((c) => (
                <div className="filterColorProductPage" color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className="filterProductPage">
            <div className="filterTitleProductPage">Size</div>
            < FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </div>
          </div>
          <div className="addContainerProductPage">
          <div className="amountContainerProductPage">
          <Remove onClick={() => handleQuantity("dec")} />
          <div className="amountProductPage">{quantity}</div>
          <Add className="addProductPage" onClick={() => handleQuantity("inc")} />
            </div>
       
                     <button className='buttonProductPage' style={{ width: "300px", marginRight:"-30px", textAlign: "center", fontSize: "10px" }} onClick={handleClick} >ADD TO CART</button>
       
       
       
          </div>
     
        </div>
      </div>    
    
      </div >
      
     <div style={{marginTop:"-700px"}}>
     <Newsletter/>
          <Footer />
     </div>
     
      </div >
  );
};

export default Product;



