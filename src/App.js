import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/Navbar/navebar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import shop from "./Components/pages/shop"
// import ShopCAtegory from './Components/pages/shopCAtegory';
import Product from './Components/pages/product';
import Cart from './Components/pages/cart';
import LoginSignUp from './Components/pages/LoginSignUp';
import Slider from "./Components/imageSlider/slider"
import Item from './Components/item/item';

class App extends Component {
  render() {
    return (
      <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<shop/>}/>
    {/* <Route path='/contact' element={<ShopCAtegory/>}/> */}
    <Route path='/product' element={<Product/>}/>
    <Route path=':productId' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignUp/>}/>



<Route/>


       </Routes>

   
   </BrowserRouter>
   <Slider/>
   <Item/>
      </div>
    );
  }
}

export default App;