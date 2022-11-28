import React from "react";
import { Layout } from 'antd';
const { Header } = Layout;

const Navbar = () =>{
    return(
           <Header 
            className="site-layout-sub-header-background"
            style={{
                padding: 0,
            }}
            >
                <div style={{paddingLeft:40, color:"white"}}><h3>Test</h3></div>
           </Header>
    )
}


export default Navbar;