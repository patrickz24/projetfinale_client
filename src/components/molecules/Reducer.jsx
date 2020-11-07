const reducer = (state, action) => {

  switch (action.type) {
    case "SIGNIN":
 
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("user", action.payload.data.user.id);
      console.log("tuutuu",action.payload.data.user.isAdmin);
         return {
        ...state,
        isAuthenticated: true,
        isAdmin:action.payload.data.user.isAdmin,
        token: action.payload.data.token,
        user: action.payload.config.data.user,
        
      };
      
      case "LOAD_USER":
        console.log("tuutuu",action.payload);
        return {
          ...state,
          isAuthenticated: true,   
          isAdmin: action.payload.isAdmin,
          user: action.payload,
       
        };
   
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };


    default:
      return state;
  }
};

module.exports = reducer;
