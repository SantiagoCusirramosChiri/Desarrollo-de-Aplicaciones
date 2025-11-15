var express = require('express');

var app = express();

const middleware = function(req, res, next) {
    console.log('ejecutando el middleware mientras llega la peticiónnnn');
    next();
};

app.use(middleware);

app.get('/', function(req, res) {
    res.send('ha llegado la petición al servidor');
});

app.listen(3000, function() {
    console.log(' el servidor en escuchaaaaa xd');
});
