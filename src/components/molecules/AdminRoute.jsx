import React, { useContext, useEffect } from 'react';
import {Redirect, Route} from  "react-router-dom";
import { AuthContext } from '../../App';
import { useAlert} from 'react-alert';
import IsLoading from '../pages/isLoading/IsLoading';


const AdminRoute= ({component : Component, ...rest})  => {
  const {state}= useContext(AuthContext);
  const alert = useAlert();
useEffect(() => {
  return () => {};
}, [state]);
return(
  <Route
  {...rest}
  render= {props=>
    !state.isLoading ? ( state.isAdmin ? (<Component {...props}/>):(<Redirect onClick={alert.show('Veillez vous connecter, pour accèder à cette page!')}
    to={{
        pathname: "./",
        state:  'Please sign in' 
    }}
    />
    )) : (<IsLoading/>)
  
  }
  />

)};
 
export default AdminRoute