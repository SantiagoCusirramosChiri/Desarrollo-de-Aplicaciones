import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Login from './Login';

function Header() {
  const { isAuthenticated, user, logout } = useContext(UserContext);

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      { !isAuthenticated ? (
        <Login />
      ) : (
        <div>
          <span>Hola, {user.name}</span>
          <button style={{ marginLeft: '1rem' }} onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
