import React from "react";
import './App.css';
// import Navbar from './components/layouts/Navbar';
// import Create from './components/product/create';
// import Main from './components/layouts';

import 'antd/dist/reset.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./components/routers";
function App() {
  return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  );
}

export default App;
