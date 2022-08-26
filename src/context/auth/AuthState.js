import React, { useReducer, useContext, useState, useEffect } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

// Create a custom hook to use the auth context
export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return { state, dispatch };
};

const AuthState = (props) => {
  const initialState = {
    userLogin: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const userIsLoginedIn = () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      return {
        type: "ISLOGGEDIN",
        userLogin: false,
      };
    } else {
      return {
        type: "ISLOGGEDIN",
        userLogin: true,
      };
    }
  };

  useEffect(() => {
    dispatch(userIsLoginedIn());
  }, []);
  return (
    <AuthContext.Provider value={{ state: state, dispatch, userIsLoginedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
