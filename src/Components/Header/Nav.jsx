import React from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import ContactUs from '../ContactUs';
import About from '../About';
import Home from '../Home';

function Nav(){
     return(<>
     <HashRouter>
     <div className="d-flex bg-primary justify-content-end">
  <div className="p-2 mr-auto h5"><Link to="/" className="text-warning text-decoration-none ">Home</Link></div>
  <div className="p-2 h5"><Link to="/ContactUs" className="text-warning text-decoration-none">Contact Us</Link></div>
  <div className="p-2 h5"><Link to="/About" className="text-warning text-decoration-none">About Us</Link></div>
</div>
<Routes>
    <Route path = '/' element = {<Home/>}></Route>
    <Route path = '/ContactUs' element = {<ContactUs/>}></Route>
    <Route path = '/About' element = {<About/>}></Route>
</Routes></HashRouter>
</>);
}
export default Nav;