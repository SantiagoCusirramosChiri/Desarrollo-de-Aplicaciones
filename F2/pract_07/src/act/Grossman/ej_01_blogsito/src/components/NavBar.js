
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return React.createElement(
    "nav",
    null,
    React.createElement(Link, { to: "/" }, "Inicio"),
    " | ",
    React.createElement(Link, { to: "/articulos" }, "Artículos")
  );
}

export default NavBar;
