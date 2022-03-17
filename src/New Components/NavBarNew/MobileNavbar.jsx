
/* eslint-disable */
import "./MobileNavbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { myAccount } from "./data";
import { useAuth } from "../../Auth/authContetxt";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";

const MobileNavbar = ({ mobileMenuActive, handleMobileMenuActive }) => {
  const { token, logoutHandler } = useAuth();
  const [ourServicesSubMenuDisplay, setOurServicesSubMenuDisplay] =
    useState(false);

  const handleChangeOurServices = () => {
    setOurServicesSubMenuDisplay(!ourServicesSubMenuDisplay);
  };

  const handleReset = () => {
    setOurServicesSubMenuDisplay(false);
  };
  return (
    <div className={mobileMenuActive ? "mobile-nav active" : "mobile-nav"}>
      <div className="mobile-nav-items">
        <ul className="mobile-nav-items-list">
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <Link to="/">Home</Link>
          </li>

          <li
            onClick={handleMobileMenuActive}
            className="nav-item-m nav-item-icon-cont"
          >
            <Link to="/products">Products</Link>
          </li>

          {token ? (
            <>
              <li
                onClick={handleChangeOurServices}
                className="nav-item-m nav-item-icon-cont"
              >
                My Account
                {ourServicesSubMenuDisplay ? (
                  <i class="fas fa-chevron-up"></i>
                ) : (
                  <i class="fas fa-chevron-down"></i>
                )}
              </li>
              <SubMenu
                subMenuDisplay={ourServicesSubMenuDisplay}
                handleReset={handleReset}
                data={myAccount}
                handleMobileMenuActive={handleMobileMenuActive}
              />

              <li
                onClick={handleMobileMenuActive}
                className="nav-item-m tab-hide"
              >
                <Link to="/cart">Cart</Link>
              </li>
              <li
                onClick={handleMobileMenuActive}
                className="nav-item-m tab-hide"
              >
                <Link to="/wishlist">Wishlist</Link>
              </li>

              <a  className="nav-item-m">
                <SecondaryButton text="Logout" clickHandler={logoutHandler} />
              </a>
            </>
          ) : (
            <div>
              <Link to='/login' className="nav-item-m">
                <PrimaryButton text="Login" clickHandler={handleMobileMenuActive} />
              </Link>
              <Link to='/signup' className="nav-item-m">
                <SecondaryButton text="Signup" clickHandler={handleMobileMenuActive} />
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;

const SubMenu = ({
  subMenuDisplay,
  handleReset,
  left,
  data,
  handleMobileMenuActive,
}) => {
  return (
    <div
      className={`mob-sub-menu ${subMenuDisplay ? "mob-active" : null}`}
      onClick={handleReset}
    >
      {data.map((item) => {
        return item.wlink ? (
          <a
            onClick={handleMobileMenuActive}
            rel="noreferrer"
            href={item.wlink}
            className="mob-sub-menu-item"
          >
            {item.title}
          </a>
        ) : (
          <Link
            onClick={handleMobileMenuActive}
            to={item.link}
            className="mob-sub-menu-item"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
