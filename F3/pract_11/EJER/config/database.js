const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'santi',
    database: 'ejercicios'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a la BD ejercicios');
});

module.exports = connection;