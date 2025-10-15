import React from "react";

function NotFoundPage() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "404 - Página no encontrada"),
    React.createElement("p", null, "Lo sentimos, la página que buscas no existe.")
  );
}

export default NotFoundPage;
