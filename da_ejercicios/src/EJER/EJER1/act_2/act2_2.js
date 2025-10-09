import React from 'react';
import '../app.css';

export default function Comp1(params) {
    return(
        < div className= "contenedor-especial">
            <h1>Who lives in my garage?</h1>
            <Marca brand="Ford" color="celeste"/>
            <Marca brand="BMW" color="verde"/>
            <Marca brand="Nissan" color="negro"/>

            <h2>2da Linea</h2>
            <Nombre brand="Sasas" color="jaja"/>

        </div>

    )
}


function Nombre(props) {
    return (
        <h2>I am a {props.brand}! and  {props.color} :p</h2>
    );
}

function Marca(props) {
    return (
        <h2>I am a {props.brand}! and my color is {props.color} :p</h2>
    );
}