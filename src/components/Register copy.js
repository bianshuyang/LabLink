import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import eLogo from "../images/eLogo.png";

function Register(){

  const [isChange, setIsChange] = React.useState(false);

  const [netID, setNetID] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleButtonClick = () => {
    setIsChange(!isChange);
  };

  const handleFormSubmit = (e) => {
      console.log("NetID:", netID);
      console.log("Password:", password);
      e.preventDefault();
      // Here, you can now use the netID and password state variables
      // to send to your server or perform other operations.

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
          <form className="signin-form" onSubmit={handleFormSubmit}>
            <h1>Lab Link</h1>
            <h1>Register</h1>
            <p>Register as a guest to collect your favorites or cast votes!</p>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="NetID" value = {netID} onChange={e => setNetID(e.target.value)}  />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)}  />
            </div>
            <button type="submit">Register!</button>
            <Link to={'/'}><button type="submit">Go to the Home Page</button></Link>
          </form>
        </div>
      </div>
  )
}

export default Register
