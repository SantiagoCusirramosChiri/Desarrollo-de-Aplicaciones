import React from 'react';
import '../style.css';
import Table from './Tabla.js';

function DataTable() {
    const characters = [
        {
            nombre: 'Naruto Shippuden',
            trabajo: 'Funko Pop Naruto Modo Sabio'
        },
        {
            nombre: 'One Piece',
            trabajo: 'Figura de Luffy Gear 5'
        },
        {
            nombre: 'Attack on Titan',
            trabajo: 'Estatua de Eren Titán'
        },
        {
            nombre: 'Demon Slayer',
            trabajo: 'Espada Nichirin de Tanjiro'
        },
        {
            nombre: 'My Hero Academia',
            trabajo: 'Figura de All Might'
        },
        {
            nombre: 'Dragon Ball Z',
            trabajo: 'Goku Super Saiyan God'
        },
        {
            nombre: 'Jujutsu Kaisen',
            trabajo: 'Nendoroid Gojo Satoru'
        },
        {
            nombre: 'Spy x Family',
            trabajo: 'Peluche de Anya Forger'
        },
        {
            nombre: 'Chainsaw Man',
            trabajo: 'Figura de Denji con Motosierra'
        },
        {
            nombre: 'Tokyo Ghoul',
            trabajo: 'Máscara de Kaneki Ken'
        }
    ];

    return (
        <div className="mi-contenedor">
            <h1>Catálogo de Productos</h1>
            <p>Explora nuestra colección de figuras y merchandising anime</p>

            <Table characterData={characters} />
        </div>
    );
}

export default DataTable;