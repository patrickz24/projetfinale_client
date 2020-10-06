import React from "react";

import { Link, Switch, Route, useRouteMatch} from "react-router-dom";
import {elastic		as Menu } from 'react-burger-menu'
import Infosperso from "./Infosperso";

import Chat from "./Chat";

require("./_profil.scss");


export default function Profil() {
let {path, url} = useRouteMatch();
const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#FAFAFA'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: ' #FAFAFA',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: ' #FAFAFA'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
 

  return (
  
    <div className="profil-container">
      <div className="photo">
          <div classsName="Link">
          <div><Link>e-learning</Link></div> 
          <div><Link to={`${url}/chat`}>chat</Link></div> 
          <div><Link>Paramètres</Link></div> 
          <div><Link  to={`${url}/infosperso`}>informations Personnelles</Link></div> </div>
        
      </div>
     <div className="profile-mobile"><Menu styles={ styles } >
       
          <div><Link>e-learning</Link></div> 
          <div><Link to={`${url}/chat`}>chat</Link></div> 
          <div><Link>Paramètres</Link></div> 
          <div><Link  to={`${url}/infosperso`}>informations Personnelles</Link></div> 
        
      </Menu></div> 
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
