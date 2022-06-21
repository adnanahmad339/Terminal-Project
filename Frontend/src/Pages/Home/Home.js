import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Announcement from '../../Components/Announcement/Announcement';
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories';
// import Products from '../Components/Products/Products';
import Newsletter from '../../Components/NewLetter/Newsletter';
import Footer   from '../../Components/Footer/Footer';
import Products from '../../Components/Products/Products';
import Sales from '../../Components/Sales/Sales';



const Home = () => {
    return ( 

<>
<div>

<Navbar/>

</div>
<Slider/>
<Categories/>
<Products/>
<Sales/>
<div style={{marginTop:"-640px"}}>

<Newsletter/>
<Footer/>
</div>
</>

);
}
 
export default Home;