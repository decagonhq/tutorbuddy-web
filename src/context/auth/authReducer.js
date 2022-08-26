const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { userLogin: action.userLogin };
    case "ISLOGGEDIN":
      return { userLogin: action.userLogin };
    default:
      return state;
  }
};

export default authReducer;
