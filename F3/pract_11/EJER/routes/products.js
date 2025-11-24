const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyTokenAndExpiration } = require('../middleware/auth');

router.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
        if (error) {
            console.error('Error en GET /products:', error);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        res.json({
            mensaje: 'Productos obtenidos correctamente',
            data: results
        });
    });
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    
    db.query('SELECT * FROM products WHERE id = ?', [productId], (error, results) => {
        if (error) {
            console.error('Error en GET /products/:id:', error);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        
        if (results.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        res.json({
            mensaje: 'Producto obtenido correctamente',
            data: results[0]
        });
    });
});

router.post('/products', verifyTokenAndExpiration, (req, res) => {
    const { name, description, price, stock } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ 
            error: 'Los campos nombre y precio son requeridos' 
        });
    }
    
    db.query(
        'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)',
        [name, description, price, stock || 0],
        (error, results) => {
            if (error) {
                console.error('Error en POST /products:', error);
                return res.status(500).json({ error: 'Error en la base de datos' });
            }
            
            res.status(201).json({
                mensaje: 'Producto creado correctamente',
                id: results.insertId,
                usuario: req.authData.user.username
            });
        }
    );
});

router.put('/products/:id', verifyTokenAndExpiration, (req, res) => {
    const productId = req.params.id;
    const { name, description, price, stock } = req.body;
    
    db.query(
        'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?',
        [name, description, price, stock, productId],
        (error, results) => {
            if (error) {
                console.error('Error en PUT /products/:id:', error);
                return res.status(500).json({ error: 'Error en la base de datos' });
            }
            
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            
            res.json({
                mensaje: 'Producto actualizado correctamente',
                usuario: req.authData.user.username
            });
        }
    );
});

router.delete('/products/:id', verifyTokenAndExpiration, (req, res) => {
    const productId = req.params.id;
    
    db.query('DELETE FROM products WHERE id = ?', [productId], (error, results) => {
        if (error) {
            console.error('Error en DELETE /products/:id:', error);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        res.json({
            mensaje: 'Producto eliminado correctamente',
            usuario: req.authData.user.username
        });
    });
});

module.exports = router;