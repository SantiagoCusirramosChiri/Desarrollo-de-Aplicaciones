//A) CREACIÓN DE OBJETOS

//iniciador de objetos
const persona1 = {
  nombre: "Angel",
  edad: 19
};

//constructor de objetos
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
const persona2 = new Persona("Miguel", 20);

//object.create()
const prototipoPersona = {
  saludar: function () {
    console.log("Que onda, me llamo " + this.nombre);
  }
};
const persona3 = Object.create(prototipoPersona);
persona3.nombre = "Santiago";
persona3.edad = 20;


//B) AGREGANDO PROPIEDADES A LOS OBJETOS
//agregar propiedad a objeto usando iniciadores de objetos
persona1.ocupacion = "estudiante";
persona2.ocupacion = "docente";
persona3.ocupacion = "ingeniero";

console.log("---- persona1 ----");
console.log(persona1);
console.log("---- persona2 ----");
console.log(persona2);
console.log("---- persona3 ----");
console.log(persona3);
persona3.saludar();
