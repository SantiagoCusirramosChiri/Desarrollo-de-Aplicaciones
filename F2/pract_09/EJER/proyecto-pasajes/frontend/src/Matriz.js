import { useState } from "react";

export default function Matriz() {
  const [tamaño, setTamaño] = useState(3);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const generarMatriz = async () => {
    setResultado(null);
    setError(null);

    try {
      const res = await fetch(`http://localhost:4000/api/matriz/${tamaño}`);
      const data = await res.json();

      if (res.ok) setResultado(data);
      else setError(data.error || "Error al generar la matriz");
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div style={{ margin: "3rem auto", width: "400px", textAlign: "center" }}>
      <h2>🧮 Generar Matriz Aleatoria</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="number"
          min="2"
          max="10"
          value={tamaño}
          onChange={(e) => setTamaño(e.target.value)}
          style={{ width: "80px", padding: "5px" }}
        />
        <button
          onClick={generarMatriz}
          style={{
            marginLeft: "1rem",
            backgroundColor: "#28a745",
            color: "white",
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Generar
        </button>
      </div>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {resultado && (
        <div>
          <h3>Matriz {tamaño}x{tamaño}</h3>
          <table
            style={{
              borderCollapse: "collapse",
              margin: "1rem auto",
              border: "1px solid gray",
            }}
          >
            <tbody>
              {resultado.matriz.map((fila, i) => (
                <tr key={i}>
                  {fila.map((valor, j) => (
                    <td
                      key={j}
                      style={{
                        border: "1px solid gray",
                        padding: "10px",
                        width: "40px",
                        textAlign: "center",
                      }}
                    >
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            Resultado:{" "}
            {resultado.esPerfecta ? (
              <span style={{ color: "green" }}>✅ Es perfecta</span>
            ) : (
              <span style={{ color: "red" }}>❌ No es perfecta</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
