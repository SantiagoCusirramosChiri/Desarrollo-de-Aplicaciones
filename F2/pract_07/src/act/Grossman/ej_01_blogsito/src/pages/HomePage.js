import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleRandom() {
    const randomId = Math.floor(Math.random() * 5) + 1;
    navigate("/articulos/" + randomId);
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Bienvenido al Blog"),
    React.createElement(
      "button",
      { onClick: handleRandom },
      "Leer un Artículo Aleatorio"
    )
  );
}

export default HomePage;
