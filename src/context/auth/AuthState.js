import React, { useReducer, useContext, useState, useEffect } from "react";
import decode from "jwt-decode";
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
    userType: "tutor",
  };
  const [userDetails, setUserDetails] = useState({});
  const [state, dispatch] = useReducer(authReducer, initialState);

  const userIsLoginedIn = () => {
    const token = localStorage.getItem("userToken");
    const user = JSON.parse(token);
    const decoded = decode(user.token);
    const key = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/";
    const userObj = {
      id: user.id,
      name: decoded[`${key}givenname`],
      surname: decoded[`${key}surname`],
      image: decoded[`${key}uri`],
    };
    setUserDetails(userObj);
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

  const typeOfUser = () => {
    const token = localStorage.getItem("userToken");
    const user = JSON.parse(token);
    const decoded = decode(user.token);
    const key = "http://schemas.microsoft.com/ws/2008/06/identity/claims/";
    if (decoded[`${key}role`].toLowerCase() === "tutor") {
      return { type: "UPTYPE", userType: "tutor" };
    } else {
      return { type: "USERTYPE", userType: "student" };
    }
  };

  useEffect(() => {
    let user = localStorage.getItem("userToken");
    if (user) {
      dispatch(userIsLoginedIn());
      dispatch(typeOfUser());
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state: state,
        dispatch,
        userIsLoginedIn,
        typeOfUser,
        userDetails: userDetails,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
