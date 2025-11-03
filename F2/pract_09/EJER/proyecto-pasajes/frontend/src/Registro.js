import { useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setError(null);
    setResultado(null);

    try {
      const respuesta = await fetch("http://localhost:4000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, fechaNacimiento }),
      });

      const data = await respuesta.json();
      if (!respuesta.ok) throw new Error(data.message || "Error al registrar");

      setResultado(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ margin: "3rem auto", width: "400px", textAlign: "center" }}>
      <h2>🛫 Registro de Pasajero</h2>
      <form onSubmit={enviarFormulario}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Registrar
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          ❌ Error: {error}
        </p>
      )}

      {resultado && (
        <div
          style={{
            marginTop: "2rem",
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <h3>✅ Registro exitoso</h3>
          <p><b>Nombre:</b> {nombre}</p>
          <p><b>Edad:</b> {resultado.edad} años</p>
          <p><b>Precio del pasaje:</b> ${resultado.precio}</p>
        </div>
      )}
    </div>
  );
}
