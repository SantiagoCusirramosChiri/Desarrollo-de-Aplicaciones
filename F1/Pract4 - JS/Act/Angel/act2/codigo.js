
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

console.log(x === undefined); //true
var x = 3;
//devolverá un valor de undefined
var mivariable = 'hola que hace';
(function() {
    console.log(mivariable); //undefined
    var mivariable = 'valor local';}
)();

var answer = 42;
answer = 'Gracias por todo Barcelona de mi vida...';

parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
parseInt("Holanda", 8); //No es un número en absoluto
parseInt("0x7", 10); //No es de base 10
parseInt("546", 2); //Los dígitos no son válidos para representaciones binarias.

var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); // displays "10"
alert("45 .toString() is " + 45 .toString()); //displays "45"
var x = 7;
alert(x.toString(2)) // Displays "111"
