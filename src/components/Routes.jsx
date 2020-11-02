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
<PrivateRoute  path="/devis" component={Devis}/>
      <PrivateRoute path="/profil"  component={Profil}/>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
