import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



// --------------------------------------------------------------
import React from 'react';
import './App.css';

function App() {
  // 2. Crear variable JavaScript
  const nombre = 'Estudiante';
  const imageUrl = 'https://via.placeholder.com/150';

  return (
    <div>
      {/* 1. Usar className en lugar de class */}
      <div className="mi-contenedor">
        <h1>¡Hola Mundo desde React!</h1>
        
        {/* 2. Insertar variable JavaScript con llaves */}
        <p>Bienvenido, {nombre}!</p>
        <p>Hoy es: {new Date().toLocaleDateString()}</p>
        
        {/* 3. Etiquetas autocerradas */}
        <br />  {/* Salto de línea - OBLIGATORIO cerrar */}
        <img 
          src={imageUrl} 
          alt="Ejemplo" 
          className="mi-imagen"
        />  {/* Imagen - OBLIGATORIO cerrar */}
        <hr />  {/* Línea horizontal - OBLIGATORIO cerrar */}
      </div>
    </div>
  );
}

// --------------------------------------------------------------
export default App;