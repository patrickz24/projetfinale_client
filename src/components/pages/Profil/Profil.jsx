import React from "react";

import { Link, Switch, Route} from "react-router-dom";

import Infosperso from "./Infosperso";

import Chat from "./Chat";

require("./_profil.scss");


export default function Profil() {

  return (
    <div className="profil-container">
      <div className="photo">
          <div classsName="Link">
          <div><Link>e-learning</Link></div> 
          <div><Link to={`./chat`}>chat</Link></div> 
          <div><Link>Paramètres</Link></div> 
          <div><Link  to={`./infosperso`}>informations Personnelles</Link></div> </div>

      </div>
      <Switch>
      <Route exact path="/profil/:id/chat">
          <Chat />
        </Route>
        <Route exact path="/profil/:id/infosperso">
          <Infosperso />
        </Route>
        </Switch>
      </div>

       
       
    
   
  
  );
}
