var express = require('express');
var Product = require('../models/products');
var router = express.Router();
var path = require('path');

// Middleware para parsear JSON y form-urlencoded
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Middleware de log
router.use(function(req, res, next) {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
  next();
});

// Ruta para servir la vista HTML
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Ruta de prueba de API
router.get('/status', function(req, res) {
  res.json({ 
    status: 'online',
    message: 'API Node.js + MongoDB funcionando',
    timestamp: new Date().toISOString()
  });
});

// POST - Crear producto (ASYNC/AWAIT)
router.post('/products', async function(req, res) {
  try {
    console.log("📤 POST /products - Datos:", req.body);

    if (!req.body.name || !req.body.amount) {
      return res.status(400).json({
        error: "Los campos 'name' y 'amount' son obligatorios"
      });
    }

    const product = new Product({
      name: req.body.name,
      amount: Number(req.body.amount),
      description: req.body.description || ""
    });

    const savedProduct = await product.save();
    console.log("✅ Producto creado:", savedProduct._id);
    
    res.status(201).json({ 
      success: true,
      message: "Producto registrado con éxito",
      product: savedProduct 
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ 
      error: "Error en la base de datos",
      details: error.message 
    });
  }
});

// GET - Listar productos (ASYNC/AWAIT)
router.get('/products', async function(req, res) {
  try {
    console.log("📥 GET /products");
    
    const products = await Product.find({});
    console.log(`✅ Encontrados ${products.length} productos`);
    
    res.json({
      success: true,
      count: products.length,
      products: products
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ 
      error: "Error al obtener productos",
      details: error.message 
    });
  }
});

// GET - Obtener producto por ID (ASYNC/AWAIT)
router.get('/products/:id', async function(req, res) {
  try {
    console.log(`📄 GET /products/${req.params.id}`);
    
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json({ success: true, product: product });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ 
      error: "Error en la base de datos",
      details: error.message 
    });
  }
});

// PUT - Actualizar producto (ASYNC/AWAIT)
router.put('/products/:id', async function(req, res) {
  try {
    console.log(`🔄 PUT /products/${req.params.id}`, req.body);
    
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Actualizar campos
    if (req.body.name !== undefined) product.name = req.body.name;
    if (req.body.amount !== undefined) product.amount = Number(req.body.amount);
    if (req.body.description !== undefined) product.description = req.body.description;

    const updatedProduct = await product.save();
    
    res.json({ 
      success: true, 
      message: "Producto actualizado",
      product: updatedProduct 
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ 
      error: "Error en la base de datos",
      details: error.message 
    });
  }
});

// DELETE - Eliminar producto (ASYNC/AWAIT)
router.delete('/products/:id', async function(req, res) {
  try {
    console.log(`🗑️ DELETE /products/${req.params.id}`);
    
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json({ 
      success: true, 
      message: "Producto eliminado",
      product: product 
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ 
      error: "Error en la base de datos",
      details: error.message 
    });
  }
});

module.exports = router;