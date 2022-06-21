import React from 'react';
import eye from "../../Assets/eye.jpg"
import "./Sales.css"

const Sales = () => {
    return (  <>
    
    <div className="containerSales">

<div className="leftSales">
We love all of our beautiful brands here at Hebe but  there is a special<br /> place in our heart for the Pakistan's brands. We have made it easy for you  <br /> to find a little  about each of these amazing brands. Head over to our <br /> Homegrown page where we give you a little insight into what makes each <br /> of these brands so special.
</div>

<div className="rightSales">
<img src={eye} alt="" width="270px" height="300px" />
</div>
    </div>
    
    </>);
}
 
export default Sales;