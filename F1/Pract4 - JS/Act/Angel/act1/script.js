//lista de variables
let precio = 22;
const juego = "Superfighters Deluxe";
console.log("Juego cargado:", juego, "Precio regular:", precio);

//array con consejos en strings
const consejos = [
    "Consejo n.° 1: «Siempre presta atención a tu entorno». - Viejo dicho de superluchadores.",
    "Consejo n.° 2: Cuando te incendies, rueda por el suelo para apagarte. Puede que tengas que hacerlo varias veces.",
    "Consejo n.° 3: Siempre presta atención a tu entorno. Hay muchos peligros en cada nivel; intenta aprovecharlos.",
    "Consejo n.° 4: Puedes disparar a través de plataformas delgadas, techos de hojalata y la mayoría de los objetos pequeños.",
    "Consejo n.° 5: «Un superluchador nunca se queja, pero lucha mejor la próxima vez». - Viejo dicho de superluchadores.",
    "Consejo n.° 6: Armas potentes como la Magnum y el rifle de francotirador pueden atravesar muchos objetos más débiles.",
    "Consejo n.° 7: Al deslizarte por una escalera, derribarás a cualquiera que esté justo debajo de ti.",
    "Consejo n.° 8: Los ataques con salto son más poderosos al descender.",
    "Consejo n.° 9: «No hay compasión por quienes se compadecen de sí mismos». - Viejo dicho de superluchadores.",
    "Consejo n.° 10: La patada con salto es útil para derribar enemigos, pero te deja vulnerable al aterrizar.",
    "Consejo n.° 11: Esquivar balas rodando o lanzándote tiene pocas probabilidades de fallar. Los proyectiles más grandes, como bengalas y cohetes, son imposibles de esquivar.",
    "Consejo n.° 12: Cuando te impacte directamente un cohete bazuca, ¡lo pilotarás! Pulsa [Izquierda] y [Derecha] para dirigir.",
    "Consejo n.° 13: «Quien lucha limpio no vive mucho». - Viejo dicho de superluchadores.",
    "Consejo n.° 14: No sufrirás daño por caída al lanzarte, sin importar la distancia.",
    "Consejo n.° 15: Objetos como sillas, botellas y tacos de billar pueden usarse como armas temporales. No se pueden envainar y se rompen con unos pocos golpes.",
    "Consejo n.° 16: Al activar el potenciador de cámara lenta, obtienes una pequeña mejora de velocidad en comparación con otros.",
    "Consejo n.° 17: «Hay muchas maneras de romper un huevo». - Viejo dicho de superluchadores.",
    "Consejo n.° 18: Usa fuego y explosivos para expulsar a los enemigos de su cobertura.",
    "Consejo n.° 19: A veces, perseguir a un enemigo no es la mejor estrategia. Aprende cuándo atacar y cuándo ponerte a la defensiva.",
    "Consejo n.° 20: Puedes disparar a tus compañeros de equipo si estás muy cerca de ellos.",
    "Consejo n.° 21: «No hables cuando haya que luchar». - Viejo dicho de superluchadores.",
    "Consejo n.° 22: Los ataques cuerpo a cuerpo desarmarán a los enemigos en ciertas situaciones, como cuando estén desenfundando o apuntando su arma.",
    "Consejo n.° 23: Puedes atrapar enemigos lanzándote hacia ellos.",
    "Consejo n.° 24: Las armas cuerpo a cuerpo te permiten bloquear balas con un bloqueo o ataque perfectamente sincronizado. Las armas de metal incluso pueden reflejar las balas.",
    "Consejo n.° 25: «Una buena pelea es su propia recompensa». - Viejo dicho de superluchadores.",
    "Consejo n.° 26: ¡No lastimes a tus compañeros de equipo! Son inmunes a tus ataques cuerpo a cuerpo, pero a nada más.",
    "Consejo n.° 27: Puedes recorrer estos consejos pulsando + y -.",
    "Consejo n.° 28: Una granada o mina puede ser un fracaso. Sin embargo, detonarán al disparar.",
    "Consejo n.° 29: Puedes ignorar los mensajes de un jugador escribiendo /ignore [nombre del jugador] en el chat.",
    "Consejo n.° 30: Con cualquier arma en la mano, pulsa [Soltar] para entrar en modo de lanzamiento. También puedes soltar el arma manteniendo pulsado [Soltar].",
    "Consejo n.° 31: Al bloquear un arma lanzada, la atraparás si no tienes un arma en esa ranura.",
    "Consejo n.° 32: Puedes cancelar un lanzamiento pulsando la tecla de envainar ([Envainar]). Sin embargo, no funciona con explosivos activados (granadas, cócteles molotov o minas).",
    "Consejo n.° 33: Puedes agarrar cadáveres pulsando [Agarrar] y manteniendo pulsado [Abajo].",
    "Consejo n.° 34: Estar en llamas no es del todo malo: aumenta ligeramente tu velocidad de carrera.",
    "Consejo n.° 35: Cuando te encuentres en llamas, deslizarte por una escalera ayuda temporalmente, pero debes rodar para apagarlo por completo.",
    "Consejo n.° 36: Al usar el potenciador de fuerza, puedes sobrevivir incluso después de que tu salud llegue a cero, pero morirás cuando el efecto desaparezca.",
    "Consejo n.° 37: Mantener presionado el botón de caminar ([Caminar]) te permite agacharte o rodar sobre una escalera sin deslizarte."
];

function mostrarConsejos() {
    //iterador con forEach
    consejos.forEach((dato, i) => {
        console.log("Consejo " + (i+1) + ": " + dato);
    });

    //consejo aleatoria
    let indice = Math.floor(Math.random() * consejos.length);
    document.getElementById("consejo").innerText = consejos[indice];
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
    mostrarConsejos();
}
