import { React, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
// import { NavBar } from "./components/Nav Bar/navBar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavBar, MobileNavbar } from "./components";

export default function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const {pathname} = useLocation()

  function handleMobileMenuActive() {
    setMobileMenuActive(!mobileMenuActive);
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    scrollToTop()
  }, [pathname])
  return (
    <div>
      {/* <NavBar /> */}
      <NavBar
        mobileMenuActive={mobileMenuActive}
        handleMobileMenuActive={handleMobileMenuActive}
      />
      <MobileNavbar
        mobileMenuActive={mobileMenuActive}
        handleMobileMenuActive={handleMobileMenuActive}
      />
      {/* <main style={{ marginTop: "5rem", height: "100vh" }}> */}
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
      {/* </main> */}
    </div>
  );
}
