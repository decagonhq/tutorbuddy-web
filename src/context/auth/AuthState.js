import React, { useReducer, useContext } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

// Create a custom hook to use the auth context
export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return {state, dispatch};
};

const AuthState = (props) => {
  const initialState = {
    userType: "tutor",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return ( 
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;