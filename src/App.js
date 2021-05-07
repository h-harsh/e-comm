import { NavBar } from './components/navBar'
import { React } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import {ProductDetails, Cart, WishList, Products} from './Pages/index'

export default function App() {
  return (
    <div classNameName="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
