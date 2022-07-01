import React from "react"

function Nav() {

  return (
    <nav>
        <img className="nav--icon" src={require("../Images/world_icon.png")} alt="globe" />
        <h1>my travel journal.</h1>
    </nav>
  );
}

export default Nav;
