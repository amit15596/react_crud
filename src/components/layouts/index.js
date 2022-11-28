import React from "react";
import { Layout } from 'antd';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Contentbar from "./Content";
import Footerbar from "./Footer";

const Main = () =>{
    return(
        <>
            <div>
                <Layout>
                <Navbar/>
                    <Layout>
                        <Sidebar/>
                        <Contentbar/> 
                    </Layout>
                    <Layout>
                        <Footerbar/>
                    </Layout>
                </Layout> 
            </div> 
        </>
       
    )
   
}

export default Main;

