const jwt = require('jsonwebtoken');

const SECRET_KEY = 'clave_secreta_ejercicio_2025';

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({ error: 'Token de acceso requerido' });
    }
};

const verifyTokenAndExpiration = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        
        jwt.verify(bearerToken, SECRET_KEY, (err, authData) => {
            if (err) {
                return res.status(403).json({ 
                    error: 'Token inválido o expirado',
                    detalles: err.message 
                });
            }
            req.authData = authData;
            next();
        });
    } else {
        res.status(403).json({ error: 'Token de acceso requerido' });
    }
};

const generateToken = (user) => {
    return jwt.sign(
        { 
            user: user,
            timestamp: new Date().getTime()
        }, 
        SECRET_KEY, 
        { expiresIn: '1h' }
    );
};

module.exports = {
    verifyToken,
    verifyTokenAndExpiration,
    generateToken,
    SECRET_KEY
};