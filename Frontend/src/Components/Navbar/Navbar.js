import { Search } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import {  ShoppingCartOutlined} from "@material-ui/icons";
import './Navbar.css'
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import logo from '../../Assets/Logo.png'

const Navbar = () => {

    const quantity=useSelector(state=>state.cart.quantity);
    
    return (
        <>
            <div className="containerNavbar">

                <div className="wrapperNavbar">


       


                    <div className="centerNavbar">
             
                <Link to="/">
                        <img src={logo} alt="" className="logo" width="120px" />
                
                </Link> 
                    </div>



                    <div className="rightNavbar">

                   <Link to='/register' style={{ color: "black", textDecoration: "none" }}>
                            <div className="menuItem" >
                                REGISTER
                            </div>
                        </Link>

                        <Link to='/login' style={{ color: "black", textAlign:"center" ,textDecoration: "none" }}>
                            <div className="menuItem" style={{ width: "160px" }}>
                                SIGN IN
                            </div>
                        </Link>


                        <Link to='/cart' style={{ color: "black", textAlign:"center", textDecoration: "none" }}>

                            <div className="menuItem">
                                <Badge badgeContent={quantity} color="primary">

                                <ShoppingCartOutlined />
                                </Badge>


                            </div>
                        </Link>


                    </div>


                </div>

            </div>


        </>
    );
}

export default Navbar;
