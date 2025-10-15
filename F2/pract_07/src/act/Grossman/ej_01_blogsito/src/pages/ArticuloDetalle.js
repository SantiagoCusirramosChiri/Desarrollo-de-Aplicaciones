import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const datosArticulos = {
  1: { titulo: "Primer artículo", contenido: "Contenido del artículo 1...", autor: "Autor A", bio: "Biografía del Autor A..." },
  2: { titulo: "Segundo artículo", contenido: "Contenido del artículo 2...", autor: "Autor B", bio: "Biografía del Autor B..." },
  3: { titulo: "Tercer artículo", contenido: "Contenido del artículo 3...", autor: "Autor C", bio: "Biografía del Autor C..." },
  4: { titulo: "Cuarto artículo", contenido: "Contenido del artículo 4...", autor: "Autor D", bio: "Biografía del Autor D..." },
  5: { titulo: "Quinto artículo", contenido: "Contenido del artículo 5...", autor: "Autor E", bio: "Biografía del Autor E..." },
};

function ArticuloDetalle() {
  const params = useParams();
  const id = params.id;
  const articulo = datosArticulos[id];

  if (!articulo) {
    return React.createElement("p", null, "Artículo no encontrado.");
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, articulo.titulo),
    React.createElement("p", null, articulo.contenido),
    React.createElement(Link, { to: "autor" }, "Sobre el Autor"),
    React.createElement(Outlet, null)
  );
}

export default ArticuloDetalle;
