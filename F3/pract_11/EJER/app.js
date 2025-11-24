const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { generateToken, verifyTokenAndExpiration } = require('./middleware/auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'admin' && password === '123456') {
        const user = {
            id: 1,
            username: 'admin',
            role: 'admin',
            email: 'admin@ejemplo.com'
        };
        
        const token = generateToken(user);
        
        res.json({
            mensaje: 'Login exitoso',
            token: token,
            user: user
        });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

app.get('/api/verify-token', verifyTokenAndExpiration, (req, res) => {
    res.json({
        mensaje: 'Token válido',
        user: req.authData.user,
        expira: new Date(req.authData.exp * 1000).toLocaleString()
    });
});

const productsRouter = require('./routes/products');
app.use('/api', productsRouter);

app.get('/', (req, res) => {
    res.json({ 
        mensaje: 'API de Productos funcionando!',
        endpoints_publicos: {
            'POST /api/login': 'Obtener token JWT',
            'GET /api/products': 'Listar productos (público)',
            'GET /api/products/:id': 'Obtener producto (público)'
        },
        endpoints_protegidos: {
            'POST /api/products': 'Crear producto (requiere token)',
            'PUT /api/products/:id': 'Actualizar producto (requiere token)', 
            'DELETE /api/products/:id': 'Eliminar producto (requiere token)',
            'GET /api/verify-token': 'Verificar token'
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});