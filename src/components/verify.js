import * as React from "react";
import { LabLinkContext } from '../LabLinkProvider';
import { Link } from "react-router-dom";
import "../styles/verify.css";
import eLogo from "../images/eLogo.png";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';


function Verify(){


  const [isChange, setIsChange] = React.useState(false);
  const handleButtonClick = () => {
      setIsChange(!isChange);
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const navigate = useNavigate();
  const { netID, setNetID } = useContext(LabLinkContext);


const resetStates = () => {
  setVerificationCode('');
}


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const recordedPairs = {
      user: sessionStorage.getItem('temporarynetID'),
      code: verificationCode
    }
    console.log(recordedPairs);
    console.log(verificationCode);
    console.log("=======");
    try {
      const res = await fetch('/api/reset/verifycode', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(recordedPairs),
      });

      console.log(res.status === 400);
      if (!res.ok) {
          const data = await res.text();
          alert("Your verification code was wrong.");

      }
      else{
        if (res.status==200){
          alert ("OK. You are redirected to register page.");
          navigate('/register');
        }
        else{
          alert("No new user should proceed to register, not here. You are redirected to register page.");
          navigate('/register');
        }
      }
    } catch (error) {
        console.error("Error while making the fetch request:", error);
    }
    resetStates();


  };

  useEffect(() => {
    // fetchData();  // Removed this because we now fetch data on form submit
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(
    <div className="login-container">
    <div className="login-form-wrapper">
      <div className="verifyeLogo">
      </div>
      <div className="banner">
        <h1>Lab Link</h1>
        <p>Enter your Emory credential and start journey with us!</p>
      </div>
      <form className="signin-form verify-sf" onSubmit={handleFormSubmit}>
        <h1>Lab Link</h1>
        <h1>Verification Code</h1>
        <p>Verify my identity</p>
        <div className="input-group verify-ig">
          <i className="fas fa-envelope"></i>
          <input placeholder="verificationCode" value = {verificationCode} onChange={e => setVerificationCode(e.target.value)}  />
        </div>
        <button type="submit">Verify</button>
      </form>

    </div>
  </div>
)
}
export default Verify;
