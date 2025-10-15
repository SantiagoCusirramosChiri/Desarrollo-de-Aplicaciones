import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { isAuthenticated, user } = useContext(UserContext);

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div style={{ border: '1px solid #aaa', padding: '1rem', margin: '1rem' }}>
      <h2>Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
