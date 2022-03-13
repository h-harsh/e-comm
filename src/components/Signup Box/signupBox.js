import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../Auth/authContetxt";
import "./signupBox.css";
import { baseurl } from "../../utils/apiCalls";
import loginImage from "./signup3.svg";
import { PrimaryButton, SecondaryButton } from "../../New Components";
import { Link } from "react-router-dom";

export const SignUpBox = () => {
  const { loginHandler } = useAuth();

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUpHandler = async (
    fullName,
    userName,
    email,
    password,
    loginHandler
  ) => {
    try {
      const response = await axios.post(
        `${baseurl}/user/signup`,
        {
          fullName: fullName,
          userName: userName,
          email: email,
          password: password,
        },
        {
          headers: {
            ContentType: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response)
      if (response.status === 200) {
        console.log(userName, password);
        loginHandler(userName, password);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(fullName, userName, email, password);

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} />
      </div>

      <div className="login-data-container">
        <h1 className="book-store">Book Store</h1>
        <h4>Welcome to Goa Singham</h4>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Full name</p>
            <input
              className="login-input"
              placeholder="Full Name (min 6 char)"
              type="text"
              onChange={(event) => setFullName(event.target.value)}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Username</p>
            <input
              className="login-input"
              placeholder="UserName (min 3 char)"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Email address</p>
            <input
              className="login-input"
              placeholder="Email"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Password</p>
            <input
              className="login-input"
              placeholder="(8 char,1 number, uppercase and lowercase)"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="for-login-btn-cont">
            <PrimaryButton
              text="Register"
              clickHandler={() =>
                signUpHandler(fullName, userName, email, password, loginHandler)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

