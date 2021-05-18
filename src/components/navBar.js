import { Link } from "react-router-dom";
import { useCart } from "./Cart/cartContext";
import { useWish } from "./Wishlist/wishContext";
import { SearchBar } from "./Search bar/searchBar";
// import '../App.css'

export const NavBar = () => {
  const { state } = useCart();
  const { wishState } = useWish();
  return (
    <nav>
      <div class="nav-sub-sec nleft">
        <p class="nav-itm nav-icons">
          <i class="fab fa-drupal"></i>
        </p>
        <Link class="nav-itm nav-itm-text" to="/">
          Home{" "}
        </Link>
        <Link class="nav-itm nav-itm-text" to="/">
          Products{" "}
        </Link>
      </div>
      <div class="nav-sub-sec">
        <SearchBar class="search-thing" />
        {/* <button class="btn btn-link1">X</button> */}
      </div>
      <div class="nav-sub-sec nright">
        <Link to="/cart" class="nav-itm"><i class="fas fa-shopping-cart"></i></Link>
        <p>{state.length}</p>
        <Link to="/wishlist" class="nav-itm"><i class="far fa-heart"></i></Link>
        <p>{wishState.length}</p>
      </div>
    </nav>
  );
};
