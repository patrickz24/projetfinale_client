import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../App";

import NavConnect from "../Navigation/NavConnect/NavConnect";
import NavDisconnect from "../Navigation/NavDisconnect/NavDisconnect";

export default function SwitchNav() {
const {state}= useContext(AuthContext);

useEffect(() => {
  return () => {};
}, [state]);


  if (state.isAuthenticated===true) {
    return (
      <div>
        <NavConnect />
      </div>
    );
  } else { return(
    <div>
      <NavDisconnect />
    </div>);
  }
}
