import { NavBar } from './components/navBar'
import { React } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import {ProductDetails, Cart, WishList, Products, Home} from './Pages/index'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
