import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Devis from "./pages/Devis/Devis";
import Profil from "./pages/Profil/Profil";
import { AuthContext } from "../App";
import PrivateRoute from "./molecules/PrivateRoute";


export default function Routes() {
  const {state}= useContext(AuthContext);
useEffect(() => {
  return () => {};
}, [state]);

  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>
      {/* <Route path="/devis">
  <div>{!state.isAuthenticated ? < Signin/> : <Devis />}</div>
      </Route> */}
<PrivateRoute exact path="/devis" component={Devis}/>
      <Route  path="/profil">
      <div>{!state.isAuthenticated ? < Signin/> : <Profil />}</div>
      </Route>
 
 

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
