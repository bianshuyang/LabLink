import * as React from 'react';

export const LabLinkContext = React.createContext({})

const base64Decode = (encodedStr) => {
  return decodeURIComponent(Array.prototype.map.call(atob(encodedStr), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
}

export function LabLinkProvider({ children }){
  
  const sessionUserID = sessionStorage.getItem('userID');
  const userID = sessionUserID ? base64Decode(sessionUserID) : null;
  const userToken = sessionStorage.getItem('userToken');
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!userToken);
  const [netID, setNetID] = React.useState(userID ? userID : '');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [year, setYear] = React.useState();
  const [major, setMajor] = React.useState('');
  const [courses, setCourses] = React.useState('');

  React.useEffect(() => {
    setIsLoggedIn(!!userToken);
  }, [userToken]);

  React.useEffect(() => {
    setIsLoggedIn(!!userID);
  }, [userID]);


  return(
    <LabLinkContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      netID,
      setNetID,
      name,
      setName,
      role,
      setRole,
      email,
      setEmail,
      bio,
      setBio,
      year,
      setYear,
      major,
      setMajor,
      courses,
      setCourses,
    }}>
      { children }
    </LabLinkContext.Provider>
  );
}
