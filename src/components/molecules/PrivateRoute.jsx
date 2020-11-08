import React, { useContext, useEffect } from 'react';
import {Redirect, Route} from  "react-router-dom";
import { AuthContext } from '../../App';
// import Admin from '../pages/Admin/Admin';

const PrivateRoute= ({component : Component, ...rest})  => {
  const {state}= useContext(AuthContext);
useEffect(() => {
  return () => {};
}, [state]); 
console.log(state, "cest le stateeeeeeeeeeee");

return(
  <Route
  {...rest}
  render= {props=>
    !state.isLoading ? ( state.isAuthenticated ? (<Component {...props}/>):(<Redirect
    to={{
        pathname: "./signin",
        state:  'Please sign in' 
    }}
    />
    )) : (<div>Loading..</div>)
  
  }
  />

)};

export default PrivateRoute


