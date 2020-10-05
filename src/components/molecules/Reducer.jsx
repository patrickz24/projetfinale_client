const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    
    case "SIGNIN":
      console.log("loggiin");
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("user", action.payload.data.user.id);

      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload.config.user,
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };

    // case "SIGNUP":
    //   localStorage.setItem("token", action.payload.data.token);

    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     token: action.payload.data.token,
    //     user: action.payload.config.user,
    //   };

    default:
      return state;
  }
};

module.exports = reducer;
