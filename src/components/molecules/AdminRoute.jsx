import React, { useContext, useEffect } from 'react';
import {Redirect, Route, useHistory} from  "react-router-dom";
import { AuthContext } from '../../App';
import Home from '../pages/Home/Home';
import Signin from '../pages/Signin/Signin';

const AdminRoute= ({component : Component, ...rest})  => {
  const {state}= useContext(AuthContext);

useEffect(() => {
  return () => {};
}, [state]);
console.log(state
  , "cest le stateeeeeeeeeeee AAAAAAAAAAAAAAAAAAAAAAAAA");
  // if (state.isAdmin===true) {
return(
  <Route
  {...rest}
  render= {props=>
    !state.isLoading ? ( state.isAdmin ? (<Component {...props}/>):(<Redirect
    to={{
        pathname: "./signin",
        state:  'Please sign in' 
    }}
    />
    )) : (<div>Loading..</div>)
  
  }
  />

)};
//   {...rest}
//   render= {props =>
    
   
//       <div>
//         (<Component {...props}/>)
//       </div>
//   }/>)
// } else {
  
//   return(
//     <Route
//   {...rest}
//   render= {() =>
    
   
//       <div>
//         (<Home/>)
//       </div>
     
          
//   }
//   /> )
  
// }
// }
//    state.isAdmin  ? (<Component {...props}/>):(<Redirect
//     to={{
//         pathname: "./signin",
//         state:  'Please sign in' 
//     }}
//     />
//     )}/>
// )};





  
export default AdminRoute