
import React from 'react';
import { useNavigate } from "react-router-dom";
 
function Test() {
 
  const navigate = useNavigate();
 
  const handleSaveToken = () => {
    // Here, we're setting a token in sessionStorage.
    sessionStorage.setItem('myToken', '123456abcdef');
    // Navigate to the TokenPage component.
    navigate('/test2');
  };
 
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleSaveToken}>Save Token and Go to Token Page</button>
    </div>
  );
}

export default Test;
