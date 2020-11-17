import React, { useEffect } from "react";

import { Link, Switch, Route, useRouteMatch} from "react-router-dom";
import {stack	as Menu } from 'react-burger-menu';
import Infosperso from "./Infosperso/Infosperso";
import Parametres from "./Paramètres/Parametres";
import MesDevis from "./MesDevis/MesDevis";
import useStyles from "./useStyles";
import Axios from "axios";


require("./_profil.scss");


export default function Profil() {
  

let {path, url} = useRouteMatch();
const styles= useStyles();
const id = localStorage.getItem("user");
const [users, setUsers] = React.useState([]);


useEffect(() => {

const fetchDevis = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const result = await Axios(`http://localhost:8060/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result.data);
    setUsers(result.data);
  };
};
fetchDevis();
}, [id]);

console.log(users); 
  return (
   
    <div className="profil-container"> 
   
      <div className="photo">
          <div classsName="Link">
          <div ><Link to={`${url}/mesdevis`}>Mes devis</Link></div> 
          <div><Link  to={`${url}/infosperso`}>Modifier mes informations</Link></div>
           <div><Link>Tutoriels e-commerce</Link></div>
           <div><Link to={`${url}/parametres`}>Supprimer mon compte</Link></div>   </div>
        
      </div>
     <div className="profile-mobile"><Menu styles={ styles } >
       
         
          <div ><Link to={`${url}/mesdevis`}>Mes devis</Link></div> 
          <div><Link  to={`${url}/infosperso`}>Modifier mes informations</Link></div>
           <div><Link>Tutoriels e-commerce</Link></div>
           <div><Link to={`${url}/parametres`}>Supprimer mon compte</Link></div>   
        
      </Menu>
   
     
      </div>    
      <div className="profil-container_titre">
        <h2>Bienvenue sur votre profil  </h2>
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
