var express = require('express');
var app = express();
var db = require('./app/models/db');
var Router = require('./app/controllers/routes');
var path = require('path');

var port = process.env.PORT || 3000;

// Middleware para log de solicitudes
app.use(function(req, res, next) {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Usar las rutas de la API
app.use('/api', Router);

// Servir archivos estáticos desde la carpeta views
app.use('/public', express.static(path.join(__dirname, 'app/views')));

// Ruta raíz - redirige a la vista principal
app.get('/', function(req, res) {
  res.redirect('/api');
});

// Ruta para probar servidor
app.get('/health', function(req, res) {
  res.json({ 
    status: 'OK', 
    service: 'Node.js + MongoDB API',
    timestamp: new Date().toISOString(),
    mongodb: 'Connected'
  });
});

// Manejo de errores 404
app.use(function(req, res) {
  res.status(404).json({ 
    error: "Ruta no encontrada",
    available_routes: ["/api", "/api/products", "/health"]
  });
});

// Manejo de errores generales
app.use(function(error, req, res, next) {
  console.error("🔥 Error del servidor:", error);
  res.status(500).json({ 
    error: "Error interno del servidor",
    message: error.message 
  });
});

// Iniciar servidor
app.listen(port, function() {
  console.log(`🚀 Servidor ejecutándose en: http://localhost:${port}`);
  console.log(`📊 Panel web: http://localhost:${port}/api`);
  console.log(`🔍 Health check: http://localhost:${port}/health`);
  console.log(`📦 MongoDB: mongodb://localhost:27017/node-crud`);
  console.log('📝 Usa Ctrl+C para detener el servidor');
});