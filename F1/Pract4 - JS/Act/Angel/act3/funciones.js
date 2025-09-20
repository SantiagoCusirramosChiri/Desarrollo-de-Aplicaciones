//A) CIUDADANO DE PRIMERA CLASE 
//se define una función flecha llamada funcionxd que, al ser invocada, muestra el mensaje "hola que hace" en la consola
//luego se llama la función con funcionxd();
const funcionxd = () => {
 console.log("hola que hace");
}
funcionxd(); // Invoke it using the variable

//se define la función 'saludito()' que devuelve una cadena de texto
//y la función 'saludo()' recibe una función y nombre como parámetros
//seguidamente ejecuta la función y concatena el resultado con el nombre
function saludito() {
 return "Holaaa, ";
}
function saludo(helloMessage, nombre) {
 console.log(helloMessage() + nombre);
}
// Pass `saludito` as an argument to `saludo` function
saludo(saludito
, "JavaScript!");
// Holaaa, JavaScript!


//la funcion devuelve otra funcion flecha que muestra un mensaje 
function saludito() {
 return () => {
 console.log("Holanda!");
 }
}

//B) CLOSURE
//la función interna recuerda el valor de la variable 'name'
//incluso después de que la función 'makeFunc()' terminó de ejecutarse
function makeFunc() {
 const name = 'Brave';
 function displayName() {
 console.log(name);
 }
 return displayName;
}
const myFunc = makeFunc();
myFunc();

//C) AMBITO DE FUNCION
//dentro de la función, 'x' se imprime correctamente
//pero fuera de la función, al intentar imprimir 'x', se produce un error
//ya que x está en el ámbito local de la función
function exampleFunction() {
 const x = "declarada dentro de la función"; // x can only be used in exampleFunction
 console.log("estoy dentro de la función");
 console.log(x);
}
console.log(x); // Causes error


//la variable 'x' es accesible dentro y fuera de la función
//ya que se trata de una variable global, siendo declarada fuera de cualquier función
const x = "declarada fuera de toda función";
exampleFunction();
function exampleFunction() {
 console.log("dentro de la funcion");
 console.log(x);
}
console.log("fuera de la funcion");
console.log(x);


//funcionamiento de los bloques try, catch y finally con declaraciones return
//un return dentro de finally anula cualquier return previo en try o catch
function f() {
 try {
 console.log(0);
 throw 'bogus';
 } catch (e) {
 console.log(1);
 return true; // this return statement is suspended
 // until finally block has completed
 console.log(2); // not reachable
 } finally {
 console.log(3);
 return false; // overwrites the previous "return"
 console.log(4); // not reachable
 }
 // "return false" is executed now
 console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false


//D) MANEJO DE EXCEPCIONES
//ejemplo de manejo de excepciones personalizadas
//se define una función constructora para crear una excepción personalizada con message y name
//se lanza una excepción al pasar un mes fuera del rango válido
function UserException(message) {
 this.message = message;
  this.name = 'UserException';
}
function getnombreMes(mo) {
 mo--; // Adjust month number for array index (1 = Ene, 12 = Dic)
 const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
 if (meses[mo] !== undefined) {
 return meses[mo];
 } else {
 throw new UserException('InvalidMonthNo');
 }
}
let nombreMes;
try {
 // statements to try
 const miMes = 15; // 15 is out of bound to raise the exception
 nombreMes = getnombreMes(miMes);
} catch (e) {
 nombreMes = 'unknown';
 console.error(e.message, e.name); // pass exception object to err handler
}
