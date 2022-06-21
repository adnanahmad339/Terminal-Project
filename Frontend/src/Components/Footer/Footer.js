import React, { Component } from 'react';
import appStore from '../../Assets/appStore.png'
import playStore from '../../Assets/playStore.png'

import './Footer.css'


const Footer=() => {
return(

    <footer id='footer'>
<div className='leftFooter'>
<h4>Download Our App</h4>
<p>Download App for Android and IOS mobile phone</p>
<img src={appStore} alt="playstore"/>
<img src={playStore} alt="appstore"/>
</div>

<div className='midFooter'>

<h1>Presta Shop</h1>
<p>High quality is our first priority</p>

<p>Copyrights 2021 &copy; Adnan Ahmad</p>

</div>


<div className='rightFooter'> 
<h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
        <a href="">Facebook</a>
</div>



    </footer>

)



};


export default Footer;