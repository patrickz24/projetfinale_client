import React, { useContext, useEffect} from "react";

import { Link} from "react-router-dom";
import { AuthContext } from "../../../../App";
require("./_navadmin.scss");

export const NavAdmin = () => {

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
      <nav className="navadmin">
        <div className="navadmin__button media_smartphone">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/house.png`} alt="homePage" />
            <h3>Acceuil</h3>
          </Link>
        </div>
       
      
        <div className="navadmin__button media_smartphone">
          <Link to="/admin">
            <img src={`${process.env.PUBLIC_URL}/profile.svg`} alt="profile" />
            <h3>Administrateur</h3>
          </Link>
        </div> 
        
        <div className="navadmin__button media_smartphone">
          <Link onClick={logOut} to="/">
            <img src={`${process.env.PUBLIC_URL}/logout.svg`} alt="deconnexion" />
            <h3>Déconnexion</h3>
          </Link>
        </div>
        <div className="navadmin__logo media_tablet_desktop">
          <Link to="/">
            <img src= {`${process.env.PUBLIC_URL}/logo232.png`}  alt="logo" />
          </Link>
        </div>
        <div className="navadmin__buttons media_tablet_desktop">
          <div className="navadmin__buttons__test">
            <Link to="/admin">
              <h3>Administrateur</h3>
            </Link>
          </div>
     
            
          <div className="navadmin__buttons__test">
            <Link  onClick={logOut} to="/">
              <h3>Déconnexion</h3>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavAdmin;