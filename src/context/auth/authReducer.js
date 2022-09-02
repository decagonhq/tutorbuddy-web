const authReducer = (state, action) => {
  switch (action.type) {
    case "USERTYPE":
      return { ...state, userType: action.userType };
    case "ISLOGGEDIN":
      return { userLogin: action.userLogin };
    default:
      return state;
  }
};

export default authReducer;
