import * as React from 'react';

export const LabLinkContext = React.createContext({})

export function LabLinkProvider({ children }){
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [netID, setNetID] = React.useState('');

  return(
    <LabLinkContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      netID,
      setNetID,
    }}>
      { children }
    </LabLinkContext.Provider>
  );
}
