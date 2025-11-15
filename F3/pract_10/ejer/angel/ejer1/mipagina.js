var http = require('http');
var server = http.createServer();

function mensaje (req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    resp.write('<!DOCTYPE html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>pagina ejercicio 11111</title>');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>bienvenido a mi perfil de info personal!</h1>');
    resp.write('<p>me llamo pepe y estas son 3 cosas sobre mi:</p>');
    resp.write('<ul>');
    resp.write('<li>me gusta el queso</li>');
    resp.write('<li>juego futbol</li>');
    resp.write('<li>tengo mucho sueño xd</li>');
    resp.write('</ul>');
    resp.write('<img src="https://wallpapercave.com/wp/wp13360606.jpg" width="200" alt="maincraaa">');
    resp.write('</body>');
    resp.write('</html>');

    resp.end();
}

server.on('request', mensaje);
server.listen(3000, function() {
    console.log('deberia estar funcionando ahora xddd');
});
