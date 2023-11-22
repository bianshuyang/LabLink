import * as React from 'react';

export const LabLinkContext = React.createContext({})

export function LabLinkProvider({ children }){
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [netID, setNetID] = React.useState('');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [year, setYear] = React.useState();
  const [major, setMajor] = React.useState('');
  const [courses, setCourses] = React.useState('');

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
