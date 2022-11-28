import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../layouts";
// import Create from "../product/create";
import Product from "../product";
import Categeory from "../category";
const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/category" element={<Categeory/>} />
                    <Route path="/product" element={<Product/>} />
                </Route>    
            </Routes>
        </div>
    )
}

export default Router