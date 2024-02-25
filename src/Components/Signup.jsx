import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Create SignUp.css for styling
import logoFro from "./logoFro.png";
import socsym from "./socsym.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Define errorMessage state
  const [clicked, setClicked] = useState(false); // State to track if the button is clicked
  const navigate = useNavigate();

  const handleSignUp = () => {
    setClicked(true); // Set clicked to true when the button is clicked
    if (!username || !email || !password || !confirmPassword || !dob) {
      // Check if any field is empty
      setErrorMessage("⚠️Provide details");
    } else if (password !== confirmPassword) {
      setErrorMessage("⚠️Passwords do not match");
    } else {
      // Perform sign up logic here
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <img src={socsym} alt="error" height={450} id="loghome" />
        <div className="st">
          <img src={logoFro} alt="error" height={45} id="loghome1" />
        </div>
        <div className="signup-container">
          <div className="signup-form">
            <form>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <button type="button" id="hh" onClick={handleSignUp}>
                Sign Up
              </button>
              {clicked &&
                !username &&
                !email &&
                !password &&
                !confirmPassword &&
                !dob && <p className="error-message">Provide details</p>}
              {errorMessage && !clicked && (
                <p className="error-message">{errorMessage}</p>
              )}
            </form>
          </div>
          <div className="ccc">
            Already have an account?
            <a href="/login" id="sup">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
