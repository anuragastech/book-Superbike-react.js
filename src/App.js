import React, { Component } from 'react';
import Navbar from "./Components/Navbar/navebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/pages/shop";
// import ShopCategory from './Components/pages/shopCategory';
import Product from './Components/pages/product';
import Cart from './Components/pages/cart';
import LoginSignUp from './Components/pages/LoginSignUp';
import Slider from "./Components/imageSlider/slider";
import Collection from "./Components/imagecollection/collection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            {/* <Route path='/contact' element={<ShopCategory />} /> */}
            <Route path='/product' element={<Product />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignUp />} />
          </Routes>
        </BrowserRouter>
        <Slider />
        <Collection />
      </div>
    );
  }
}

export default App;
