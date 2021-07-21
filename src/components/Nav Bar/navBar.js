import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Auth/authContetxt";
import { SideBar } from '../SideBar/sideBar'
import { SearchBar } from "../Search bar/searchBar";
import './navBar.css'

export const NavBar = () => {
  const { token,  logoutHandler } = useAuth();
  const [sideBarShow, setSideBarShow] = useState(false);
  const showSideBar = () => setSideBarShow(!sideBarShow);
  

  return (
    <>
      <nav className="top-nav" id="myTopNav">
        <ul>
          <li className="nav-itm nav-itm-text" onClick={showSideBar}>
          <i class="fas fa-bars"></i>
          </li>
          <li className="nav-itm nav-itm-text">
            <Link to="/">FinStore</Link>
          </li>
          <div className="search-bx">
        <SearchBar class="search-thing" />
      </div>
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt">
              <Link to="/login">Login</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt">
              <Link to="/signup">Sign up</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/login"><i class="fas fa-sign-in-alt"></i></Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/signup"><i class="fas fa-user-plus"></i></Link>
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right logout-txt " onClick={() => logoutHandler()}>
              Logout
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right resp-txt icn-bx">
              <Link to="/cart"><i class="fas fa-shopping-cart"></i><p className="icon-badge">5</p></Link>
            </li>
          ): null}
          {token ? (
            <li className="nav-itm nav-itm-text right resp-txt icn-bx">
              <Link to="/wishlist"><i class="fas fa-heart"></i><p className="icon-badge">5</p></Link>
              
            </li>
          ): null}
          {token ? (
            <li className="nav-itm nav-itm-text right logout-icn " onClick={() => logoutHandler()}>
              <i class="fas fa-power-off"></i>
            </li>
          ) : null}
        </ul>
      </nav>
      <SideBar status={sideBarShow} showSideBar={showSideBar} />
    </>
  );
};

