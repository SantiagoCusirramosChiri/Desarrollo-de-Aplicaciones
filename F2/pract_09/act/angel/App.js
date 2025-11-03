import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estado para guardar los clientes y el estado de carga
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta cuando el componente se carga
  useEffect(() => {
    // Hacemos la petición a nuestra API backend
    fetch('http://localhost:3001/api/customers')
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data); // Guardamos los datos en el estado
        setLoading(false); // Dejamos de cargar
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
        setLoading(false);
      });
  }, []); // El array vacío [] significa que solo se ejecuta una vez

  // Renderizado condicional
  if (loading) {
    return (
      <div className="App">
        <h1>Cargando clientes...</h1>
      </div>
    );
  }

  // Renderizado de los datos
  return (
    <div className="App">
      <header className="App-header">
        <h1>Listado de Clientes y ISBNs</h1>
        <div className="customer-list">
          {customers.map((customer, index) => (
            <div key={index} className="customer-item">
              <p>
                <strong>Nombre:</strong> {customer.name}
              </p>
              <p>
                <strong>ISBN:</strong> {customer.isbn}
              </p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;