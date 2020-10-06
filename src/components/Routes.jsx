import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Devis from "./pages/Devis/Devis";
import Profil from "./pages/Profil/Profil";


export default function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/devis">
        <Devis />
      </Route>

      <Route  path="/profil">
        <Profil />
      </Route>
      {/* <Route  exact path="/profil/:id/chat">
          <Chat />
        </Route>
        <Route exact path="/profil/:id/infosperso">
          <Infosperso />
        </Route> */}

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
