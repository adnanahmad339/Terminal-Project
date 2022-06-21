
import Home from './Pages/Home/Home';
import ProductLists from './Pages/ProductLists/ProductLists'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

import { Navigate } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import InvalidUrl from './Pages/InvalidUrl/InvalidUrl';
import { useSelector } from 'react-redux';
import Success from './Pages/Success/Success';


const Layout = () => {

    const user = useSelector((state) => state.user.currentUser)

    return (<>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductLists />} />

            <Route path="/product/:id" element={user ? <Product /> : <Navigate to="/login" />} />

            <Route path="/cart" element={user ? <ShoppingCart /> : <Navigate to="/login" />} />

            {/* <Route path="/product/:id" element={<Product />} /> */}
            {/* <Route path="/cart" element={<ShoppingCart />} /> */}
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />


            <Route path="*" element={<InvalidUrl />} />




        </Routes>


    </>);
}

export default Layout;