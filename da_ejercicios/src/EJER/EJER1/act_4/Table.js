import React, {Component} from 'react';
import '../app.css';

class Table extends Component {
    render() {
        const { characterData, removeCharacter  } = this.props;

        return (
            <table className="table table-striped">
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removecharacterData={removeCharacter}
                />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead className="thead-dark" >
        <tr>
            <th>Nombre</th>
            <th>Trabajo</th>
            <th>ID</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const {characterData, removeCharacter} = props;

    const rows = characterData.map((character, index) => {
        return (
            <tr key={index}>
                <td>{character.nombre}</td>
                <td>{character.trabajo}</td>
                <td>

                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeCharacter(index)}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>

};

export default Table;