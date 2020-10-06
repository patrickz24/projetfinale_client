
import React, { useContext, useEffect} from "react";

import { Link} from "react-router-dom";
import { AuthContext } from "../../../App";
require("./_navigation.scss");

export const Navigation = () => {

  const { state, dispatch } = useContext(AuthContext);


  // const history = useHistory();
  useEffect(() => {
    return () => {};
  }, [state]);
  const user= state.user;
// const {id} = user.id;
console.log(user);
  const logOut = () => {
    console.log("tutu");
   dispatch({ type: "LOGOUT" });

    console.log('Vous etes déconnecté!')
  };
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
        <div className="navigation__button media_smartphone">
          <Link to="/profil">
            <img src="./profile.svg" alt="profile" />
            <h3>Profil</h3>
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
            <Link to="/signup">
              <h3>Inscription</h3>
            </Link>
          </div>
          <div className="navigation__buttons__test">
            <Link to="/signin">
              <h3>Connexion</h3>
            </Link>
          </div><div className="navigation__buttons__test">
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
export default Navigation;
