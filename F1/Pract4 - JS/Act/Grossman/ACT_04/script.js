let persona1 = {
    nombre: "Ana",
    edad: 25
};

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
let persona2 = new Persona("Luis", 30);

let prototipoPersona = {
    saludo: function() {
        return "Hola, soy " + this.nombre;
    }
};
let persona3 = Object.create(prototipoPersona);
persona3.nombre = "María";
persona3.edad = 22;

console.log(persona1, persona2, persona3);

persona1.ciudad = "Lima";
persona2.ciudad = "Cusco";
persona3.ciudad = "Arequipa";

console.log(persona1, persona2, persona3);
