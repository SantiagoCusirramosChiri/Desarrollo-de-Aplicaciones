const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Pool de conexión MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'archivos_carrera'
});

// Configuración dinámica de almacenamiento según especialidad
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const especialidad = req.body.especialidad;
    const dir = `uploads/${especialidad}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// 1. Endpoint para subir archivo
app.post('/api/upload', upload.single('archivo'), async (req, res) => {
  const { especialidad } = req.body;
  const nombre = req.file.filename;
  const ruta = req.file.path;

  try {
    const [result] = await pool.query(
      'INSERT INTO archivos (nombre, especialidad, ruta) VALUES (?, ?, ?)',
      [nombre, especialidad, ruta]
    );
    res.json({ message: 'Archivo subido correctamente', id: result.insertId });
  } catch (error) {
    console.error('Error al guardar en BD:', error);
    res.status(500).json({ message: 'Error al subir archivo' });
  }
});

// 2. Listar archivos por especialidad
app.get('/api/archivos/:especialidad', async (req, res) => {
  const { especialidad } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM archivos WHERE especialidad = ?',
      [especialidad]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error al listar archivos:', error);
    res.status(500).json({ message: 'Error al consultar archivos' });
  }
});

// 3. Ver contenido de un archivo
app.get('/api/ver/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM archivos WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).send('Archivo no encontrado');

    const rutaArchivo = path.resolve(rows[0].ruta);
    res.sendFile(rutaArchivo);
  } catch (error) {
    console.error('Error al mostrar archivo:', error);
    res.status(500).json({ message: 'Error al mostrar archivo' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});