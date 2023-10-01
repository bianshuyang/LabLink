import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import eLogo from "../images/eLogo.png";

function Login(){

  const [isChange, setIsChange] = React.useState(false);

  const handleButtonClick = () => {
    setIsChange(!isChange);
  };

  return(
      <div className={`login-container ${isChange ? "change" : ""}`}>
        <div className="login-form-wrapper">
          <div className="eLogo">
            <img src={eLogo} alt="Emory Logo"/>
          </div>
          <div className="banner">
            <h1>Lab Link</h1>
            <p>Enter your Emory credential and start journey with us!</p>
          </div>
          <div className="blue-bg">
            <div className={`logo-2 ${isChange ? "change" : ""}`} id="logoonce">
              <img src={eLogo} alt="Emory Logo"/>
            </div>
            <button type="button" onClick={() => handleButtonClick()}>Lab Link</button>
          </div>
          <form className="signin-form">
            <h1>Lab Link</h1>
            <h1>Login</h1>
            <p>use your Emory NetID to login!</p>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="NetID" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Link to={'/'}><button type="button">Sign in</button></Link>
          </form>
        </div>
      </div>
  )
}

export default Login
