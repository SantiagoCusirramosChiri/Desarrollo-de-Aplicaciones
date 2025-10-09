import React from 'react';
import '../app.css';

export default function Contenedor_1() {
    const nombre = 'Mati';
    const imagenUrl = 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2018/08/21/07f65e8a-aff3-4567-b99d-1745b06baec1/red-dead-redemption-2';

    return (
        <div>
            <div className="mi-contenedor">

                <h1>¡Hola, {nombre}!</h1>
                <p>Bienvenido a React</p>

                <img
                    src={imagenUrl}
                    alt="Placeholder"
                    className="mi-imagen"

                />

                <br />

                <p>Hoy es: {new Date().toLocaleDateString()}</p>

                <p>2 + 2 = {2 + 2}</p>

            </div>

        </div>
    );
}
