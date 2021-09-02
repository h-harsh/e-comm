// import { NavBar } from './components/NavBar/navBar'
import { React } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/privateRoute";
import {
  ProductDetails,
  Cart,
  WishList,
  Products,
  Home,
  Login,
  Signup,
  Address,
  Order,
  OrderHistory,
} from "./Pages/index";
import { NavBar } from "./components/Nav Bar/navBar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <NavBar />
      <main style={{ marginTop: "5rem", height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <PrivateRoute path="cart" element={<Cart />} />
          <PrivateRoute path="wishlist" element={<WishList />} />
          <PrivateRoute path="address" element={<Address />} />
          <PrivateRoute path="order" element={<Order />} />
          <PrivateRoute path="orderHistory" element={<OrderHistory />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Routes>
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
      </main>
    </div>
  );
}
