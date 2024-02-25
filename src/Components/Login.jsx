import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";
import goog from "./goog.jpeg";
import appstore from "./appstore.png";
import playstore from "./playstore.png";
import socsym from "./socsym.png";
import logoFro from "./logoFro.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = () => {

    if (username === "aravi565" && password === "12345") {
      navigate("/home"); 
    } else {
      setErrorMessage("⚠️Invalid username or password");
    }
  };

  return (
    <div>
      <img src={socsym} alt="error" height={450} id="loghome" />
      <div className="st">
        <img src={logoFro} alt="error" height={45} id="loghome1" />
      </div>
      <div className="login-container">
        <div className="login-form">
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" id="hh" onClick={handleLogin}>
              Login
            </button>
            <span className="forgot-password">Forgot password?</span>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
        <div className="or-divider">
          <hr id="line" />
          <span style={{ fontFamily: "Arial, sans-serif" }}> OR </span>
          <hr id="line" />
        </div>
        <div className="signin-with-google">
          <button>
            <img src={goog} id="g-img" alt="Google logo" />
            Sign in with Google
          </button>
        </div>
        <div className="signup">
          Don't have an account?
          <a href="/SignUp" id="sup">
            Sign Up
          </a>
        </div>
        <div>
          <p id="from">Get the app from.</p>
        </div>
        <div className="app-download-buttons">
          <a href="https://www.apple.com/app-store/">
            <img src={appstore} alt="Download on the App Store" id="app" />
          </a>
          <a href="https://play.google.com/store">
            <img src={playstore} alt="Get it on Google Play" id="app1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
