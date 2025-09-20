{
    //variable con ambito de bloque
    let superfighter = "soy un superluchador";

    //constante con ambito de bloque
    const funnyman = "soy una copia del Joker";

    //se muestran las variables dentro del bloque
    console.log(superfighter);
    console.log(funnyman);
}

//se intenta acceder a las variables fuera del bloque
try {
    console.log(superfighter); 
} catch (error) {
    console.log("Error al acceder a la variable de bloque:", error.message);
}

try {
    console.log(funnyman);
} catch (error) {
    console.log("Error al acceder a la constante de bloque:", error.message);
}
