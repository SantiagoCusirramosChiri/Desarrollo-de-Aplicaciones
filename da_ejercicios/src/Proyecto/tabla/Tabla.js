import React, {Component} from 'react';
import '../style.css';

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table className="table table-striped">
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Serie</th>
            <th>Producto</th>
            <th>ID</th>

        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const {characterData} = props;

    const rows = characterData.map((character, index) => {
        return (
            <tr key={index}>
                <td>{character.nombre}</td>
                <td>{character.trabajo}</td>
                <td>{index + 1}</td>
            </tr>

        );
    });

    return <tbody>{rows}</tbody>

}

export default Table;