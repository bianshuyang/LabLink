 
import React from 'react';
import { useNavigate } from "react-router-dom";
 
function Test2() {
  // Retrieving the token from sessionStorage.
  const token = sessionStorage.getItem('myToken');
 
  return (
    <div>
      <h2>Token Page</h2>
      <p>Token: {token}</p>
    </div>
  );
}
 
export default Test2;
 
