import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [especialidad, setEspecialidad] = useState('desarrolloweb');
  const [archivo, setArchivo] = useState(null);
  const [archivos, setArchivos] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/api/archivos/${especialidad}`)
      .then(res => res.json())
      .then(data => setArchivos(data))
      .catch(err => console.error(err));
  }, [especialidad]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!archivo) return;

    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('especialidad', especialidad);

    try {
      const res = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setMensaje(data.message);
      setArchivo(null);
      fetch(`http://localhost:3001/api/archivos/${especialidad}`)
        .then(res => res.json())
        .then(data => setArchivos(data));
    } catch (error) {
      console.error(error);
      setMensaje('Error al subir archivo');
    }
  };

  return (
    <div className="App">
      <h1>Gestión de Archivos por Especialidad</h1>

      <form onSubmit={handleUpload}>
        <label>Seleccione Especialidad:</label>
        <select value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
          <option value="desarrolloweb">Desarrollo Web</option>
          <option value="estadistica">Estadística</option>
          <option value="testing">Testing</option>
        </select>

        <input
          type="file"
          onChange={(e) => setArchivo(e.target.files[0])}
          required
        />

        <button type="submit">Subir Archivo</button>
      </form>

      <p>{mensaje}</p>

      <h2>Archivos en {especialidad}</h2>
      <ul>
        {archivos.map((a) => (
          <li key={a.id}>
            {a.nombre} — <a href={`http://localhost:3001/api/ver/${a.id}`} target="_blank" rel="noreferrer">Ver</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
