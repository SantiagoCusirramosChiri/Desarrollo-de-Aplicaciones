import { Link } from 'react-router-dom';

export const CoursesPage = () => {
  return (
    <div>
      <h2>Cursos Disponibles</h2>
      <p>Selecciona un curso para ver más detalles:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><Link to="/cursos/react">LP - III</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/cursos/nodejs">DA</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/cursos/sql">GDI</Link></li>
      </ul>
    </div>
  );
};
