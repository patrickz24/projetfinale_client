import React, { useContext, useEffect } from 'react';
import {Redirect, Route} from  "react-router-dom";
import { AuthContext } from '../../App';

const PrivateRoute= ({component : Component, ...rest})  => {
  const {state}= useContext(AuthContext);
useEffect(() => {
  return () => {};
}, [state]);
return(
  <Route
  {...rest}
  render= {props=>
    state.isAuthenticated ? (<Component {...props}/>):(<Redirect
    to={{
        pathname: "./signin",
        state:  'Please sign in' 
    }}
    />
    )}/>
)};

export default PrivateRoute


