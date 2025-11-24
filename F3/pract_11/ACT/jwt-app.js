const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const SECRET_KEY = 'mi_clave_secreta_jwt_2025';

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        mensaje: "Esta es la Data de Clientes - Público"
    });
});

app.post('/api/posts', verificarToken, (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, authData) => {
        if (err) {
            return res.status(403).send({ error: 'Token inválido o expirado' });
        } else {
            res.json({
                mensaje: 'Post Creado... (PROTEGIDO)',
                authData: authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'santi',
        email: 'sage@gmail.com'
    };

    jwt.sign({ user: user }, SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
        if (err) {
            return res.status(500).send({ error: 'Error generando token' });
        }
        res.json({
            mensaje: 'Login exitoso',
            token: token
        });
    });
});

function verificarToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).send({ error: 'Token no proporcionado' });
    }
}

app.listen(5000, () => console.log("Servidor JWT ejecutándose en puerto 5000"));