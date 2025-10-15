import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    const userData = {
      name: 'Juan Perez',
      email: 'juan@example.com'
    };
    login(userData);
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Login;
