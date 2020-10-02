import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../Routes";

require("./_navigation.scss");

export const Navigation = () => {
  // const  {dispatch } = useContext(AuthContext);

  // function Signout (){
  //   dispatch({
  //     type: "LOGOUT",
  //   });
  // };

  return (
    <div>
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/">
            <img src="./house.png" alt="homePage" />
            <h3>Home</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/signup">
            <img src="./option-dinscription.png" alt="inscription" />
            <h3>Inscription</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/signin">
            <img
              src="./symbole-de-connexion-internet-sans-fil.png"
              alt="connexion"
            />
            <h3>Connexion</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/devis">
            <img src="./report.png" alt="devis" />
            <h3>Devis</h3>
          </Link>
        </div>
        <div className="navigation__logo media_tablet_desktop">
          <Link to="/">
            <img src="./logo222.svg" alt="logo-kaplan" />
          </Link>
        </div>
        <div className="navigation__buttons media_tablet_desktop">
          <div className="navigation__buttons__test">
            <Link to="/devis">
              <h3>Devis</h3>
            </Link>
          </div>
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
              <button >Log Out</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
