import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

export const Header = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-img">
          <div className="banner-text-box">
            <h1 className="banner-title">FASHION & YOU</h1>
            <h2 className="banner-tagline">
              A single statement tag line, will write later, Okay na
            </h2>
            <Link to="/products" className="nm-btn2 banner-btn"> Discover More </Link>
          </div>
        </div>
      </div>
    </>
  );
};
