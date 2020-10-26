import React from "react";

import { Link, Switch, Route, useRouteMatch} from "react-router-dom";
import {stack	as Menu } from 'react-burger-menu';
import Infosperso from "./Infosperso/Infosperso";
import Parametres from "./Paramètres/Parametres";
import MesDevis from "./MesDevis/MesDevis";
import useStyles from "./useStyles";


require("./_profil.scss");


export default function Profil() {

let {path, url} = useRouteMatch();
const styles= useStyles();
 
 
  return (
   
    <div className="profil-container">
      <div className="photo">
          <div classsName="Link">
          <div><Link>e-learning</Link></div> 
          <div><Link to={`${url}/mesdevis`}>Mes Devis</Link></div> 
          <div><Link to={`${url}/parametres`}>Paramètres</Link></div> 
          <div><Link  to={`${url}/infosperso`}>informations</Link></div></div>
        
      </div>
     <div className="profile-mobile"><Menu styles={ styles } >
       
          <div><Link>e-learning</Link></div> 
          <div><Link to={`${url}/mesdevis`}>Mes Devis</Link></div> 
          <div><Link to={`${url}/parametres`}>Paramètres</Link></div> 
          <div><Link  to={`${url}/infosperso`}>informations</Link></div> 
        
      </Menu>
      </div> 
      <Switch>
        <Route exact path={`${url}/mesdevis`}>
         <MesDevis/>
        </Route>
        <Route exact path={`${url}/parametres`}>
         <Parametres/>
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
