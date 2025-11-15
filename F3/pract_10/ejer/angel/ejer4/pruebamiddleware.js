var express = require('express');
var app = express();

const middleware = function(req,res,next){
    console.log('Ejecutando el middleware mientras llega petición a:', req.url);
    next();
};

app.use(middleware);

app.get('/', function(req,res){
    res.send(`
        <!DOCTYPE html>
<html>
<head>
    <title>pibbles: un estilo de vida xd</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #8fb0ee; text-align: center; padding: 40px; }
        h1 { color: #fff23f; }
        ul { list-style-type: square; text-align: left; display: inline-block; margin-top: 20px; }
        img { margin-top: 20px; border-radius: 8px; }
    </style>
</head>
<body>
    <h1>Pagina de fans de Pibble</h1>
    <img src="https://media.tenor.com/YCsab7Gr0Q0AAAAM/pibble-gmail.gif" alt="perrito2" width="90">
    <p>Un Pibble es un cachorro de bulldog frances muy conocido por los memes actualmente</p>
    <ul>
        <li>Son graciosos y gorditos xd</li>
        <li>Los edits de TikTok son tiernos</li>
        <li>Existen muchas variantes y colores</li>
        <li>Se les puede colocar disfraces y ropa bonita</li>
    </ul>
    <img src="https://media.tenor.com/vrHuyfQv-x8AAAAM/pibble.gif" alt="perrito" width="90">
    <p>Ya dije que me encantan los bulldog franceses? xd</p>
</body>
</html>
    `);
});

// levantando servidor
app.listen(3000, function(){
    console.log('pagina de perritos ejecutandose en el puerto 3000');
});
