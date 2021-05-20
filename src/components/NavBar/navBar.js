import { Link } from "react-router-dom";
import { useCart } from "../Cart/cartContext";
import { useWish } from "../Wishlist/wishContext";
import { SearchBar } from "../Search bar/searchBar";
import "./navBAr.style.css";
import { useState } from "react";

export const NavBar = () => {
  const { state } = useCart();
  const { wishState } = useWish();
  const [height, setHeight] = useState("");

  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      setHeight("scrolled");
    } else {
      setHeight("");
    }
  };

  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <nav className={height} className="topnav" id="myTopnav">
      <Link to="/">
        <p className="nav-itm nav-itm-text active ">Home</p>
      </Link>
      <Link to="/products">
      <p className="nav-itm nav-itm-text ">Products</p>
      </Link>

      <div className="search-bx">
        {/* <input className="search-thing" type="text" placeholder="search....." /> */}
        <SearchBar class="search-thing" />
      </div>

      <Link className="icon-box" to="/wishlist">
      <p className="nav-itm right ">
        <span>WishList</span> <i className="fas fa-heart"></i>
      </p>
      </Link>
      <p className="icon-bdg" >{wishState.length}</p>

      <Link className="icon-box" to="/cart">
      <p className="nav-itm right ">
        <span >Cart</span> <i className="fas  fa-shopping-cart"></i>
      </p>
      </Link>
      <p className="icon-bdg icon-bdg2" >{state.length}</p>

      <p className="nav-itm control right" onClick={myFunction}>

        <i className="fa fa-bars"></i>
      </p>
    </nav>
  );
};
