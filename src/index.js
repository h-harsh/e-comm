import { StrictMode } from "react";
import React from 'react';
import ReactDOM from "react-dom";
import { CartProvider } from "./components/Cart/cartContext";
import App from "./App";
import { WishProvider } from "./components/Wishlist/wishContext";
import { FilterProvider } from "./components/Filters/filterContext";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <WishProvider>
          <Router>
            <App />
          </Router>
        </WishProvider>
      </CartProvider>
    </FilterProvider>
  </StrictMode>,
  rootElement
);

reportWebVitals();