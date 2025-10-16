import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    if (this.state.name && this.state.job) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState); //se limpia el formulario
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  render() {
    const { name, job } = this.state;

    return (
      <form style={{ marginTop: '30px' }}>
        <h2>Agregar nuevo personaje</h2>

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor="job" style={{ marginLeft: '10px' }}>
          Trabajo:
        </label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />

        <input
          type="button"
          value="Agregar"
          onClick={this.submitForm}
          style={{ marginLeft: '10px' }}
        />
      </form>
    );
  }
}

export default Form;
