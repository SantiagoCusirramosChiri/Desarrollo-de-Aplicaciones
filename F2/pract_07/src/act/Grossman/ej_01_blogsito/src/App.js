import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArticulosPage from "./pages/ArticulosPage";
import ArticuloDetalle from "./pages/ArticuloDetalle";
import Autor from "./pages/Autor";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return React.createElement(
    Routes,
    null,
    React.createElement(
      Route,
      { path: "/", element: React.createElement(Layout, null) },
      React.createElement(Route, { index: true, element: React.createElement(HomePage, null) }),
      React.createElement(Route, { path: "articulos", element: React.createElement(ArticulosPage, null) }),
      React.createElement(
        Route,
        { path: "articulos/:id", element: React.createElement(ArticuloDetalle, null) },
        React.createElement(Route, { path: "autor", element: React.createElement(Autor, null) })
      ),
      React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage, null) })
    )
  );
}

export default App;
