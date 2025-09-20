//a) USO DE OBJETO WINDOW
function mostrarPropiedadesWindow() {
  //visualizar algunas propiedades
  console.log("window.innerWidth:", window.innerWidth);
  console.log("window.innerHeight:", window.innerHeight);
  console.log("window.location.href:", window.location.href);
  console.log("window.navigator.userAgent:", window.navigator.userAgent);

  //uso de métodos del objeto Window
  alert("Este es un mensaje con alert()");
  const respuesta = confirm("¿Deseas continuar?");
  console.log("Respuesta confirm:", respuesta);

  const nombre = prompt("¿Cuál es tu nombre?");
  console.log("Nombre ingresado:", nombre);
}

//b) USO DEL OBJETO ARRAY
function mostrarUsoArray() {
  //crear y mostrar un array
  const frutas = ["manzana", "pera", "piña"];
  console.log("Array original:", frutas);
  console.log("Longitud:", frutas.length);

  //uso de algunos métodos del objeto array
  frutas.push("naranja");
  console.log("Después de push:", frutas);
  frutas.pop();
  console.log("Después de pop:", frutas);
  frutas.unshift("fresa");
  console.log("Después de unshift:", frutas);
  frutas.shift();
  console.log("Después de shift:", frutas);
  const indice = frutas.indexOf("pera");
  console.log("Índice de 'pera':", indice);
}

// c) USO DEL OBJETO NUMBER
function mostrarUsoNumber() {
  const numero = 123.456789;

  //propiedades estáticas del objeto number
  console.log("MAX_VALUE:", Number.MAX_VALUE);
  console.log("MIN_VALUE:", Number.MIN_VALUE);
  console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
  console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
  console.log("NaN:", Number.NaN);

  //métodos de instancia del objeto number
  console.log("toFixed(2):", numero.toFixed(2));        // 123.46
  console.log("toExponential(3):", numero.toExponential(3)); // 1.235e+2
  console.log("toPrecision(5):", numero.toPrecision(5)); // 123.46
  console.log("valueOf():", numero.valueOf());          // 123.456789
}
