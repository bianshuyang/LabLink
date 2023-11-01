import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import eLogo from "../images/eLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import sjcl from 'sjcl';

function Login(){

  function validateNetID(netID) {
    // Check if netID is empty
    if (!netID || netID.trim() === "") {
        throw new Error("NetID cannot be empty");
    }

    // Check if netID starts with an alphabetical character
    if (!/^[a-zA-Z]/.test(netID)) {
        throw new Error("NetID must start with an alphabetical character");
    }

    // Check if netID is not just numbers
    if (/^\d+$/.test(netID)) {
        throw new Error("NetID cannot be just numbers");
    }

}




  function hashPassword(password) {
      try{
      return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(password));
    }
    catch(error){
      console.error("Error hashing password:", error);
    }
  }
 
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
    try{
      validateNetID(netID);
      console.log("Valid netID FORMAT");


    console.log(hashPassword(password));
    console.log("is pss")
    try {
      console.log(process.env);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          field1: netID,
          field2: hashPassword(password),
        }),
      });
      console.log(netID,hashPassword(password));
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
      console.log("Login successful!");
      sessionStorage.setItem('userToken', netID);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setIsError(true);
      window.alert("Either your credential is not in our database, \n or your password is wrong! \n We have rerouted you to register page! ");
      navigate('/register')
    }
    console.log(isError);
  }
  catch (error){
    alert(error.message);

    }
  }

  const handleFormSubmit = (e) => {
    console.log("NetID:", netID);
    console.log("Password:", hashPassword(password));
    e.preventDefault();

    fetchData(netID, hashPassword(password));  // Call fetchData with netID and password
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
          <input placeholder="NetID" value = {netID} onChange={e => setNetID(e.target.value)}  />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)}  />
        </div>
        <button type="submit">Login</button>
        <Link to={'/resetPass'} className="resetPass">Reset Password</Link>
      </form>
    </div>
  </div>
)
}
export default Login