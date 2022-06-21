import React, { useEffect, useState } from 'react';
import './ShoppingCart.css'
import { useNavigate } from "react-router-dom";
// import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import StripeCheckout from 'react-stripe-checkout'
import { useSelector } from 'react-redux';
import logo from "../../Assets/Logo.png"
import {userRequest} from '../../Service/api'
const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null);
  const Navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  }

useEffect(() => {
  const makeRequest = async () => {
    try {
      const res = await userRequest.post("/checkout/payment", {
        tokenId: stripeToken.id,
        amount: 500,
      });
    Navigate.push("/success", {
        stripeData: res.data,
        products: cart, });
    } catch {}
  };
  stripeToken && makeRequest();
}, [stripeToken, cart.total,Navigate]);


  return (
    <div className="containerCart" >
      <Announcement />
      <Navbar />


      <div className="wrapperCart">
        <div className="titleCart">YOUR BAG</div>
        <div className="topCart">
          <div className="topButtonCart">CONTINUE SHOPPING</div>
          <div className="tppTextsCart">
            <div className='topTextCart'>Shopping Bag({cart.quantity})</div>
            <div className='topTextCart'>Your Wishlist (0)</div>
          </div>
          <div className='topButtonCart' type="filled">CHECKOUT NOW</div>
        </div>

        <div className="bottomCart">
          <div className='infoCart'>
            {cart.products.map((product) => (
              <div className='productCart'>
                <div className='productDetailCart'>
                  < img src={product.img} className='imageCart' />
                  <div className='detailsCart'>
                    <div className='productNameCart'>
                      <b>Product:</b>{product.title}
                    </div>
                    <div className='productIDCart'>
                      <b>ID:</b> {product._id}
                    </div>
                    <div className='productColorCart' color={product.color} />
                    <div className="productSizeCrat">
                      <b>Size:</b> {product.size}
                    </div>
                  </div>
                </div>
                <div className="priceDetailCart">
                  <div className='productAmountContainerCart'>
                    <div className='addCart' Add />
                    <div className='productAmountCart'>{product.quantity}</div>
                    <div className='removeCart' Remove />
                  </div>
                  <div className='productPriceCart'>${product.price * product.quantity}</div>
                </div>
              </div>




            ))}
            <hr className='hrCart' />      </div>



          <div className='summaryCart'>
                <div className='summaryTitleCart'>ORDER SUMMARY</div>
                      <div className='summaryItemCart'>
                          <div className='summaryItemTextCart'>Subtotal</div>
                          <div className='summaryItemPriceCart'>${cart.total}</div>
                      </div>
                            <div className='summaryItemCart'>
                                <div className='summaryItemTextCart'>Estimated Shipping</div>
                                <div className='summaryItemPriceCart'>$ 5.90</div>
                            </div>
                                    <div className='summaryItemCart'>
                                        <div className='summaryItemTextCart'>Shipping Discount</div>
                                        <div className='summaryItemPriceCart'>$ -5.90</div>
                                      </div>
                                      
                                            <div className='summaryItemCart'>
                                                <div className='summaryItemTextCart' >Total</div>
                                                <div className='summaryItemPriceCart'>${cart.total}</div>
                                                 </div>
        

            <StripeCheckout
              name='prestashop'
              image={logo}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={100}
              token={onToken}
              stripeKey={KEY}
            >
  <button className='buttonCart'>CHECKOUT NOW</button>
            </StripeCheckout>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;