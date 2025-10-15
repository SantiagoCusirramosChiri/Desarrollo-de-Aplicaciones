import React from "react";
import { Link } from "react-router-dom";

const articulos = [
  { id: 1, titulo: "Primer artículo" },
  { id: 2, titulo: "Segundo artículo" },
  { id: 3, titulo: "Tercer artículo" },
  { id: 4, titulo: "Cuarto artículo" },
  { id: 5, titulo: "Quinto artículo" },
];

function ArticulosPage() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Artículos"),
    React.createElement(
      "ul",
      null,
      articulos.map(function (art) {
        return React.createElement(
          "li",
          { key: art.id },
          React.createElement(Link, { to: "/articulos/" + art.id }, art.titulo)
        );
      })
    )
  );
}

export default ArticulosPage;
