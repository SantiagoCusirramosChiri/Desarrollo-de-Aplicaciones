//lista de variables
let precio = 22;
const juego = "Superfighters Deluxe";
console.log("Juego cargado:", juego, "Precio regular:", precio);

//array con curiosidades en strings
const curiosidades = [
    "Este juego fue desarrollado por dos jóvenes suecos a modo de tesis para titularse, teniendo éxito.",
    "Tiene uan versión antigua de Flash, siendo una de las más conocidas.",
    "Existen comunidades latinas e inglesas en Discord y Steam."
];

function mostrarCuriosidad() {
    //iterador con forEach
    curiosidades.forEach((dato, i) => {
        console.log("Curiosidad " + (i+1) + ": " + dato);
    });

    //curiosidad aleatoria
    let indice = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidad").innerText = curiosidades[indice];
}

//funcion anidada
function calcularOferta() {
    function aplicarDescuento(precioBase, descuento) {
        return precioBase - (precioBase * descuento / 100);
    }

    let descuento = 30;
    let precioFinal = aplicarDescuento(precio, descuento);

    document.getElementById("precio").innerText =
        `En Steam ahora a ${precioFinal} soles con ${descuento}% de descuento.`;
}

//manejo de excepciones
function mostrarTrailer() {
    try {
        let enlace = document.getElementById("trailer").href;
        if (!enlace.includes("youtube")) {
            throw new Error("El trailer no es un enlace válido de youtube.");
        }
        console.log("Reproduciendo trailer desde:", enlace);
        alert("Abriendo trailer en nueva pestaña...");
        window.open(enlace, "_blank");
        return false; // evita redirección directa
    } catch (error) {
        console.error("Error detectado:", error.message);
        alert("No se pudo cargar el trailer.");
        return false;
    }
}

//info del juego
const infoJuego = {
    nombre: juego,
    precio: precio,
    esMultijugador: true,
    mostrarInfo: function() {
        console.log(`Juego: ${this.nombre}, Precio: ${this.precio}, Multijugador: ${this.esMultijugador}`);
    }
};

//funcion al cargar la página
function iniciarPagina() {
    infoJuego.mostrarInfo();
    mostrarCuriosidad();
    calcularOferta();
}
