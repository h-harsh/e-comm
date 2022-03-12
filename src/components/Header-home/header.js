import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

export const Header = () => {
  return (
    <div className="banner">
      <div className="banner-img">
        <div className="banner-content">
          <p className="banner-text">Reading is best for getting an idea</p>
          <h1 className="banner-title">Start Reading</h1>
          <Link to="/products" className="banner-button">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

