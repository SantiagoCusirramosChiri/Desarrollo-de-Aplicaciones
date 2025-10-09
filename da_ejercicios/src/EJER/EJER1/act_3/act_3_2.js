import React from 'react';
import '../app.css';
import Table from './act_3_1.js';

function App() {
    const characters = [
        {
            nombre: 'Baje de pepa',
            trabajo: 'How to drink Red Bull to keep awake'
        },
        {
            nombre: 'Ing de Sistemas',
            trabajo: 'Intelligence for monkeys'
        },
        {
            nombre: 'Carlos Méndez',
            trabajo: 'Desarrollador Frontend'
        },
        {
            nombre: 'Ana García',
            trabajo: 'Diseñadora UI/UX'
        },
        {
            nombre: 'Luis Torres',
            trabajo: 'Desarrollador Backend'
        },
        {
            nombre: 'María López',
            trabajo: 'Project Manager'
        }
    ];

    return (
        <div className="mi-contenedor">
            <h1>¡Hola, Mati!</h1>
            <p>Bienvenido Tablas</p>

            <Table characterData={characters} />

            <p>Hoy es: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default App;