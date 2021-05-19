import { NavBar } from './components/NavBar/navBar'
import { React } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import {ProductDetails, Cart, WishList, Products, Home} from './Pages/index'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{marginTop:"5rem", height:"100vh"}} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Routes>
      </main>
    </div>
  );
}
