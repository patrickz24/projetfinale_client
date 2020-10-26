
import React, { useContext, useEffect} from "react";

import { Link} from "react-router-dom";
import { AuthContext } from "../../../../App";
require("../_navigation.scss");

export const NavConnect = () => {

  const { state, dispatch } = useContext(AuthContext);


  // const history = useHistory();
  useEffect(() => {
    return () => {};
  }, [state]);
 
  const logOut = () => {

   dispatch({ type: "LOGOUT" });

    console.log('Vous etes déconnecté!')
  };
  return (
    <div>
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/house.png`} alt="homePage" />
            <h3>Home</h3>
          </Link>
        </div>
       
        <div className="navigation__button media_smartphone">
          <Link to="/devis">
            <img src={`${process.env.PUBLIC_URL}/report.png`} alt="devis" />
            <h3>Devis</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/profil">
            <img src={`${process.env.PUBLIC_URL}/profile.svg`} alt="profile" />
            <h3>Profil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link onClick={logOut} to="/">
            <img src={`${process.env.PUBLIC_URL}/logout.svg`} alt="deconnexion" />
            <h3>Déconnexion</h3>
          </Link>
        </div>
        <div className="navigation__logo media_tablet_desktop">
          <Link to="/">
            <img src= {`${process.env.PUBLIC_URL}/logo222.svg`}  alt="logo-kaplan" />
          </Link>
        </div>
        <div className="navigation__buttons media_tablet_desktop">
          <div className="navigation__buttons__test">
            <Link to="/devis">
              <h3>Devis</h3>
            </Link>
          </div>
     
          <div className="navigation__buttons__test">
            <Link to ="/profil">
              <h3>Profil</h3>
            </Link>
          </div>  
          <div className="navigation__buttons__test">
            <Link  onClick={logOut} to="/">
              <h3>Log Out</h3>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavConnect;