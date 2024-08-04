import React, { Component } from 'react';
import Navbar from "./Components/Navbar/navebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ShopCategory from './Components/pages/shopCategory';
// import Product from './Components/pages/product';
// import Cart from './Components/pages/cart';
import LoginSignUp from './Components/pages/LoginSignUp';
// import Slider from "./Components/imageSlider/slider";
// import Collection from "./Components/imagecollection/collection";
import Shop from "./Components/pages/shop";
import Contact from './Components/pages/contact';

import Homes from "./Components/pages/Home"
import Footer from './Components/Footer/footer';
import SignUp from './Components/LoginSignup/signup';
import './tailwind.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          
          <Routes>
            <Route path='/' element={<Homes />} />

            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<LoginSignUp />} /> 
            <Route path='/signup' element={<SignUp/>} /> 

            {/* <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignUp />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer/>

      </div>
    );
  }
}

export default App;
