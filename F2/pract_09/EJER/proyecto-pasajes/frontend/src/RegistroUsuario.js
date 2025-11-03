import React, { useState, useEffect } from 'react';

export default function RegistroUsuario() {
  const [intereses, setIntereses] = useState([]);
  const [form, setForm] = useState({
    nombre_completo: '',
    direccion: '',
    email: '',
    contraseña: '',
    fecha_nacimiento: '',
    sexo: '',
    temas_interes: [],
    aficiones: []
  });

  // Cargar los intereses y aficiones desde el backend
  useEffect(() => {
    fetch('http://localhost:4000/api/intereses')
      .then(res => res.json())
      .then(data => {
        console.log('📋 Intereses cargados:', data);
        setIntereses(data);
      })
      .catch(err => console.error('❌ Error cargando intereses:', err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (id, categoria) => {
    const key = categoria === 'Aficion' ? 'aficiones' : 'temas_interes';
    setForm(prev => {
      const updated = prev[key].includes(id)
        ? prev[key].filter(item => item !== id)
        : [...prev[key], id];
      return { ...prev, [key]: updated };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      alert(data.mensaje || 'Usuario registrado correctamente');
    } catch (err) {
      console.error('❌ Error al registrar usuario:', err);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '40px auto',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>✈️ Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre_completo"
          placeholder="Nombre completo"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="direccion"
          placeholder="Dirección"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="contraseña"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <label style={labelStyle}>Fecha de nacimiento:</label>
        <input
          name="fecha_nacimiento"
          type="date"
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Sexo:</label>
        <select name="sexo" onChange={handleChange} style={inputStyle}>
          <option value="">Seleccione sexo</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>

        <h4 style={{ marginTop: '20px', color: '#222' }}>📚 Temas de Interés</h4>
        <div style={checkboxContainer}>
          {intereses
            .filter(i => i.categoria === 'Tema')
            .map(i => (
              <label key={i.id_interes} style={checkboxLabel}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(i.id_interes, i.categoria)}
                />
                {i.nombre_interes}
              </label>
            ))}
        </div>

        <h4 style={{ marginTop: '20px', color: '#222' }}>🏃‍♂️ Aficiones</h4>
        <div style={checkboxContainer}>
          {intereses
            .filter(i => i.categoria === 'Aficion')
            .map(i => (
              <label key={i.id_interes} style={checkboxLabel}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(i.id_interes, i.categoria)}
                />
                {i.nombre_interes}
              </label>
            ))}
        </div>

        <button type="submit" style={buttonStyle}>Registrar</button>
      </form>
    </div>
  );
}

// 💅 Estilos rápidos en JS
const inputStyle = {
  display: 'block',
  width: '100%',
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const labelStyle = {
  fontWeight: 'bold',
  color: '#444',
  marginTop: '10px'
};

const checkboxContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px'
};

const checkboxLabel = {
  background: '#fff',
  borderRadius: '6px',
  padding: '6px 10px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
};

const buttonStyle = {
  background: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  marginTop: '20px',
  cursor: 'pointer'
};
