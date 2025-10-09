import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            trabajo: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        const { nombre, trabajo } = this.state;

        // Validar que los campos no estén vacíos
        if (nombre && trabajo) {
            this.props.handleSubmit(this.state);
            this.setState({
                nombre: '',
                trabajo: ''
            });
        } else {
            alert('Por favor, completa todos los campos');
        }
    }

    render() {
        const { nombre, trabajo } = this.state;

        return (
            <div className="form-container">
                <h3>Agregar Nuevo Personaje</h3>

                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={this.handleChange}
                        placeholder="Ingresa el nombre"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trabajo">Trabajo:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="trabajo"
                        name="trabajo"
                        value={trabajo}
                        onChange={this.handleChange}
                        placeholder="Ingresa el trabajo"
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.submitForm}
                >
                    Agregar Personaje
                </button>
            </div>
        );
    }
}

export default Form;