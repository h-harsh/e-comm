import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

export const Header = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-img">
          {/* <div className="banner-text-box"> */}
            <h1 className="banner-title">Financial literacy</h1>
            <div>
            <h2 className="banner-tagline">
              The importance of being Financially literate has became more significiant than ever in today's world
            </h2>
            <Link to="/products" className="nm-btn2 banner-btn"> Start Exploring </Link>
            </div>
            
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
