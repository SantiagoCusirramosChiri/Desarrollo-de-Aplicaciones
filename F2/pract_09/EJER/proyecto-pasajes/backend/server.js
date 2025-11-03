import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'santi',
  database: 'pasajes_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/api/usuarios', async (req, res) => {
  const {
    nombre_completo,
    direccion,
    email,
    contraseña,
    fecha_nacimiento,
    sexo,
    temas_interes,
    aficiones
  } = req.body;

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const [result] = await connection.query(
      `INSERT INTO usuarios (nombre_completo, direccion, email, contraseña, fecha_nacimiento, sexo)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre_completo, direccion, email, contraseña, fecha_nacimiento, sexo]
    );

    const id_usuario = result.insertId;

    if (Array.isArray(temas_interes)) {
      for (const id_interes of temas_interes) {
        await connection.query(
          `INSERT INTO usuario_intereses (id_usuario, id_interes) VALUES (?, ?)`,
          [id_usuario, id_interes]
        );
      }
    }

    if (Array.isArray(aficiones)) {
      for (const id_interes of aficiones) {
        await connection.query(
          `INSERT INTO usuario_intereses (id_usuario, id_interes) VALUES (?, ?)`,
          [id_usuario, id_interes]
        );
      }
    }

    await connection.commit();

    res.json({
      mensaje: '✅ Usuario registrado correctamente',
      id_usuario
    });
  } catch (error) {
    await connection.rollback();
    console.error('❌ Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario', error });
  } finally {
    connection.release();
  }
});


app.get('/api/intereses', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id_interes, nombre_interes, categoria FROM intereses`
    );
    res.json(rows);
  } catch (error) {
    console.error('❌ Error al obtener intereses:', error);
    res.status(500).json({ mensaje: 'Error al obtener los intereses' });
  }
});

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

const PORT = 4000;
app.listen(PORT, () => console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`));
