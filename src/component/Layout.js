import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

const Layout = (props) => 
(
    <div style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
        <Navbar></Navbar>

        <div className="container" style={{flex: "1"}}>
            {props.children}
        </div>

        <Footer></Footer>
    </div>
)

export default Layout;