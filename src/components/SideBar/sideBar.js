import "./sideBar.css";
import { Link } from "react-router-dom";



export const SideBar = ({ status, showSideBar }) => {
  return (
    <nav className={status ? "nav-menu active" : "nav-menu"}>
      <ul>
        <li onClick={showSideBar}>
        <i class="far fa-times-circle"></i>
        </li>
        <li onClick={showSideBar}>
          <Link to="/"> <i class="fas fa-home"></i> Home</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/products"> <i class="fas fa-store"></i> Products</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/cart"> <i class="fas fa-shopping-cart"></i> Cart</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/wishlist"><i class="fas fa-heart"></i> Wishlist</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/address"><i class="fas fa-map-marker-alt"></i> Address</Link>
        </li>
      </ul>
    </nav>
  );
};
