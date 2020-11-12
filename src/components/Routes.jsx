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
import PublicRoute from "./molecules/PublicRoute";


export default function Routes() {
  const {state}= useContext(AuthContext);
useEffect(() => {
  return () => {};
}, [state]);

  return (
    <Switch>
     
      <PublicRoute  path="/signup" component={Signup}/>
      <PublicRoute  path="/signin" component={Signin}/>
      <PrivateRoute  path="/devis" component={Devis}/>
      <PrivateRoute path="/profil"  component={Profil}/>
      <AdminRoute path="/admin"  component={Admin}/>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
