import React, { useContext, useEffect } from 'react';
import {Redirect, Route} from  "react-router-dom";
import { AuthContext } from '../../App';

const AdminRoute= ({component : Component, ...rest})  => {
  const {state}= useContext(AuthContext);
useEffect(() => {
  return () => {};
}, [state]);
console.log(state
  , "cest le stateeeeeeeeeeee AAAAAAAAAAAAAAAAAAAAAAAAA");

return(
  <Route
  {...rest}
  render= {props => 
   state.isAdmin  ? (<Component {...props}/>):(<Redirect
    to={{
        pathname: "./signin",
        state:  'Please sign in' 
    }}
    />
    )}/>
)};
  
export default AdminRoute