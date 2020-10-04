import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

const Layout = (props) => 
(
    <div>
        <Navbar></Navbar>

        <div className="container">
            {props.children}
        </div>

        <Footer></Footer>

    </div>
)

export default Layout;