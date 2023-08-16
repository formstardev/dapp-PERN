import { createContext, useContext, useState } from 'react';
import useLoggedInUserData from '../hooks/useLoginUserData';
const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const userData =useLoggedInUserData();

  return (
    <UserContext.Provider value={{ userData }}>
      {children}
    </UserContext.Provider>
  );
}
