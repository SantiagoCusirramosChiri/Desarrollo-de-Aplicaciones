var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>ejercicioooo expresss</title>
       
    </head>
    <body>

        <h1>seleccion aleatoria de curso</h1>
        <p>bienvenido! para saber el curso que vas a tener, haz clic en el boton:</p>

        <button onclick="generarPalabra()">elegir curso</button>

        <span id="palabra">---</span>

        <script>
            const palabras = ["sia", "redes", "desarrollo de aplicaciones", "gdi", "lenguajes de programacion", "ads", "iti"];

            function generarPalabra() {
                const indice = Math.floor(Math.random() * palabras.length);
                document.getElementById("palabra").innerText = palabras[indice];
            }
        </script>

    </body>
    </html>
  `);
});

app.get('/login', function(req, res){
  res.send('<h1>aquí se mostraría la página del login xd</h1>');
});

app.listen(3000, function(){
  console.log('revisa el generador de cursos en el navegador!!!');
});