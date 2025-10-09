import React, { Component } from 'react';

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], //estado inicial vacío
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result });
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }

  render() {
    const { data } = this.state;

    return (
      <div style={{ marginTop: '30px' }}>
        <h2>Datos obtenidos de la API</h2>
        {data.length === 0 ? (
          <p>Cargando datos...</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data.map((item) => (
              <li
                key={item.id}
                style={{
                  border: '1px solid #ccc',
                  margin: '10px auto',
                  width: '60%',
                  padding: '10px',
                  borderRadius: '8px',
                }}
              >
                <strong>{item.name}</strong> — {item.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Api;
