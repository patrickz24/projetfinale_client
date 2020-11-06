import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Devis from "./pages/Devis/Devis";
import Profil from "./pages/Profil/Profil";
import { AuthContext } from "../App";
import PrivateRoute from "./molecules/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import AdminRoute from "./molecules/AdminRoute";


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
      <Route path="/admin">
        <Admin />
      </Route>
      <AdminRoute path="/admin" component={Admin}/>
<AdminRoute  path="/devis" component={Devis}/>
      <AdminRoute path="/profil"  component={Profil}/>
    
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
