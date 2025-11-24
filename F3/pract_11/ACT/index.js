var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');


var connection = mysql.createConnection({
  host: 'localhost',
  database: 'barbershop',
  user: 'root',
  password: 'santi'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Se conectó a la BD');
});

var server = app.listen(3000, "127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Servidor ejecutándose en http://%s:%s', host, port);
});

app.get('/books', function(req, res) {
  connection.query('SELECT * FROM books', function(error, results) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get('/books/:id', function(req, res) {
    connection.query('SELECT * FROM books WHERE id = ?', [req.params.id], function(error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});