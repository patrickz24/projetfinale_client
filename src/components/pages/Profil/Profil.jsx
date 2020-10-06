import React from "react";

import { Link, Switch, Route, useRouteMatch} from "react-router-dom";

import Infosperso from "./Infosperso";

import Chat from "./Chat";

require("./_profil.scss");


export default function Profil() {
let {path, url} = useRouteMatch();
  return (
    <div className="profil-container">
      <div className="photo">
          <div classsName="Link">
          <div><Link>e-learning</Link></div> 
          <div><Link to={`${url}/chat`}>chat</Link></div> 
          <div><Link>Paramètres</Link></div> 
          <div><Link  to={`${url}/infosperso`}>informations Personnelles</Link></div> </div>

      </div>
      <Switch>
        <Route exact path={`${url}/chat`}>
         <Chat/>
        </Route>
        <Route exact path={`${url}/infosperso`}>
         <Infosperso/>
        </Route>
        <Route path={`${path}/profil`}>
          <Profil />
        </Route>
      </Switch>
      </div>

       
       
    
   
  
  );
}
