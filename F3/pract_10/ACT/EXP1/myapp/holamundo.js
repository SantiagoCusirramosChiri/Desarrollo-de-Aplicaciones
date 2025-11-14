var http = require('http');

var server = http.createServer();

function mensaje (req, resp) {
    resp.writeHead(200, {'content-type':'text/plain'});
    resp.end('Hola Mundo\n');
    resp.end();
}

server.on('request', mensaje);

server.listen(3000,function(){
    console.log('Servidor web iniciado en el puerto 3000');
});