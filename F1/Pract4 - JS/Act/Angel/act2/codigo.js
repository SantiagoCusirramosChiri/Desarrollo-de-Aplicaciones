//A) USO DE VARIABLES Y CONSTANTES
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

//B) ELEVACIÓN DE VARIABLES Y C) USO DE CONSOLELOG Y SCOPE
//antes de ejecutarse el codigo, javascript eleva la declaración de la variable x en este caso al inicio del contexto
//al ejecutar 'var x = 3', a pesar de que la declaración 'var x' se eleva, la asignación de su valor '3' no lo hace
//entonces x aun no tiene un valor asignado cuando se evalúa la comparación 'console.log(x === undefined)', por lo que devuelve true


try {
    console.log(funnyman);
} catch (error) {
    console.log("Error al acceder a la constante de bloque:", error.message);
}

console.log(x === undefined); //true
console.log(x); //undefined
var x = 3;

//en este caso, se produce hoisting pero dentro del contexto de la función, ya que la declaración de 'var mivariable' se eleva al principio de la función, pero no su asignación
//al llegar a 'console.log(mivariable)', la variable 'mivariable' ha sido declarada dentro de la función mediante el hoisting, pero no fue asignada aún, por lo que tiene valor undefined
//luego, en el mismo bloque, se asigna el valor 'valor local', pero ocurre después del 'console.log'

//devolverá un valor de undefined
var mivariable = 'hola que hace';
(function() {
    console.log(mivariable); // undefined
    var mivariable = 'valor local';
    console.log(mivariable); // valor local
})();
console.log(mivariable); // 'hola que hace'

//D) USO DE TIPOS DE DATOS Y CAMBIO DE TIPOS DE DATOS
//en este caso, se puede cambiar el tipo de dato de uan variable fácilmente ya que se trata de un lenguaje de tipado dinámico
//es decir, las variables no están estrictamente asociadas a un tipo de dato específico
var answer = 42;
answer = 'Gracias por todo Barcelona de mi vida...';

//el método parseInt() en javascript convierte una cadena en un número entero, interpretando el valor en la base que se especifique 
//si el primer argumento no puede ser convertido a un número en la base indicada, devuelve NaN (Not-a-Number)
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


//se muestra cómo funciona el método .toString() en números para convertirlos a cadenas de texto (strings)
//también se muestra cómo se puede especificar una base numérica (radix) para esa conversión
var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); // displays "10"
alert("45 .toString() is " + 45 .toString()); //displays "45"
var x = 7;
alert(x.toString(2)) // Displays "111"
