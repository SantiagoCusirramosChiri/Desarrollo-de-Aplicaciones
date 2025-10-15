import React from "react";
import { useParams } from "react-router-dom";

const datosArticulos = {
  1: { titulo: "Primer artículo", contenido: "...", autor: "Autor A", bio: "Biografía del Autor A..." },
  2: { titulo: "Segundo artículo", contenido: "...", autor: "Autor B", bio: "Biografía del Autor B..." },
  3: { titulo: "Tercer artículo", contenido: "...", autor: "Autor C", bio: "Biografía del Autor C..." },
  4: { titulo: "Cuarto artículo", contenido: "...", autor: "Autor D", bio: "Biografía del Autor D..." },
  5: { titulo: "Quinto artículo", contenido: "...", autor: "Autor E", bio: "Biografía del Autor E..." },
};

function Autor() {
  const params = useParams();
  const id = params.id;
  const articulo = datosArticulos[id];
  if (!articulo) {
    return null;
  }
  return React.createElement(
    "div",
    { style: { marginTop: "2rem", padding: "1rem", borderTop: "1px solid #ccc" } },
    React.createElement("h3", null, "Sobre el autor: ", articulo.autor),
    React.createElement("p", null, articulo.bio)
  );
}

export default Autor;
