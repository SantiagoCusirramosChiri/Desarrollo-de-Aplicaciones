var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'musikdb'
});

pool.getConnection(function(err, connection) {
  if (err) {
    console.error('Error de conexión:', err.message);
    return;
  }
  
  console.log('Conectado a la base de datos');
  
  connection.query('SELECT * FROM Albums', function (error, results) {
    connection.release(); // Liberar conexión al pool
    
    if (error) {
      console.error('Error en la consulta:', error.message);
      return;
    }
    
    results.forEach(element => {
      console.log(element);
    });
  });
});
