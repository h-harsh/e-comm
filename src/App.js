// import { NavBar } from './components/NavBar/navBar'
import { React } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './utils/privateRoute';
import {ProductDetails, Cart, WishList, Products, Home, Login, Signup} from './Pages/index'
import {NavBar} from './components/Nav Bar/navBar'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{marginTop:"5rem", height:"100vh"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <PrivateRoute path="cart" element={<Cart />} />
        <PrivateRoute path="wishlist" element={<WishList />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Routes>
      </main>
    </div>
  );
}
