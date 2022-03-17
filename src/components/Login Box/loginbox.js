import { useState } from "react";
import { useAuth } from "../../Auth/authContetxt";
import "./loginBox.css";
import loginImage from "./login.svg";
import { PrimaryButton, SecondaryButton } from "../../New Components";
import { Link } from "react-router-dom";

export const LoginBox = () => {
  const [userName, setUserName] = useState("pharsh");
  const [password, setPassword] = useState("Harsh123");
  const { loginHandler } = useAuth();

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="res err" />
      </div>

      <div className="login-data-container">
        <h1 className="book-store">Book Store</h1>
        <h4>Welcome to Goa Singham</h4>
        <div className="login-data-sub-box" >
          <div className="each-data-cont" >
            <p>Username or Email</p>
            <input
              className="login-input"
              placeholder="Username"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Your password</p>
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className='for-login-btn-cont' >
          <PrimaryButton text="Login" clickHandler={() => loginHandler("pharsh", "Harsh123")} />
          </div>
        </div>
        <p>or</p>
        <Link to="/signup" className="for-signup-btn-cont" >
        <SecondaryButton text="Create New account" />
        </Link>
      </div>
    </div>
  );
};


