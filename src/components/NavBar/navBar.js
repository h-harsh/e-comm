import { Link } from "react-router-dom";
import { useCart } from "../Cart/cartContext";
import { useWish } from "../Wishlist/wishContext";
import { SearchBar } from "../Search bar/searchBar";
import "./navBAr.style.css";
import { useState } from "react";

export const NavBar = () => {
  const { state } = useCart();
  const { wishState } = useWish();
  const [height, setHeight] = useState('')

  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      setHeight('scrolled')
    } else {
      setHeight('')
    }
  };

  return (
    <nav className={height}  >
      <div class="nav-sub-sec nleft">
        <p class="nav-itm nav-icons">
          <i class="fab fa-drupal"></i>
        </p>
        <Link class="nav-itm nav-itm-text" to="/">
          Home{" "}
        </Link>
        <Link class="nav-itm nav-itm-text" to="/products">
          Products{" "}
        </Link>
      </div>
      <div class="nav-sub-sec">
        <SearchBar class="search-thing" />
        {/* <button class="btn btn-link1">X</button> */}
      </div>
      <div class="nav-sub-sec nright">
        <div className="icon-bdg-cont" >
        <Link to="/cart" class="nav-itm">
          <i class="fas fa-shopping-cart"></i>
        </Link>
        <p className="icon-bdg" >{state.length}</p>
        </div>
        <div className="icon-bdg-cont" >
        <Link to="/wishlist" class="nav-itm">
          <i class="fas fa-heart"></i>
        </Link>
        <p className="icon-bdg" >{wishState.length}</p>
        </div>
      </div>
    </nav>
  );
};
