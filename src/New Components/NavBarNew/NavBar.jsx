import "./NavBar.css";
// import { OrangeButton } from "../../utils";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ourPrograms, ourServices, aboutUs, myAccount } from "./data";
import { PrimaryButton, SecondaryButton } from "../../New Components";
import { useAuth } from "../../Auth/authContetxt";
import { useCart } from "../../components/Cart/cartContext";
import { useWish } from "../../components/Wishlist/wishContext";

const NavBar = ({ mobileMenuActive, handleMobileMenuActive }) => {
  const { token, logoutHandler } = useAuth();
  const { state } = useCart();
  const { wishState } = useWish();
  const [ourServicesSubMenuDisplay, setOurServicesSubMenuDisplay] =
    useState(false);

  const handleChangeOurServices = () => {
    setOurServicesSubMenuDisplay(!ourServicesSubMenuDisplay);
  };

  const handleReset = () => {
    setOurServicesSubMenuDisplay(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, [pathname]);

  return (
    <nav>
      <div className="nav-logo-cont">
        <Link className="book-store" to="/">
          Book Store
        </Link>
      </div>

      <div className="nav-items-cont">
        <ul className="nav-items-list">
          <li className="nav-item tab-hide">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>

          {
            !token && <li style={{color:'white'}} className="nav-item">
            <Link to="/">Home</Link>
          </li>
          }

          {token ? (
            <>
              <li
                className="nav-item"
                onMouseOver={handleChangeOurServices}
                onMouseOut={handleChangeOurServices}
              >
                My Account
                <SubMenu
                  subMenuDisplay={ourServicesSubMenuDisplay}
                  handleReset={handleReset}
                  left={"62.5%"}
                  data={myAccount}
                />
              </li>

              <li className="nav-item  icn-bx">
                <Link to="/wishlist">
                  <i class="fas fa-heart"></i>
                  <p className="icon-badge">{wishState.length}</p>
                </Link>
              </li>

              <li className="nav-item  icn-bx">
                <Link to="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  <p className="icon-badge">{state.length}</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="login">
                  <SecondaryButton text="Logout" clickHandler={logoutHandler} />
                </Link>
              </li>
            </>
          ) : (
            <div className="two-buttons">
              <li className="nav-item">
                <Link to="login">
                  <PrimaryButton text="Login"  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signup">
                  <SecondaryButton text="Signup" />
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      <button className="menu-btn" onClick={handleMobileMenuActive}>
        <i className={mobileMenuActive ? `fas fa-times` : `fas fa-bars`}></i>
      </button>
    </nav>
  );
};

export default NavBar;

const SubMenu = ({ subMenuDisplay, handleReset, left, data }) => {
  return (
    <div
      className={`sub-menu ${subMenuDisplay ? "active" : null}`}
      style={{ position: "absolute", left: left }}
      onMouseLeave={handleReset}
    >
      {data.map((item) => {
        return item.wlink ? (
          <a rel="noreferrer" href={item.wlink} className="sub-menu-item">
            {item.title}
          </a>
        ) : (
          <Link to={item.link} className="sub-menu-item">
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
