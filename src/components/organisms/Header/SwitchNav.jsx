import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../App";

import NavAdmin from "../Navigation/NavAdmin/NavAdmin";
import NavConnect from "../Navigation/NavConnect/NavConnect";
import NavDisconnect from "../Navigation/NavDisconnect/NavDisconnect";

export default function SwitchNav() {
const {state}= useContext(AuthContext);

useEffect(() => {
  return () => {};
}, [state]);


  if (state.isAdmin===true) {
    return (
      <div>
        <NavAdmin />
      </div>
    );
  } else if (state.isAuthenticated===true )
  { return(
    <div>
      <NavConnect />
    </div>);
  }
  else  { return(
    <div>
      <NavDisconnect />
    </div>);
  }
}
