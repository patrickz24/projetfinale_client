
import React from "react";

import { Link} from "react-router-dom";

require("../_navigation.scss");

export const NavDisconnected = () => {


  return (
    <div>
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/house.png`} alt="homePage" />
            <h3>Acceuil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/signup">
            <img src={`${process.env.PUBLIC_URL}/option-dinscription.png`} alt="inscription" />
            <h3>Inscription</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/signin">
            <img
              src={`${process.env.PUBLIC_URL}/symbole-de-connexion-internet-sans-fil.png`}
              alt="connexion"
            />
            <h3>Connexion</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/devis">
            <img src={`${process.env.PUBLIC_URL}/report.png`} alt="devis" />
            <h3>Devis</h3>
          </Link>
        </div>
    
        <div className="navigation__logo media_tablet_desktop">
          <Link to="/">
            <img src= {`${process.env.PUBLIC_URL}/logo232.svg`}  alt="logo-kaplan" />
          </Link>
        </div>
        <div className="navigation__buttons media_tablet_desktop">
     
          <div className="navigation__buttons__test">
            <Link to="/signup">
              <h3>Inscription</h3>
            </Link>
          </div>
          <div className="navigation__buttons__test">
            <Link to="/signin">
              <h3>Connexion</h3>
            </Link>
          </div>   
            <div className="navigation__buttons__test">
            <Link to="/devis">
              <h3>Devis</h3>
            </Link>
          </div>
        
        </div>
      </nav>
    </div>
  );
};
export default NavDisconnected;