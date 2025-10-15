import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return React.createElement(
    "div",
    { className: "layout" },
    React.createElement(NavBar, null),
    React.createElement("main", null, React.createElement(Outlet, null)),
    React.createElement(Footer, null)
  );
}

export default Layout;
