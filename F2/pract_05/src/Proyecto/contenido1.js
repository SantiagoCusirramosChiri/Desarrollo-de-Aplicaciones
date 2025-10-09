import React from "react";
import './style.css';

export default function Contenido1() {
    return (
        <div className="container">
            <div className="image-content">
                <img
                    src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51"
                    alt="Hollow"
                />
            </div>

            <div className="text">
                <h2>Tienda Clave</h2>
                <p>
                    Sumérgete en el universo donde Team Cherry cobra vida con figuras exclusivas de Hollow Knight,
                    descubre waifus legendarias que robarán tu corazón, revive la épica rivalidad USCA vs Alemania
                    con merchandise coleccionable, y carga tus energías con los productos más radicales de RadBull.
                </p>
                <ul className="features-list">
                    <li>Figuras exclusivas de Hornert & Team Cherry</li>
                    <li>Waifus premium limit edition</li>
                    <li>Merchandise USCA vs Alemania para true fans</li>
                    <li>Productos RadBull to keep your energy</li>
                    <li>Artbooks, posters y coleccionables únicos</li>
                </ul>
                <button className="shop-button">Explorar Colecciones</button>
            </div>
        </div>
    );
}