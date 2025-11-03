import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'santi',
  database: 'pasajes_db'
});


app.post('/api/usuarios', (req, res) => {
  const { nombre, fechaNacimiento } = req.body;
  const edad = calcularEdad(fechaNacimiento);
  let precio = calcularPrecio(edad);

  db.query(
    'INSERT INTO usuarios (nombre, fechaNacimiento, edad, precio) VALUES (?, ?, ?, ?)',
    [nombre, fechaNacimiento, edad, precio],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ mensaje: 'Usuario registrado correctamente', edad, precio });
    }
  );
});

function calcularEdad(fechaNac) {
  const nacimiento = new Date(fechaNac);
  const hoy = new Date();
  return hoy.getFullYear() - nacimiento.getFullYear();
}

function calcularPrecio(edad) {
  const base = 100;
  if (edad < 2) return 0;
  if (edad <= 17) return base * 0.75;
  return base;
}

// matriz - -- IGNORE --- xD - osea que tenia que ver esto? no entendi xd
app.get('/api/matriz/:n', (req, res) => {
  const n = parseInt(req.params.n);

  if (isNaN(n) || n < 2) {
    return res.status(400).json({ error: 'El tamaño debe ser un número >= 2' });
  }

  const matriz = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Math.floor(Math.random() * 9) + 1)
  );

  const esPerfecta = verificarMatrizPerfecta(matriz);

  res.json({ matriz, esPerfecta });
});

function verificarMatrizPerfecta(matriz) {
  const n = matriz.length;
  const sumaObjetivo = matriz[0].reduce((a, b) => a + b, 0);

  for (let i = 0; i < n; i++) {
    const sumaFila = matriz[i].reduce((a, b) => a + b, 0);
    if (sumaFila !== sumaObjetivo) return false;
  }

  for (let j = 0; j < n; j++) {
    let sumaCol = 0;
    for (let i = 0; i < n; i++) sumaCol += matriz[i][j];
    if (sumaCol !== sumaObjetivo) return false;
  }

  let diag1 = 0,
    diag2 = 0;
  for (let i = 0; i < n; i++) {
    diag1 += matriz[i][i];
    diag2 += matriz[i][n - 1 - i];
  }

  return diag1 === sumaObjetivo && diag2 === sumaObjetivo;
}

app.listen(4000, () => console.log('Servidor corriendo en http://localhost:4000'));