import * as React from 'react';

export const LabLinkContext = React.createContext({})

export function LabLinkProvider({ children }){
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return(
    <LabLinkContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
    }}>
      { children }
    </LabLinkContext.Provider>
  );
}
