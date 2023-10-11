import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import eLogo from "../images/eLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login(){

  const [isChange, setIsChange] = React.useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [netID, setNetID] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsChange(!isChange);
  };

  async function fetchData(netID, password) {
    try {
      const response = await fetch("https://lab-link-m88gskr6d-bianshuyang.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          field1: netID,
          field2: password,
        }),
      });
      console.log(netID,password);
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
      console.log("Done loading!");
      navigate('/');
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setIsError(true);
      window.alert("Error occurred while fetching data!");
    }
    console.log(isError);
  }

  const handleFormSubmit = (e) => {
    console.log("NetID:", netID);
    console.log("Password:", password);
    e.preventDefault();

    fetchData(netID, password);  // Call fetchData with netID and password
  };

  useEffect(() => {
    // fetchData();  // Removed this because we now fetch data on form submit
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
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
            <h1>Login</h1>
            <p>Login as a guest to collect your favorites or cast votes!</p>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="NetID" value = {netID} onChange={e => setNetID(e.target.value)}  />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)}  />
            </div>
            <button type="submit">Submit</button>
          </form>
        
        </div>
      </div>
  )
}

export default Login
