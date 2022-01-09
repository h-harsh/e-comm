import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../Auth/authContetxt";
import "./signupBox.css";
import { baseurl } from "../../utils/apiCalls";

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
            'Access-Control-Allow-Origin' : '*'
          },
          
        }
      );
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
    <div className="signup-box">
      <input
        className="signup-item"
        placeholder="Full Name"
        type="text"
        onChange={(event) => setFullName(event.target.value)}
      />

      <input
        className="signup-item"
        placeholder="UserName"
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />

      <input
        className="signup-item"
        placeholder="Email"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        className="signup-item"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        className="signup-item nm-btn2 an"
        onClick={() =>
          signUpHandler(fullName, userName, email, password, loginHandler)
        }
      >
        Sign Up
      </button>
    </div>
  );
};