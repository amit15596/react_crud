import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../layouts';
import Product from '../product';
import Categeory from '../category';
import Login from '../Login/Login';
import Register from '../Login/Register';
import ForgotPassword from '../Login/ForgotPassword';
import ProtectedRouter from '../Login/ProtectedRoute';
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/forgot'element={<ForgotPassword/>}/>
        
        <Route path="/" element={<ProtectedRouter Component={Main}/>}>
        <Route path="/category" element={<ProtectedRouter Component={Categeory}/>} />
        <Route path="/product" element={<ProtectedRouter Component={Product}/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
