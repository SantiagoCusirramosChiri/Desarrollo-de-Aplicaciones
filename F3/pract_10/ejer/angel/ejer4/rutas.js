var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send(`
    <h1>mi pagina</h1>
    <p>bienvenido a mi pagina, aca encontraras contenido relacionado a juegos varios</p>
    <ul>
      <li><a href="/login">iniciar sesión</a></li>
      <li><a href="/capturas">ver juegos</a></li>
    </ul>
  `);
});

router.get('/login', function(req, res){
  res.send(`
    <h1>iniciar sesion</h1>
    <p>ingresa tus datos xd</p>
    <ul>
      <li>
        Nombre de usuario: <input type="text" name="username" placeholder="Usuario">
      </li>
      <li>
        Contraseña: <input type="password" name="password" placeholder="Contraseña">
      </li>
       <li>
        <button onclick="window.location.href='/'">registrarte</button>
      </li>
    </ul>

  `);
});

router.get('/capturas', function(req, res){
  res.send(`
    <h1>galeria de capturas de pantalla</h1>
    <ul>
    <li>
        <img src="https://sm.ign.com/t/ign_za/gallery/a/among-us-s/among-us-screenshots_f65x.1200.jpg" alt="amongus" width="300">
        jugando amongus
    </li>
    <li>
        <img src="https://i.redd.it/a-screenshot-story-v0-nvf3zehp5akc1.jpg?width=2560&format=pjpg&auto=webp&s=d0c98d9a0c58c5d48b8106635421861563e69e0e" alt="minecraft" width="300">
        jugando minecraft
    </li>
    <li>
        <img src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/8/c/d/e/8cde611452b8162a0ad5c4f9a230f9bc740a32fa.jpeg" alt="roblox" width="300">
        jugando roblox
    </li>
    </ul>


    <a href="/capturas/jugar">Ir a jugar</a> | 
    <a href="/">volver al inicio</a>
  `);
});

router.get('/capturas/jugar', function(req, res){
  res.send(`
    <h1>listado de juegos</h1>
    <p>aqui puedes jugar los juegos vistos en las capturas</p>
    <ul>
  <li><a href="https://store.steampowered.com/app/945360/Among_Us/">jugar amongus</a></li>
  <li><a href="https://www.minecraft.net/es-es">jugar minecraft</a></li>
  <li><a href="https://www.roblox.com/es/home">jugar roblox</a></li>
</ul>
    <a href="/capturas">volver a la galeria</a>
  `);
});

module.exports = router;
