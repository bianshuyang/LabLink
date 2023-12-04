import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import eLogo from "../images/eLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import sjcl from 'sjcl';
function VerifyUser() {


  const [isChange, setIsChange] = React.useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [netID, setNetID] = React.useState('');
  const navigate = useNavigate();
  const [email, setemail] = React.useState('');
  const [emailData, setEmailData] = useState({
    from: "lablnk_help@outlook.com",
    to: '',
    subject: 'Lab Link Information Request Initiated',
    html: 'Thank you. Your verification code is 1354',
  });

  const handleButtonClick = () => {
    if (isChange) {
      navigate('/');
    } else {
      setIsChange(true);
    }
  };

  const generateRandomCode = () => {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
  }


  const resetStates = () => {
    setEmailData({
      from: "lablnk_help@outlook.com",
      to: '',
      subject: 'Lab Link Information Request Initiated',
      html: 'Thank you. Your verification code is 1354',
    });
    setNetID('');
    setemail('');
    // Add other state resets if needed
  }

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




  const handleFormSubmit = async (e) => {
    const verificationCode = generateRandomCode();
    e.preventDefault();
    const emailToSend = {
      ...emailData,  // Previous email data state
      to: netID + "@emory.edu",  // Setting 'to' field with the user's input email
      html: `Thank you. Your verification code is ${verificationCode}`
    };
    const recordedPairs = {
      user: netID,
      code: verificationCode
    }
    try {
      validateNetID(recordedPairs.user);

      try {
        const res = await fetch('/api/reset/forget', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recordedPairs),
        });

        if (!res.ok) {
          const data = await res.text();
          alert("Your verification code was unsuccessful because you must have asked for verification once");

        }
        else {
          alert("Successfully sent, please check your email");
        }
      } catch (error) {
        console.error("Error while making the fetch request:", error);
      }
      sessionStorage.setItem('temporarynetID', netID);
      resetStates();
      navigate('/NewUserVerify');
      if (1 < 2) {
        try {
          // Send a POST request to the serverless function
          const res = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailToSend),
          });
          // Error handling with the response
          if (!res.ok) {
            alert('Network response was not ok');
          }

          // Update state with the success response (can be customized based on your backend response)
          alert('Email sent successfully!');

          // Optionally, clear the form after successful submission
          setEmailData({
            from: "lablnk_help@outlook.com",
            to: '',
            subject: 'Lab Link First User Initiation',
            html: 'Thank you. Your verification code is 1354',
          });
        } catch (error) {
          // Update state with error message
          alert(`There was an error sending the email: ${error.message}`);
        }
      }

    } catch (error) {
      alert(error.message);
      resetStates();
    }



  };

  useEffect(() => {
    // fetchData();  // Removed this because we now fetch data on form submit
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`login-container ${isChange ? "change" : ""}`}>
      <div className="login-form-wrapper">
        <div className="eLogo">
          <img src={eLogo} alt="Emory Logo" />
        </div>
        <div className="banner">
          <h1>Lab Link</h1>
          <p>Enter your Emory credential and start journey with us!</p>
        </div>
        <div className="blue-bg">
          <div className={`logo-2 ${isChange ? "change" : ""}`} id="logoonce">
            <img src={eLogo} alt="Emory Logo" />
          </div>
          <button type="button" onClick={() => handleButtonClick()}>{isChange ? 'Home' : 'Lab Link'}</button>
        </div>
        <form className="signin-form" onSubmit={handleFormSubmit}>
          <h1>Lab Link</h1>
          <h1>Verify Account</h1>
          <p>Enter your netID to verify your account for login.</p>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input placeholder="NetID" value={netID} onChange={e => setNetID(e.target.value)} />
          </div>
          <button type="submit">Send Email</button>
        </form>

      </div>
    </div>
  )
}
export default VerifyUser;