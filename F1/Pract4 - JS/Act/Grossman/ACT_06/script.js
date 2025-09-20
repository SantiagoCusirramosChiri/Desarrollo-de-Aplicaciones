function usarWindow() {
    let salida = "Propiedades de window: " + Object.keys(window).slice(0,5).join(", ") + "<br>";
    salida += "URL actual: " + window.location.href + "<br>";
    salida += "Ancho de pantalla: " + window.innerWidth + "<br>";
    document.getElementById("resultado").innerHTML += salida + "<hr>";
}

function usarArray() {
    let arr = [1,2,3,4,5];
    let salida = "Array original: " + arr.join(", ") + "<br>";
    salida += "Invertido: " + arr.reverse().join(", ") + "<br>";
    salida += "Suma con reduce: " + arr.reduce((a,b)=>a+b,0) + "<br>";
    document.getElementById("resultado").innerHTML += salida + "<hr>";
}

function usarNumber() {
    let num = 123.456;
    let salida = "Valor: " + num + "<br>";
    salida += "toFixed(2): " + num.toFixed(2) + "<br>";
    salida += "toExponential(3): " + num.toExponential(3) + "<br>";
    salida += "MAX_VALUE: " + Number.MAX_VALUE + "<br>";
    document.getElementById("resultado").innerHTML += salida + "<hr>";
}

usarWindow();
usarArray();
usarNumber();
