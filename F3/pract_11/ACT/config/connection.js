const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'santi',
    database: 'biblioteca'
});

connection.connect((err) => {
    if(err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log("Conectado exitosamente a la BD biblioteca");
});

module.exports = connection;