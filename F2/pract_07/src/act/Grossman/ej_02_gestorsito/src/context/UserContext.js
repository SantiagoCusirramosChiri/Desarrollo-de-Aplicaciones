import React, { createContext, useState } from 'react';

const UserContext = createContext();


const initialState = {
  isAuthenticated: false,
  user: null,
};

function UserProvider({ children }) {
  const [state, setState] = useState(initialState);

  const login = (userData) => {
    setState({
      isAuthenticated: true,
      user: userData,
    });
  };

  const logout = () => {
    setState(initialState);
  };

  return (
    <UserContext.Provider value={{
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
