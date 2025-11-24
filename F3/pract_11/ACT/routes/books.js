const express = require('express');
const appRouter = express.Router();  // ✅ Router nativo de Express
const con = require('../config/connection');

// const bodyParser = require("body-parser");
// appRouter.use(bodyParser.urlencoded({extended: true}));
// appRouter.use(bodyParser.json());

let sql_all = 'CALL usp_listar_books()';
let sql_insert = 'CALL usp_insertar_book(?, ?, ?)';

appRouter.get('/books', (req, res) => {
    con.query(sql_all, (error, results) => {
        if (error) {
            console.error('Error en GET /books:', error);
            return res.status(500).send({ error: 'Error en la base de datos' });
        }
        res.send(results[0]);
    });
});

appRouter.post('/books', (req, res) => {
    const book = {
        title: req.body.book_title,
        author: req.body.book_author,
        publicado: req.body.book_published
    };
    
    con.query(sql_insert, [book.title, book.author, book.publicado], 
        (error, results) => {
            if (error) {
                console.error('Error en POST /books:', error);
                return res.status(500).send({ error: 'Error en la base de datos' });
            }
            res.send({
                mensaje: 'Libro insertado correctamente',
                libro: results[0][0]
            });
        }
    );
});

module.exports = appRouter;