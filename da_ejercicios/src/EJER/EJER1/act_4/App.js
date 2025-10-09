import React, { Component } from 'react';
import '../app.css';
import Table from './Table';

class App extends Component {
    // 1. Inicializar el estado
    constructor(props) {
        super(props);

        this.state = {
            characters: [
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
            ]
        };
    }

    // 2. Método para eliminar personajes
    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    render() {
        const { characters } = this.state;
        const nombre = 'Estudiante';
        const imagenUrl = 'https://via.placeholder.com/300x200';

        return (
            <div className="mi-contenedor">
                <h1>¡Hola, {nombre}!</h1>
                <p>Bienvenido a React - Manejo de Estado</p>

                <img
                    src={imagenUrl}
                    alt="Placeholder"
                    className="mi-imagen"
                />

                {/* Pasar función como prop */}
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />

                <p>Hoy es: {new Date().toLocaleDateString()}</p>
            </div>
        );
    }
}

export default App;