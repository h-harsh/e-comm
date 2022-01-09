import React from "react";
import {Header} from '../components/Header-home/header'
import {CategoryDisplay} from '../components/Category-Display/category-display'
import {Footer} from '../components/Footer/footer'
export const Home = () => {
  return (
    <>
    <Header />
    <CategoryDisplay />
    <Footer/>
    </>
  );
};
