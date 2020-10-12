import React from "react";
import SwitchNav from "./SwitchNav";

require("./_header.scss");

export default function Header() {
  return (
    <>
      <header>
        <SwitchNav />
      </header>
    </>
  );
}
