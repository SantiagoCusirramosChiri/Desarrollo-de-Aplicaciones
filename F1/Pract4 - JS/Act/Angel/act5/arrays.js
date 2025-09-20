//A) CREACIÓN DE ARRAYS

//usando corchetes []
const numeros1 = [1, 2, 3];
const frutas1 = ["manzana", "pera", "piña"];
const ids1 = [{ id: 1 }, { id: 2 }, { id: 3 }];

//usando new Array()
const numeros2 = new Array(4, 5, 6);
const frutas2 = new Array("uva", "sandía", "ciruela");
const ids2 = new Array({ id: 4 }, { id: 5 });

//usando Array.of()
const numeros3 = Array.of(7, 8, 9);
const frutas3 = Array.of("coco", "kiwi", "melón");
const ids3 = Array.of({ id: 6 }, { id: 7 });

//agregar datos a arrays numéricos
numeros1.push(10);
numeros2.push(11);
numeros3.push(12);

//agregar datos a arrays de strings
frutas1.push("mandarina");
frutas2.push("durazno");
frutas3.push("arándano");

//agregar datos a arrays de objetos
ids1.push({ id: 4 });
ids2.push({ id: 6 });
ids3.push({ id: 8 });

//B) MANIPULACIÓN DE ARRAYS

console.log("frutas1 antes:", frutas1);

//a) ACCEDER A UN ELEMENTO DE ARRAY MEDIANTE SU ÍNDICE
let primero = frutas1[0]; //"manzana"
let ultimo = frutas1[frutas1.length - 1]; //"mandarina"
console.log("Primero:", primero);
console.log("Último:", ultimo);

//b) RECORRER UN ARRAY
console.log("Recorriendo frutas1 con forEach:");
frutas1.forEach(function (elemento, indice) {
  console.log(`Índice ${indice}: ${elemento}`);
});

//c) AÑADIR UN ELEMENTO AL FINAL DE UN ARRAY
let añadirPush = frutas1.push("naranja");
console.log("Después de push:", frutas1);

//d) ELIMINAR EL ÚLTIMO ELEMENTO DE UN ARRAY
let elimPop = frutas1.pop();
console.log("Elemento eliminado con pop:", elimPop);
console.log("Después de pop:", frutas1);

//e) AÑADIR UN ELEMENTO AL PRINCIPIO DE UN ARRAY
let añadirShift = frutas1.unshift("fresa");
console.log("Después de unshift:", frutas1);

//f) ELIMINAR EL PRIMER ELEMENTO DE UN ARRAY
let elimShift = frutas1.shift();
console.log("Elemento eliminado con shift:", elimShift);
console.log("Después de shift:", frutas1);

//g) ENCONTRAR EL ÍNDICE DE UN ELEMENTO DEL ARRAY
frutas1.push("fresa"); 
let pos = frutas1.indexOf("pera");
console.log("Índice de 'pera':", pos);

//Mostrar resultado final
console.log("frutas1 después:", frutas1);


//C) USO DE ITERADORES DE ARRAYS

//recorrer frutas1 con un bucle for
console.log("for - frutas1:");
for (let i = 0; i < frutas1.length; i++) {
  console.log(`Índice ${i}: ${frutas1[i]}`);
}

//recorrer numeros1 con forEach
console.log("forEach - numeros1:");
numeros1.forEach((numero, index) => {
  console.log(`Índice ${index}: ${numero}`);
});

//recorrer ids1 con while
console.log("while - ids1:");
let i = 0;
while (i < ids1.length) {
  console.log(`Índice ${i}: ID = ${ids1[i].id}`);
  i++;
}

//recorrer frutas1 con do-while
console.log("do...while - frutas1:");
let j = 0;
do {
  console.log(`Índice ${j}: ${frutas1[j]}`);
  j++;
} while (j < frutas1.length);
