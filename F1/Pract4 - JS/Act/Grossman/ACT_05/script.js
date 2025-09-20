let numeros1 = [1, 2, 3];
let numeros2 = new Array(4, 5, 6);
let numeros3 = Array.of(7, 8, 9);

let strings1 = ["a", "b", "c"];
let strings2 = new Array("d", "e", "f");
let strings3 = Array.of("g", "h", "i");

let objetos1 = [{n:1}, {n:2}];
let objetos2 = new Array({n:3}, {n:4});
let objetos3 = Array.of({n:5}, {n:6});

numeros1.push(10);
strings1.unshift("z");
objetos1[0].extra = true;

let salida = "";
salida += "Numeros: " + numeros1.join(", ") + "<br>";
salida += "Strings: " + strings1.join(", ") + "<br>";
salida += "Objetos: " + JSON.stringify(objetos1) + "<br>";

let mapRes = numeros2.map(x => x * 2);
let filterRes = numeros3.filter(x => x > 7);
let forEachRes = "";
strings2.forEach(s => forEachRes += s + " ");

salida += "Map: " + mapRes.join(", ") + "<br>";
salida += "Filter: " + filterRes.join(", ") + "<br>";
salida += "ForEach: " + forEachRes + "<br>";

document.getElementById("resultado").innerHTML = salida;
