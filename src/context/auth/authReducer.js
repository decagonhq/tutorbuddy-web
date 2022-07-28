const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { userType: action.userType };
    default:
      return state;
  }
};

export default authReducer;
